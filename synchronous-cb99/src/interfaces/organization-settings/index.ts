import { GetQueryInterface } from 'interfaces';

export interface OrganizationSettingsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface OrganizationSettingsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
