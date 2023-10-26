import { GetQueryInterface } from 'interfaces';

export interface VideoCallInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface VideoCallGetQueryInterface extends GetQueryInterface {
  id?: string;
}
