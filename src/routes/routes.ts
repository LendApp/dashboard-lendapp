import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  icon: string;
  children?: Route[];
}

const ECommerce = lazy(() => import('../pages/Dashboard/ECommerce'));
const Calendar = lazy(() => import('../pages/Calendar'));
const Profile = lazy(() => import('../pages/Profile'));
const Tables = lazy(() => import('../pages/Tables'));
const Settings = lazy(() => import('../pages/Settings'));

export const routes: Route[] = [
  {
    to: '/dashboard',
    path: 'dashboard',
    Component: ECommerce,
    name: 'Dashboard',
    icon: 'dashboard',
    children: [
      {
        to: '/dashboard',
        path: 'ecommerce',
        Component: Calendar,
        name: 'eCommerce',
        icon: 'shopping_cart',
      },
    ],
  },
  {
    to: '/calendar',
    path: 'calendar',
    Component: Calendar,
    name: 'Calendar',
    icon: 'calendar_month',
  },
  {
    to: '/profile',
    path: 'profile',
    Component: Profile,
    name: 'Profile',
    icon: 'person',
  },
  {
    to: '/tables',
    path: 'tables',
    Component: Tables,
    name: 'Tables',
    icon: 'table',
  },
  {
    to: '/settings',
    path: 'settings',
    Component: Settings,
    name: 'Settings',
    icon: 'settings',
  }
];
