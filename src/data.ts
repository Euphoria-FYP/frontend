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
        id: 1,
        marketplace: "cricket",
        name: "Daniyal Saleem",
        userName: "dani36",
        currentBid: 0.899,
        inDollars: 3400.5,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
      },
      {
        id: 2,
        marketplace: "cricket",
        name: "Daniyal Saleem",
        userName: "dani36",
        currentBid: 0.854,
        inDollars: 1400.5,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
      },
      {
        id: 3,
        marketplace: "cricket",
        name: "Inzamam malik",
        userName: "inzzi36",
        currentBid: 0.321,
        inDollars: 2100.5,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
      },
      {
        id: 4,
        marketplace: "badminton",
        name: "Dr. John",
        userName: "john26",
        currentBid: 0.389,
        inDollars: 1400.3,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
      },
      {
        id: 5,
        marketplace: "football",
        name: "Michael Johnson",
        userName: "mike_j",
        currentBid: 0.589,
        inDollars: 2200.97,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
      },
    ],
  },

  {
    category: "Game",
    nft: [
      {
        id: 1,
        marketplace: "snipping",
        name: "Obaid Ur Rehman",
        userName: "obbi45",
        currentBid: 0.985,
        inDollars: 1900.23,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
      },
    ],
  },

  {
    category: "Art",
    nft: [
      {
        id: 1,
        marketplace: "Drawing",
        name: "Huzaifa",
        userName: "huzzi90",
        currentBid: 0.415,
        inDollars: 1200.23,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
      },
    ],
  },

  {
    category: "Music",
    nft: [
      {
        id: 1,
        marketplace: "Pop Singer",
        name: "Ahsan Omerjee",
        userName: "ahsan2002",
        currentBid: 0.584,
        inDollars: 1900.2,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
      },
      {
        id: 2,
        marketplace: "Concerts",
        name: "Bob Johnson",
        userName: "bob_j",
        currentBid: 0.789,
        inDollars: 3100.85,
        details: [
          {
            contractAddress: "0XD564...7B38",
            name: "Brodband",
            tokenId: 3740,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "1 Month Ago",
            creatorEarnings: "5%",
          },
        ],
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
    tag: "Sports",
  },
  {
    tag: "Music",
  },
  {
    tag: "Art",
  },
  {
    tag: "Game",
  },
  {
    tag: "Painting",
  },
];
