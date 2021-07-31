import { IBranchArea } from "./restaurantInfo";

export interface IGeneral {
  replyStyle: "normal";

  isMultiBranch: boolean;
  mainAreaEn?: string;
  mainAreaBn?: string;
  branchAreas: IBranchArea[];
  coveredAreas: string[];

  sendOneLocation: boolean;
  sameLocation: boolean;
  locationEn?: string;
  locationBn?: string;
  googleMap?: string;
  locationImg?: string;

  sendOneOpening: boolean;
  sameOpening: boolean;
  resOpen?: boolean | null;
  resClosedEn?: string;
  resClosedBn?: string;
  openingTimeEn?: string;
  openingTimeBn?: string;

  sendOnePhone: boolean;
  samePhone: boolean;
  phones?: string[];
  phoneEn?: string;
  phoneBn?: string;
  phoneWhenEn?: string;
  phoneWhenBn?: string;

  sendOnePics: boolean;
  samePics: boolean;
  pics?: string[];
  picEn?: string;
  picBn?: string;
}

export interface IGeneralBranch {
  _id: string;
  resId: string;
  pageId: string;
  branchName: string;
  branchAreaEn: string;
  branchAreaBn: string;

  locationEn?: string;
  locationBn?: string;
  googleMap?: string;
  locationImg?: string;

  branchOpen?: boolean;
  branchClosedEn?: string;
  branchClosedBn?: string;
  openingTimeEn?: string;
  openingTimeBn?: string;

  phones?: string[];
  phoneEn?: string;
  phoneBn?: string;

  pics?: string[];
  picEn?: string;
  picBn?: string;
}