import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// lazy 로드
const Layout = lazy(() => import('./pages/Layout'));
const Main = lazy(() => import('./pages/Main'));
const Detail = lazy(() => import('./pages/Detail'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense>
              <Main />
            </Suspense>
          ),
        },
        {
          path: '/pokemon/:id',
          element: (
            <Suspense>
              <Detail />
            </Suspense>
          ),
        },
      ],
      errorElement: (
        <Suspense>
          <PageNotFound />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
