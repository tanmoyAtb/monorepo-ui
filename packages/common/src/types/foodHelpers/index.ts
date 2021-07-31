export interface ICategory {
  _id: string;
  pageId: string;
  name: string;
  subtitle?: string;
  sequenceIndex: number;
}

export interface INewCategoryState {
  pageId: string;
  name: string;
  subtitle?: string;
  sequenceIndex: string;
}

export interface INewCategoryInput {
  pageId: string;
  name: string;
  subtitle?: string;
  sequenceIndex: number;
}

export interface IAddOn {
  _id: string;
  pageId: string;
  name: string;
  subtitle?: string;
  price: number;
}

export interface INewAddOn {
  _id?: string;
  pageId: string;
  name: string;
  subtitle?: string;
  price: number;
}

export interface IVariation {
  _id: string;
  pageId: string;
  name: string;
  subtitle?: string;
  multipleSelect: boolean;
  options: IFoodVariationOption[];
}

export interface INewVariation {
  pageId: string;
  name: string;
  subtitle?: string;
  multipleSelect: boolean;
  options: INewFoodVariationOption[];
}

export interface INewFoodVariationOption {
  name: string;
  price: number;
}

export interface IFoodVariationOption {
  name: string;
  price: number;
}
