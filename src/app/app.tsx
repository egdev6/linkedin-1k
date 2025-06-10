import { useTheme } from '@hooks/use-theme';
import { RouterProvider } from 'react-router-dom';
import Router from './Router';

const App = () => {
  useTheme();
  return <RouterProvider router={Router} />;
};

export default App;
