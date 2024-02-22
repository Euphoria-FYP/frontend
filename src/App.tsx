import "./App.css";
import Home from "../src/Pages/Home";
import MarketPlacePage from "./Pages/Marketplace/MarketPlacePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleNft from "./Pages/SingleNft";
import Profile from "./Pages/Profile";
import CreateCollection from "./Pages/CreateCollection";
import SingleCollection from "./Pages/SingleCollection";
import CollectionRanking from "./Pages/CollectionRanking";
import CreateProfile from "./Pages/CreateProfile";
import UploadNFT from "./Pages/UploadNft";
import HelpPage from "./Pages/Help";
import PageNotFound from "./Pages/Error";

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
    // {
    //   path: "/single-collection",
    //   element: <SingleCollection />,
    // },
    {
      path: "/help",
      element: <HelpPage />,
    },
    {
      path: "/collection/:tag/:id",
      element: <SingleCollection />,
    },
    {
      path: "/top-collections",
      element: <CollectionRanking />,
    },
    {
      path: "/create-profile",
      element: <CreateProfile />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
