import axios from 'axios';
import queryString from 'query-string';
import { VideoCallInterface, VideoCallGetQueryInterface } from 'interfaces/video-call';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVideoCalls = async (
  query?: VideoCallGetQueryInterface,
): Promise<PaginatedInterface<VideoCallInterface>> => {
  const response = await axios.get('/api/video-calls', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVideoCall = async (videoCall: VideoCallInterface) => {
  const response = await axios.post('/api/video-calls', videoCall);
  return response.data;
};

export const updateVideoCallById = async (id: string, videoCall: VideoCallInterface) => {
  const response = await axios.put(`/api/video-calls/${id}`, videoCall);
  return response.data;
};

export const getVideoCallById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/video-calls/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVideoCallById = async (id: string) => {
  const response = await axios.delete(`/api/video-calls/${id}`);
  return response.data;
};
