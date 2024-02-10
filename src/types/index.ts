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

export type tagsData = {
  tag: string;
};

export type stepsData = {
  question: string;
  answer: string[];
};
