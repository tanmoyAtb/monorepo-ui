import { Moment } from "moment";

export interface IOfferForm {
  isAllBranch: boolean;
  branchAreaTags: string[];
  branchIds: string[];
  title: string;
  subtitle: string;
  img: string;
  desc: string;
  price: string;
  validFrom: Moment | null;
  validTo: Moment | null;
  showFrom: Moment | null;
  showTo: Moment | null;
  tags: string[];
  foodTag: string[];
  cardTag: string[];
  walletTag: string[];
  specialMenuTag: string[];
}

export interface IOfferFinal {
  isAllBranch: boolean;
  branchAreaTags: string[];
  branchIds: string[];
  title: string;
  subtitle: string;
  img: string;
  desc: string;
  price: number;
  validFrom: Moment;
  validTo: Moment;
  showFrom: Moment;
  showTo: Moment;
  coupleTag?: boolean;
  buffetTag?: boolean;
  studentTag?: boolean;
  cardTag: string[];
  walletTag: string[];
  foodTag: string[];
  specialMenuTag: string[];
}

export interface IOffer extends IOfferFinal {
  _id: string;
  status: "running" | "expired" | "upcoming" | "inProgress";
}

export interface IOfferErrors {
  title: string;
  subtitle: string;
  price: string;
  branchAreaTags: string;
  img: string;
  validity: string;
  showability: string;
}

export interface IOffersResponse {
  offers: IOffer[];
  count: number;
}

export interface IOfferSearch {
  title: string;
  branchIds: string[];
  status?: string;
}
