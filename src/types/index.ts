export type NFT = {
  marketplace: string;
  name: string;
  userName: string;
  currentBid: number;
  inDollars: number;
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

export type tagsData ={
  tag:string
}