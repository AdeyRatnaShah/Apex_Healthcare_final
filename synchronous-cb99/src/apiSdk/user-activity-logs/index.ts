import axios from 'axios';
import queryString from 'query-string';
import { UserActivityLogInterface, UserActivityLogGetQueryInterface } from 'interfaces/user-activity-log';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserActivityLogs = async (
  query?: UserActivityLogGetQueryInterface,
): Promise<PaginatedInterface<UserActivityLogInterface>> => {
  const response = await axios.get('/api/user-activity-logs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserActivityLog = async (userActivityLog: UserActivityLogInterface) => {
  const response = await axios.post('/api/user-activity-logs', userActivityLog);
  return response.data;
};

export const updateUserActivityLogById = async (id: string, userActivityLog: UserActivityLogInterface) => {
  const response = await axios.put(`/api/user-activity-logs/${id}`, userActivityLog);
  return response.data;
};

export const getUserActivityLogById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-activity-logs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserActivityLogById = async (id: string) => {
  const response = await axios.delete(`/api/user-activity-logs/${id}`);
  return response.data;
};
