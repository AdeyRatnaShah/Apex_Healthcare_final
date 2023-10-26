import { GetQueryInterface } from 'interfaces';

export interface CallParticipantInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CallParticipantGetQueryInterface extends GetQueryInterface {
  id?: string;
}
