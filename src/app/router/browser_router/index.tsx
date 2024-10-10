import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '../lib/path';
import { Main } from '../../../pages/main/Main';
import { Layout } from '../../components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: PATHS.main,
    element: <Layout />,
    children: [
      {
        path: PATHS.main,
        element: <Main />,
      },
      {
        path: PATHS.characters,
        element: <div>characters</div>,
      },
    ],
  },
]);
