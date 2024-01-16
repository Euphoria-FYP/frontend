import {
  MarketPlaceItem,
  CategoriesCardProps,
  ContributorCardProps,
  tagsData,
} from "./types";
import Art from "./assets/images/art.jpg";
import Game from "./assets/images/game.jpg";
import Music from "./assets/images/music.jpg";
import Sports from "./assets/images/sports.jpg";

export const marketPlaceData: MarketPlaceItem[] = [
  {
    category: "Sports",
    nft: [
      {
        marketplace: "cricket",
        name: "Daniyal Saleem",
        userName: "dani36",
        currentBid: 0.854,
        inDollars: 1400.5,
      },
      {
        marketplace: "badminton",
        name: "Dr. John",
        userName: "john26",
        currentBid: 0.389,
        inDollars: 1400.3,
      },
      {
        marketplace: "football",
        name: "Michael Johnson",
        userName: "mike_j",
        currentBid: 0.589,
        inDollars: 2200.97,
      },
    ],
  },

  {
    category: "Game",
    nft: [
      {
        marketplace: "snipping",
        name: "Obaid Ur Rehman",
        userName: "obbi45",
        currentBid: 0.985,
        inDollars: 1900.23,
      },
    ],
  },

  {
    category: "Art",
    nft: [
      {
        marketplace: "drawing",
        name: "Huzaifa",
        userName: "huzzi90",
        currentBid: 0.415,
        inDollars: 1200.23,
      },
    ],
  },

  {
    category: "Music",
    nft: [
      {
        marketplace: "pop",
        name: "Ahsan Omerjee",
        userName: "ahsan2002",
        currentBid: 0.584,
        inDollars: 1900.2,
      },
      {
        marketplace: "concerts",
        name: "Bob Johnson",
        userName: "bob_j",
        currentBid: 0.789,
        inDollars: 3100.85,
      },
    ],
  },
];

export const Categories: CategoriesCardProps[] = [
  { title: "Art", cardimage: Art },
  { title: "Game", cardimage: Game },
  { title: "Music", cardimage: Music },
  { title: "Sports", cardimage: Sports },
];

export const cards: ContributorCardProps[] = [
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
  { name: "Adaugo Chibuike Sandra", ethAmount: "0.86" },
];

export const tags: tagsData[] = [
    {
        tag:"Sports"
    },
    {
        tag:"Music"
    },
    {
        tag:"Art"
    },
    {
        tag:"Game"
    },
    {
        tag:"Painting"
    },
];
