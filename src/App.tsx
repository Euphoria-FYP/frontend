import "./App.css";
import Home from "../src/Pages/Home";
import MarketPlace from "../src/Pages/Marketplace";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingleNft from "./Pages/SingleNft";

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
    {
      path: '/singlenft',
      element: <SingleNft />
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
