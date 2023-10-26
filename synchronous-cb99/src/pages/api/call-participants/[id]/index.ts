import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { callParticipantValidationSchema } from 'validationSchema/call-participants';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.call_participant
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getCallParticipantById();
    case 'PUT':
      return updateCallParticipantById();
    case 'DELETE':
      return deleteCallParticipantById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCallParticipantById() {
    const data = await prisma.call_participant.findFirst(convertQueryToPrismaUtil(req.query, 'call_participant'));
    return res.status(200).json(data);
  }

  async function updateCallParticipantById() {
    await callParticipantValidationSchema.validate(req.body);
    const data = await prisma.call_participant.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteCallParticipantById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.call_participant.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
