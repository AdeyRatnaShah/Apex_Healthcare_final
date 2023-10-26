const mapping: Record<string, string> = {
  'call-histories': 'call_history',
  'call-participants': 'call_participant',
  'call-recordings': 'call_recording',
  'call-schedules': 'call_schedule',
  organizations: 'organization',
  'organization-memberships': 'organization_membership',
  'organization-settings': 'organization_settings',
  users: 'user',
  'user-activity-logs': 'user_activity_log',
  'user-profiles': 'user_profile',
  'user-statuses': 'user_status',
  'video-calls': 'video_call',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
