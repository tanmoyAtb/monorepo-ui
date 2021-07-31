export interface IDeliveredFood {
  foods: ISingleFood[];
  category: ICategory;
}

export interface ISingleFood {
  foodId: string;
  delivery: IDelivery;
  priceOnSize: IPriceOnSize[];
}

export interface IDelivery {
  isDelivered: boolean;
  title: string;
  subtitle: string;
  img: string;
  isAvailable: boolean;
  toggleAvailableLoading?: boolean;
}

export interface ICategory {
  categoryId: string;
  name: string;
  subtitle: string;
}

export interface IPriceOnSize {
  name: string;
  noOfPeople: number;
  price: number;
  sizeTag: string;
  _id: string;
}
