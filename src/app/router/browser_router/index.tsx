import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '../lib/path';
import { Layout } from '../../components/layout/Layout';
import { Stories } from '../../../pages/stories/Stories';
import { Character } from '../../../pages/characters/components/Character';
import { GetCharacters } from '../../../features/getCharacters/GetCharacters';
import { Creators } from '../../../pages/creators/Creators';
import { GetHome } from '../../../features/getHomePage/GetHomePage';

export const router = createBrowserRouter([
  {
    path: PATHS.main,
    element: <Layout />,
    children: [
      {
        path: PATHS.main,
        element: <GetHome />,
      },
      {
        path: `${PATHS.main}/:id`,
        element: <Character />,
      },
      {
        path: PATHS.characters,
        element: <GetCharacters />,
      },
      {
        path: PATHS.stories,
        element: <Stories/>,
      },
      {
        path: `${PATHS.characters}/:id`,
        element: <Character />,
      },
      {
        path: PATHS.creators,
        element: <Creators/>,
      },
    ],
  },
]);
