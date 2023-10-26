import axios from 'axios';
import queryString from 'query-string';
import {
  OrganizationMembershipInterface,
  OrganizationMembershipGetQueryInterface,
} from 'interfaces/organization-membership';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOrganizationMemberships = async (
  query?: OrganizationMembershipGetQueryInterface,
): Promise<PaginatedInterface<OrganizationMembershipInterface>> => {
  const response = await axios.get('/api/organization-memberships', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOrganizationMembership = async (organizationMembership: OrganizationMembershipInterface) => {
  const response = await axios.post('/api/organization-memberships', organizationMembership);
  return response.data;
};

export const updateOrganizationMembershipById = async (
  id: string,
  organizationMembership: OrganizationMembershipInterface,
) => {
  const response = await axios.put(`/api/organization-memberships/${id}`, organizationMembership);
  return response.data;
};

export const getOrganizationMembershipById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/organization-memberships/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteOrganizationMembershipById = async (id: string) => {
  const response = await axios.delete(`/api/organization-memberships/${id}`);
  return response.data;
};
