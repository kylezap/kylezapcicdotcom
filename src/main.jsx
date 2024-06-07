import * as React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import App from './App';
import Home from './Routes/Home';
import About from './Routes/About';
import Work from './Routes/Work';
import NotFound from './Routes/NotFound';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
console.log(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);