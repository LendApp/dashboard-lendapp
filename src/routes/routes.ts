import { lazy, LazyExoticComponent } from 'react';
type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  icon: string;
}

const Calendar = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ '../pages/Calendar'),
);
const Profile = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ '../pages/Profile'),
);
const Tables = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ '../pages/Tables'),
);

const Settings = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ '../pages/Settings'),
);

export const routes: Route[] = [
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
    to: '/Tables',
    path: 'Tables',
    Component: Tables,
    name: 'Tables',
    icon: 'table',
  },
  {
    to: '/Settings',
    path: 'Settings',
    Component: Settings,
    name: 'Settings',
    icon: 'settings',
  },
];
