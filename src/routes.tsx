import SamplePage from './pages/SamplePage';
import Portfolio from './pages/Portfolio';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Portfolio />
  }
];

export default routes;
