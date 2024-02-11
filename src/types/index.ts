export type NFTDetail = {
  contractAddress: string;
  name: string;
  tokenId: number;
  tokenStandard: string;
  chain: string;
  lastUpdated: string;
  creatorEarnings: string;
};
export type NFT = {
  id: number;
  marketplace: string;
  name: string;
  userName: string;
  currentBid: number;
  inDollars: number;
  details: NFTDetail[];
};

export type MarketPlaceItem = {
  category: string;
  nft: NFT[];
};

export type CategoriesCardProps = {
  title: string;
  cardimage: string;
};

export type ContributorCardProps = {
  name: string;
  ethAmount: string;
};

export type CollectionsCardProps = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  title: string;
  price: number;
  createdBy: string;
};

export type tagsData = {
  class: string;
  tag: string;
};

export type FAQsData = {
  question: string;
  answer: string[];
};

export type stepsData = {
  img: string;
  step: string;
  title: string;
  description: string;
};

export type CollectionsData = {
  id: number;
  title: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  createdBy: string;
  price: number;
};
