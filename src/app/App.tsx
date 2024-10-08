import { RouterProvider } from 'react-router-dom';
import { router } from './router/browser_router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
