import { GetQueryInterface } from 'interfaces';

export interface CallHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CallHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
