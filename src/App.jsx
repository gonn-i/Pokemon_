import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true }, { path: '/:id' }],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
