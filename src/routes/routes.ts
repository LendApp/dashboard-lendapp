import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component?:
    | LazyExoticComponent<JSXComponent>
    | JSXComponent
    | LazyExoticComponent<React.FC<{}>>;
  name: string;
  icon: string;
  children?: Route[]; // Allow for nested routes
}

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const Profile = lazy(() => import('../pages/Profile'));
const Tables = lazy(() => import('../pages/Tables'));
const Settings = lazy(() => import('../pages/Settings'));

export const routes: Route[] = [
  {
    to: '/dashboard',
    path: 'dashboard',
    name: 'Elementos Plantilla',
    icon: 'dashboard',
    children: [
      {
        to: '/dashboard/alerts',
        path: 'alerts',
        name: 'Alerts',
        icon: 'warning',
      },
      {
        to: '/dashboard/buttons',
        path: 'buttons',
        name: 'Buttons',
        icon: 'check_box',
      },
      {
        to: '/dashboard/calendar',
        path: 'calendar',
        Component: Calendar,
        name: 'Calendar',
        icon: 'calendar_month',
      },
      {
        to: '/dashboard/chart',
        path: 'chart',
        Component: Chart,
        name: 'Chart',
        icon: 'pie_chart',
      },
      {
        to: '/dashboard/ecommerce',
        path: 'ecommerce',
        Component: Calendar,
        name: 'Ecommerce',
        icon: 'shopping_cart',
      },
      {
        to: '/dashboard/form-elements',
        path: 'form-elements',
        name: 'Form Elements',
        icon: 'edit',
      },
      {
        to: '/dashboard/form-layout',
        path: 'form-layout',
        name: 'Form Layout',
        icon: 'dock_to_left',
      },
      {
        to: '/dashboard/profile',
        path: 'profile',
        Component: Profile,
        name: 'Profile',
        icon: 'person',
      },
      {
        to: '/dashboard/signin',
        path: 'sigin',
        name: 'Sign In',
        icon: 'login',
      },
      {
        to: '/dashboard/tables',
        path: 'tables',
        Component: Tables,
        name: 'Tables',
        icon: 'table',
      },
    ],
  },

  {
    to: '/settings',
    path: 'settings',
    Component: Settings,
    name: 'Configuración',
    icon: 'settings',
  },
];
