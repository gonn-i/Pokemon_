import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Main from './pages/Main';
import Detatil from './pages/Detail';
import PageNotFound from './pages/PageNotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        { path: '/pokemon/:id', element: <Detatil /> },
      ],
      errorElement: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
