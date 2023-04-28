import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import ErrorPage from './pages/error-page';
import GlobalStyle from './UI/GlobalStyle';
import Task1 from './pages/task-1';
import Task2 from './pages/task-2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/task-1',
    element: <Task1 />,
  },
  {
    path: '/task-2',
    element: <Task2 />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
