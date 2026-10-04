export const PERMISSIONS = {
  // Leads
  LEADS_VIEW: 'leads:view',
  LEADS_CREATE: 'leads:create',
  LEADS_EDIT: 'leads:edit',
  LEADS_DELETE: 'leads:delete',
  LEADS_ASSIGN: 'leads:assign',
  LEADS_EXPORT: 'leads:export',

  // Events
  EVENTS_VIEW: 'events:view',
  EVENTS_CREATE: 'events:create',
  EVENTS_EDIT: 'events:edit',
  EVENTS_DELETE: 'events:delete',
  EVENTS_REGISTRATIONS_VIEW: 'events:registrations:view',

  // Blogs
  BLOGS_VIEW: 'blogs:view',
  BLOGS_CREATE: 'blogs:create',
  BLOGS_EDIT: 'blogs:edit',
  BLOGS_DELETE: 'blogs:delete',
  BLOGS_PUBLISH: 'blogs:publish',

  // Testimonials
  TESTIMONIALS_VIEW: 'testimonials:view',
  TESTIMONIALS_CREATE: 'testimonials:create',
  TESTIMONIALS_EDIT: 'testimonials:edit',
  TESTIMONIALS_DELETE: 'testimonials:delete',

  // Users
  USERS_VIEW: 'users:view',
  USERS_MANAGE: 'users:manage',

  // Settings
  SETTINGS_MANAGE: 'settings:manage',
} as const;

export type PermissionKey = keyof typeof PERMISSIONS;
export type PermissionValue = (typeof PERMISSIONS)[PermissionKey];
