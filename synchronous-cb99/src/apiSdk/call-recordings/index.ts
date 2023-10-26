import axios from 'axios';
import queryString from 'query-string';
import { CallRecordingInterface, CallRecordingGetQueryInterface } from 'interfaces/call-recording';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCallRecordings = async (
  query?: CallRecordingGetQueryInterface,
): Promise<PaginatedInterface<CallRecordingInterface>> => {
  const response = await axios.get('/api/call-recordings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCallRecording = async (callRecording: CallRecordingInterface) => {
  const response = await axios.post('/api/call-recordings', callRecording);
  return response.data;
};

export const updateCallRecordingById = async (id: string, callRecording: CallRecordingInterface) => {
  const response = await axios.put(`/api/call-recordings/${id}`, callRecording);
  return response.data;
};

export const getCallRecordingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/call-recordings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCallRecordingById = async (id: string) => {
  const response = await axios.delete(`/api/call-recordings/${id}`);
  return response.data;
};
