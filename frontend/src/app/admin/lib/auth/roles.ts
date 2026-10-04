import { UserRole } from '../../types/user';
import { PERMISSIONS } from '../constants/permissions';

export interface RoleDefinition {
  name: string;
  description: string;
  permissions: string[];
}

export const ROLE_DEFINITIONS: Record<UserRole, RoleDefinition> = {
  super_admin: {
    name: 'Super Admin',
    description: 'Full access to all settings, system configurations, and data.',
    permissions: Object.values(PERMISSIONS),
  },
  admin: {
    name: 'Admin',
    description: 'Management access to content, leads, events, and user accounts.',
    permissions: [
      PERMISSIONS.LEADS_VIEW,
      PERMISSIONS.LEADS_CREATE,
      PERMISSIONS.LEADS_EDIT,
      PERMISSIONS.LEADS_ASSIGN,
      PERMISSIONS.LEADS_EXPORT,
      PERMISSIONS.EVENTS_VIEW,
      PERMISSIONS.EVENTS_CREATE,
      PERMISSIONS.EVENTS_EDIT,
      PERMISSIONS.EVENTS_REGISTRATIONS_VIEW,
      PERMISSIONS.BLOGS_VIEW,
      PERMISSIONS.BLOGS_CREATE,
      PERMISSIONS.BLOGS_EDIT,
      PERMISSIONS.BLOGS_PUBLISH,
      PERMISSIONS.TESTIMONIALS_VIEW,
      PERMISSIONS.TESTIMONIALS_CREATE,
      PERMISSIONS.TESTIMONIALS_EDIT,
      PERMISSIONS.USERS_VIEW,
      PERMISSIONS.USERS_MANAGE,
      PERMISSIONS.SETTINGS_MANAGE,
    ],
  },
  counselor: {
    name: 'Counselor',
    description: 'Assigned to work with leads, student counseling, and events.',
    permissions: [
      PERMISSIONS.LEADS_VIEW,
      PERMISSIONS.LEADS_EDIT,
      PERMISSIONS.EVENTS_VIEW,
      PERMISSIONS.EVENTS_REGISTRATIONS_VIEW,
    ],
  },
  editor: {
    name: 'Content Editor',
    description: 'Manage blogs, events, and student testimonials.',
    permissions: [
      PERMISSIONS.EVENTS_VIEW,
      PERMISSIONS.EVENTS_CREATE,
      PERMISSIONS.EVENTS_EDIT,
      PERMISSIONS.BLOGS_VIEW,
      PERMISSIONS.BLOGS_CREATE,
      PERMISSIONS.BLOGS_EDIT,
      PERMISSIONS.TESTIMONIALS_VIEW,
      PERMISSIONS.TESTIMONIALS_CREATE,
      PERMISSIONS.TESTIMONIALS_EDIT,
    ],
  },
  viewer: {
    name: 'Viewer',
    description: 'Read-only access to leads, events, and blogs.',
    permissions: [
      PERMISSIONS.LEADS_VIEW,
      PERMISSIONS.EVENTS_VIEW,
      PERMISSIONS.BLOGS_VIEW,
    ],
  },
};
