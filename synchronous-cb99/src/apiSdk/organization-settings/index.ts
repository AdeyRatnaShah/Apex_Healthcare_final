import axios from 'axios';
import queryString from 'query-string';
import { OrganizationSettingsInterface, OrganizationSettingsGetQueryInterface } from 'interfaces/organization-settings';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOrganizationSettings = async (
  query?: OrganizationSettingsGetQueryInterface,
): Promise<PaginatedInterface<OrganizationSettingsInterface>> => {
  const response = await axios.get('/api/organization-settings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOrganizationSettings = async (organizationSettings: OrganizationSettingsInterface) => {
  const response = await axios.post('/api/organization-settings', organizationSettings);
  return response.data;
};

export const updateOrganizationSettingsById = async (
  id: string,
  organizationSettings: OrganizationSettingsInterface,
) => {
  const response = await axios.put(`/api/organization-settings/${id}`, organizationSettings);
  return response.data;
};

export const getOrganizationSettingsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/organization-settings/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteOrganizationSettingsById = async (id: string) => {
  const response = await axios.delete(`/api/organization-settings/${id}`);
  return response.data;
};
