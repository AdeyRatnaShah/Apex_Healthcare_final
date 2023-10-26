import axios from 'axios';
import queryString from 'query-string';
import { CallScheduleInterface, CallScheduleGetQueryInterface } from 'interfaces/call-schedule';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCallSchedules = async (
  query?: CallScheduleGetQueryInterface,
): Promise<PaginatedInterface<CallScheduleInterface>> => {
  const response = await axios.get('/api/call-schedules', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCallSchedule = async (callSchedule: CallScheduleInterface) => {
  const response = await axios.post('/api/call-schedules', callSchedule);
  return response.data;
};

export const updateCallScheduleById = async (id: string, callSchedule: CallScheduleInterface) => {
  const response = await axios.put(`/api/call-schedules/${id}`, callSchedule);
  return response.data;
};

export const getCallScheduleById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/call-schedules/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCallScheduleById = async (id: string) => {
  const response = await axios.delete(`/api/call-schedules/${id}`);
  return response.data;
};
