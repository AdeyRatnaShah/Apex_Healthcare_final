import axios from 'axios';
import queryString from 'query-string';
import { CallHistoryInterface, CallHistoryGetQueryInterface } from 'interfaces/call-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCallHistories = async (
  query?: CallHistoryGetQueryInterface,
): Promise<PaginatedInterface<CallHistoryInterface>> => {
  const response = await axios.get('/api/call-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCallHistory = async (callHistory: CallHistoryInterface) => {
  const response = await axios.post('/api/call-histories', callHistory);
  return response.data;
};

export const updateCallHistoryById = async (id: string, callHistory: CallHistoryInterface) => {
  const response = await axios.put(`/api/call-histories/${id}`, callHistory);
  return response.data;
};

export const getCallHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/call-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCallHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/call-histories/${id}`);
  return response.data;
};
