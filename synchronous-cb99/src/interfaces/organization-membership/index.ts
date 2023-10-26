import { GetQueryInterface } from 'interfaces';

export interface OrganizationMembershipInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface OrganizationMembershipGetQueryInterface extends GetQueryInterface {
  id?: string;
}
