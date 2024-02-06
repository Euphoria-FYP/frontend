import "./App.css";
import Home from "../src/Pages/Home";
import MarketPlace from "../src/Pages/Marketplace";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingleNft from "./Pages/SingleNft";
import Profile from "./Pages/Profile";

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
      path: '/nft/:category/:id',
      element: <SingleNft />
    },
    {
      path: '/profile',
      element: <Profile />
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
