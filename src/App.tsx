import "./App.css";
import Home from "../src/Pages/Home";
import MarketPlace from "../src/Pages/Marketplace";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/marketplace',
      element: <MarketPlace />
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
