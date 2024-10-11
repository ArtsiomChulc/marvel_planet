import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '../lib/path';
import { Main } from '../../../pages/main/Main';
import { Layout } from '../../components/layout/Layout';
import { Stories } from '../../../pages/stories/Stories';
import { Character } from '../../../pages/main/components/Character';

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
        path: PATHS.stories,
        element: <Stories/>,
      },
      {
        path: `${PATHS.characters}/:id`,
        element: <Character />,
      },
    ],
  },
]);
