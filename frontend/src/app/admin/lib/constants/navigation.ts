import {
  LayoutDashboard,
  Users2,
  Calendar,
  FileText,
  MessageSquareQuote,
  UserCog,
  Settings,
} from 'lucide-react';
import { ADMIN_ROUTES } from './routes';
import { PERMISSIONS } from './permissions';

export interface NavItem {
  title: string;
  href: string;
  icon: any;
  permission?: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const ADMIN_NAV_SECTIONS: NavSection[] = [
  {
    title: 'Overview',
    items: [
      {
        title: 'Dashboard',
        href: ADMIN_ROUTES.DASHBOARD,
        icon: LayoutDashboard,
      },
      {
        title: 'Leads & Enquiries',
        href: ADMIN_ROUTES.LEADS,
        icon: Users2,
        permission: PERMISSIONS.LEADS_VIEW,
      },
    ],
  },
  {
    title: 'Content & Marketing',
    items: [
      {
        title: 'Blogs & Articles',
        href: ADMIN_ROUTES.BLOGS,
        icon: FileText,
        permission: PERMISSIONS.BLOGS_VIEW,
      },
      {
        title: 'Events & Fairs',
        href: ADMIN_ROUTES.EVENTS,
        icon: Calendar,
        permission: PERMISSIONS.EVENTS_VIEW,
      },
      {
        title: 'Testimonials',
        href: ADMIN_ROUTES.TESTIMONIALS,
        icon: MessageSquareQuote,
        permission: PERMISSIONS.TESTIMONIALS_VIEW,
      },
    ],
  },
  {
    title: 'Administration',
    items: [
      {
        title: 'Team & Users',
        href: ADMIN_ROUTES.USERS,
        icon: UserCog,
        permission: PERMISSIONS.USERS_VIEW,
      },
      {
        title: 'Settings',
        href: ADMIN_ROUTES.SETTINGS,
        icon: Settings,
        permission: PERMISSIONS.SETTINGS_MANAGE,
      },
    ],
  },
];
