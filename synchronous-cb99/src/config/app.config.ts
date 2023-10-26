interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Administrator', 'Doctor', 'Guest User', 'Manager', 'Patient'],
  tenantName: 'Organization',
  applicationName: 'Apex',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read call history', 'Read user profiles', 'View organization settings', 'View call recordings'],
  ownerAbilities: [
    'Manage user activity log',
    'Manage call schedule',
    'Manage organization settings',
    'Manage user profile',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7540ac4a-6f3d-47d8-a097-20c6b12e89b3',
};
