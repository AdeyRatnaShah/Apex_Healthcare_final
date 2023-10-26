import { GetQueryInterface } from 'interfaces';

export interface CallScheduleInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CallScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
}
