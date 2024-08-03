import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Cards from './components/Cards';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <>
              <Cards />
            </>
          ),
        },
        { path: '/:id' },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
