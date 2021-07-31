export interface IBranchArea {
  branchId: string;
  name: string;
  areaEn: string;
  areaBn: string;
}

export interface IRestaurantInfo {
  _id: string;
  pageId: string;
  name: string;
  isMultiBranch: boolean;
  mainAreaEn?: string;
  mainAreaBn?: string;
  branchAreas?: IBranchArea[];
  coveredAreas: string[];
}

export interface IBranchRestaurantBranchList {
  _id: string;
  pageId: string;
  branchName: string;
}

export interface IImportBranchData {
  restaurant: boolean;
  foods: boolean;
  menuCards: boolean;
  buffets: boolean;
  offers: boolean;
  sourcePageId: string;
  sourceBranchId: string;
  targetPageId: string;
}
