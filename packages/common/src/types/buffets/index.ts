import { Moment } from "moment";

export interface IBuffetSearch {
  title: string;
  foodTag: string[];
  branchIds: string[];
}

export interface IItems {
  name: string;
  foodId: string | null;
  quantity: string;
  foodTag: string[];
  itemTag: string[];
  categoryTag: string[];
}

export interface IItemForm {
  name: string;
  foodId: string;
  quantity: string;
  foodTag: number[];
  itemTag: number[];
  categoryTag: number[];
}

export interface IBuffetForm {
  title: string;
  price: string;
  priceForChildren: string;
  eatingTime: string[];
  startTime: Moment | null;
  endTime: Moment | null;
  isAvailable: boolean;
  isEvent: boolean;
  specialMenuTag: string[];
  items: IItems[];
  itemDesc: string;
  isAllBranch: boolean;
  branchAreaTags: string[];
  branchIds: string[];
  subtitle: string;
  img: string;
  desc: string;
}

export interface IItemsFinal {
  name: string;
  foodId: string | null;
  quantity: number;
  foodTag: string[];
  itemTag: string[];
  categoryTag: string[];
}

export interface IBuffetFinal {
  _id?: string;
  title: string;
  price: number;
  priceForChildren: number;
  eatingTime: string[];
  time: string;
  isAvailable: boolean;
  isEvent: boolean;
  specialMenuTag: string[];
  items: IItemsFinal[];
  noOfItems: number;
  itemDesc: string;
  isAllBranch?: boolean;
  branchAreaTags?: string[];
  branchIds?: string[];
  subtitle: string;
  img: string;
  desc: string;
}

export interface IBuffet extends IBuffetFinal {
  _id: string;
  offerId?: string;
}

export interface IBuffetsResponse {
  buffets: IBuffet[];
  count: number;
}

export interface IBuffetErrors {
  title: string;
  subtitle: string;
  img: string;
  price: string;
  priceForChildren: string;
  branchAreaTags: string;
  startTime: string;
  endTime: string;
  eatingTime: string;
  items: string;
}
