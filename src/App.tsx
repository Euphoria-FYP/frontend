import "./App.css";
import Home from "../src/Pages/Home";
import MarketPlacePage from "./Pages/Marketplace/MarketPlacePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleNft from "./Pages/SingleNft";
import Profile from "./Pages/Profile";
import CreateCollection from "./Pages/CreateCollection";
import SingleCollection from "./Pages/SingleCollection";
import CollectionRanking from "./Pages/CollectionRanking";
import UploadNFT from "./Pages/UploadNft";
import HelpPage from "./Pages/Help";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/marketplace",
      element: <MarketPlacePage />,
    },
    {
      path: "/nft/:category/:id",
      element: <SingleNft />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/upload-nft",
      element: <UploadNFT />,
    },
    {
      path: "/create-collection",
      element: <CreateCollection />,
    },
    {
      path: "/single-collection",
      element: <SingleCollection />,
    },
    {
      path: "/help",
      element: <HelpPage />,
    },
    {
      path: "/ranking",
      element: <CollectionRanking />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
