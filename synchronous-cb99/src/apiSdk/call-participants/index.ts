import axios from 'axios';
import queryString from 'query-string';
import { CallParticipantInterface, CallParticipantGetQueryInterface } from 'interfaces/call-participant';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCallParticipants = async (
  query?: CallParticipantGetQueryInterface,
): Promise<PaginatedInterface<CallParticipantInterface>> => {
  const response = await axios.get('/api/call-participants', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCallParticipant = async (callParticipant: CallParticipantInterface) => {
  const response = await axios.post('/api/call-participants', callParticipant);
  return response.data;
};

export const updateCallParticipantById = async (id: string, callParticipant: CallParticipantInterface) => {
  const response = await axios.put(`/api/call-participants/${id}`, callParticipant);
  return response.data;
};

export const getCallParticipantById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/call-participants/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCallParticipantById = async (id: string) => {
  const response = await axios.delete(`/api/call-participants/${id}`);
  return response.data;
};
