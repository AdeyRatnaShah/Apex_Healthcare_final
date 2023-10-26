import { GetQueryInterface } from 'interfaces';

export interface UserActivityLogInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserActivityLogGetQueryInterface extends GetQueryInterface {
  id?: string;
}
