export interface IItems {
  name: string;
  foodId: string;
}

export interface IMenuCard {
  _id?: string;
  title: string;
  branchAreaTags: string[];
  isAllBranch: boolean;
  availableTime: string[];
  items: IItems[];
  itemDesc: string;
  subtitle: string;
  img: string;
  desc: string;
  isAvailable: boolean;
  isSpecial: boolean;
  foodTag: string[];
  itemTag: string[];
  categoryTag: string[];
  specialMenuTag: string[];
}

export interface ICard extends IMenuCard {
  _id: string;
  offerId?: string;
}

export interface ICardErrors {
  title: string;
  subtitle: string;
  branchAreaTags: string;
  availableTime: string;
  items: string;
  img: string;
}

export interface ICardSearch {
  title: string;
  foodTag: string[];
  branchIds: string[];
}

export interface ICardsResponse {
  menuCards: ICard[];
  count: number;
}
