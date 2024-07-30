import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([{ path: '/', children: [{ path: '/:id' }] }]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
