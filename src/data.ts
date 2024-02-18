import {
  MarketPlaceItem,
  CategoriesCardProps,
  ContributorCardProps,
  tagsData,
  stepsData,
  FAQsData,
  CollectionsData,
} from "./types";
import Art from "./assets/images/art.jpg";
import Game from "./assets/images/game.jpg";
import Music from "./assets/images/music.jpg";
import Sports from "./assets/images/sports.jpg";
import Step1 from "./assets/images/step1.png";
import Step2 from "./assets/images/step2.png";
import Step3 from "./assets/images/step3.png";
import Step4 from "./assets/images/step4.png";
import collection1 from "./assets/images/collection/c1.jpeg";
import collection2 from "./assets/images/collection/c2.jpeg";
import collection3 from "./assets/images/collection/c3.jpeg";
import collection4 from "./assets/images/collection/c4.jpeg";
import collection5 from "./assets/images/collection/c5.jpg";
import collection6 from "./assets/images/collection/c6.jpg";
import collection7 from "./assets/images/collection/c7.jpg";
import collection8 from "./assets/images/collection/c8.jpg";
import collection9 from "./assets/images/collection/c9.jpg";
import collection10 from "./assets/images/collection/c10.png";
import collection11 from "./assets/images/collection/c11.jpg";
import collection12 from "./assets/images/collection/c12.png";
import collection13 from "./assets/images/collection/c13.png";
import collection14 from "./assets/images/collection/c14.jpg";
import collection15 from "./assets/images/collection/c15.jpg";
import collection16 from "./assets/images/collection/c16.jpg";

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
            name: "The Stunning Game",
            tokenId: 3540,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "2 Month Ago",
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
            name: "The Amazing Art",
            tokenId: 3712,
            tokenStandard: "ERC-721",
            chain: "Ethereum",
            lastUpdated: "2 Days Ago",
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
  { name: "John Moris", ethAmount: "0.86" },
  { name: "Daniyal Saleem", ethAmount: "0.26" },
  { name: "Ahsan Omerjee", ethAmount: "0.89" },
  { name: "John Cena", ethAmount: "0.76" },
  { name: "Obaid Bihari", ethAmount: "0.86" },
  { name: "Kaleen Bhaiya", ethAmount: "0.26" },
  { name: "The Rock", ethAmount: "0.86" },
  { name: "Romain Reigns", ethAmount: "0.86" },
  { name: "Robert D. Jr", ethAmount: "0.36" },
];

export const tags: tagsData[] = [
  {
    class: "bgTabImgSports",
    tag: "Sports",
  },
  {
    class: "bgTabImgMusic",
    tag: "Music",
  },
  {
    class: "null",
    tag: "Art",
  },
  {
    class: "bgTabImgGame",
    tag: "Game",
  },
  {
    class: "null",
    tag: "Painting",
  },
];

export const faqs: FAQsData[] = [
  {
    question: "How to set up a MetaMask account?",
    answer: [
      "Visit the Chrome Web Store and search for MetaMask",
      'Click "Add Extension"',
      'Click "Get Started"',
      'Click "I agree"',
      "IMPORTANT: Reveal the Secret Recovery Phrase and write it down and/or save it somewhere digitally protected",
      "You have now created a MetaMask wallet",
    ],
  },
  {
    question:
      "How to register at Ethernity.io and connect your MetaMask wallet?",
    answer: [
      'Click "Sign Up" on the Ethernity.io homepage',
      "Enter your email address, select a username and password",
      "A code will be delivered to your email, retrieve the code and enter it where prompted.",
      'Sign in to Ethernity using your credentials and click "Connect"',
      "Sign into your MetaMask account",
      'Click "Accept"',
      "You have now connected your MetaMask wallet on Ethernity",
    ],
  },
  {
    question: "How do I buy ERN?",
    answer: [
      `You can currently buy ERN on the following exchanges:`,
    ],
  },
  {
    question: "How can I send a NFT to another person?",
    answer: [
      "To transfer your aNFT to another wallet address, you will need to:",
      "Step 1: Log in to your account and connect your Metamask wallet.",
      "Step 2: Visit “My Profile” section and select the aNFT you would like to send.",
      "Step 3: Click on “Transfer” icon and define the recipient’s wallet address.",
      "Step 4: Validate the transaction in the Metamask pop-up window.",
    ],
  },
];
export const Steps: stepsData[] = [
  {
    img: Step1,
    step: "01",
    title: "Set up your wallet",
    description: `Powerful features and inclusions, which makes Nuron standout,
    easily customizable and scalable.`,
  },
  {
    img: Step2,
    step: "02",
    title: "Create your collection",
    description: `A great collection of beautiful website templates for your need.
    Choose the best suitable template.`,
  },
  {
    img: Step3,
    step: "03",
    title: "Add your NFT's",
    description: `We've made the template fully responsive, so it looks great on
    all devices: desktop, tablets and.`,
  },
  {
    img: Step4,
    step: "04",
    title: "Sell your NFT's",
    description: `I throw myself down among the tall grass by the stream as I
    lie close to the earth NFT's.`,
  },
];

export const MyCollections: CollectionsData[] = [
  {
    id: 1,
    img1: collection1,
    img2: collection2,
    img3: collection3,
    img4: collection4,
    title: "Checks - VV Edition",
    createdBy: "Ahsan Omerjee",
    price: 0.48,
  },
  {
    id: 2,
    img1: collection5,
    img2: collection6,
    img3: collection7,
    img4: collection8,
    title: "BasePaint",
    createdBy: "John Doe",
    price: 0.65,
  },
  {
    id: 3,
    img1: collection9,
    img2: collection10,
    img3: collection11,
    img4: collection12,
    title: "Pudgy Rods",
    createdBy: "Emily Smith",
    price: 0.75,
  },
  {
    id: 4,
    img1: collection13,
    img2: collection14,
    img3: collection15,
    img4: collection16,
    title: "NextGen 6529",
    createdBy: "Michael Johnson",
    price: 0.53,
  },
];
