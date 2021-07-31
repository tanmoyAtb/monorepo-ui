export interface IPrices {
  price: string;
  sizeName: string;
  noOfPeople: string;
}

export interface IPricesFinal {
  price: string;
  name: string;
  noOfPeople: number;
}

export interface IItems {
  name: string;
  foodId: string;
  quantity: string;
}

export interface IItemsFinal {
  name: string;
  foodId: string;
  quantity: number;
}

export interface IFood {
  priceOnSize: IPrices[];
  isAllBranch: boolean;
  branchAreaTags: string[];
  availableAlways: boolean;
  availableTime: string[];
  isCombo: boolean;
  items: IItems[];
  itemDesc: string;
  title: string;
  subtitle: string;
  img: string;
  originalImg: string;
  desc: string;
  variations: {
    variationId: string;
    name: string;
    subtitle?: string;
    multipleSelect: boolean;
    required: boolean;
    options: {
      name: string;
      price: number;
    }[];
  }[];
  category: {
    categoryId: string;
    name: string;
    subtitle?: string;
    sequenceIndex: number;
  };
  addOns: {
    addOnId: string;
    name: string;
    subtitle?: string;
    price: number;
  }[];
  isSpecial: boolean;
  isAvailable: boolean;
  isEvent: boolean;
  isOrderable: boolean;
  nameTag: string[];
  foodTag: string[];
  itemTag: string[];
  categoryTag: string[];
  specialMenuTag: string[];
  delivery: {
    isDelivered: boolean;
    title: string;
    subtitle?: string;
    img?: string;
    isAvailable: boolean;
  };
}

export interface IFoodFinal {
  _id?: string;
  priceOnSize: IPricesFinal[];
  isAllBranch: boolean;
  branchAreaTags: string[];
  availableTime: string[];
  isCombo: boolean;
  items: IItemsFinal[];
  itemDesc: string;
  title: string;
  subtitle: string;
  img: string;
  originalImg: string;
  desc: string;
  isSpecial: boolean;
  isAvailable: boolean;
  isEvent: boolean;
  isOrderable: boolean;
  nameTag: string[];
  foodTag: string[];
  mainItemTag: string[];
  categoryTag: string[];
  specialMenuTag: string[];
  variations: {
    variationId: string;
    name: string;
    subtitle?: string;
    multipleSelect: boolean;
    required: boolean;
    options: {
      name: string;
      price: number;
    }[];
  }[];
  category: {
    categoryId: string;
    name: string;
    subtitle?: string;
    sequenceIndex: number;
  };
  addOns: {
    addOnId: string;
    name: string;
    subtitle?: string;
    price: number;
  }[];
  delivery: {
    isDelivered: boolean;
    title: string;
    subtitle?: string;
    img?: string;
    isAvailable: boolean;
  };
}

export interface IFoodById extends IFoodFinal {
  _id: string;
}

export interface IFoodErrors {
  title: string;
  subtitle: string;
  priceOnSize: string;
  branchAreaTags: string;
  availableTime: string;
  items: string;
  img: string;
  category: string;
}

export interface IFoodSearch {
  title: string;
  foodTag: string[];
  branchIds: string[];
}

export interface IFoodCard {
  _id: string;
  title: string;
  subtitle?: string;
  img: string;
  priceOnSize: IPricesFinal[];
  offerId?: string;
  foodTag: string[];
}

export interface IFoodsResponse {
  foods: IFoodCard[];
  count: number;
}

export interface IFoodsAll {
  _id: string;
  title: string;
  nameTag: string[];
  foodTag: string[];
  mainItemTag: string[];
  categoryTag: string[];
}

export interface IFoodCategory {
  _id: string;
  name: string;
  pageId: string;
  subtitle?: string;
}

export interface IFoodVariation {
  _id: string;
  name: string;
  multipleSelect: boolean;
  pageId: string;
  subtitle?: string;
  options: {
    name: string;
    price: number;
  }[];
}

export interface IFoodAddOn {
  _id: string;
  name: string;
  price: number;
  pageId: string;
  subtitle?: string;
}

export interface IDelivery {
  isDelivered: boolean;
  title: string;
  subtitle?: string;
  img?: string;
  isAvailable: boolean;
}
