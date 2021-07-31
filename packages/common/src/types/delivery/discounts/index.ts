import {
  TDiscountCreatedBy,
  TDiscountGroup,
  TDiscountCategory,
  TDiscountType,
} from "src/constants/delivery/deliveryDiscountEnums";

export interface IDiscountFlat {
  amount: number;
  minimumOrder?: number;
  deliveryAmount?: number;
  restaurantAmount?: number;
}

export interface IDiscountPercent {
  percent: number;
  maximumAmount?: number;
  minimumOrder?: number;
  deliveryPercent?: number;
  restaurantPercent?: number;
}

export interface IDiscountDeliveryCharge {
  newDeliveryCharge?: number;
  minimumOrder?: number;
  discountAmount?: number;
}

export interface IDeliveryDiscountDeliverySystem {
  id: string;
  name: string;
  discountId: string;
  isApproved: boolean;
}

export interface IDeliveryDiscountBranchDelivery {
  branchDeliveryId: string;
  restaurantDeliveryId: string;
  isActive: boolean;
  isApproved: boolean;
  name: string;
  area?: string;
}

export interface IDeliveryDiscount {
  _id: string;
  name: string;
  type: TDiscountType;
  promoCode?: string;
  isPromoPublic?: boolean;
  image?: string;
  validFrom: Date;
  validTo: Date;
  showFrom: Date;
  showTo: Date;
  isActive: boolean;
  // discount groups
  discountGroup: TDiscountGroup;
  restaurantDeliveryId?: string;
  isAllBranchesOfSingle?: boolean;
  createdBy: TDiscountCreatedBy;
  branchDeliveries: IDeliveryDiscountBranchDelivery[];
  deliverySystems?: IDeliveryDiscountDeliverySystem[];
  isDeliverySystemsApproved: boolean;
  // discount details
  category: TDiscountCategory;
  flatDiscount?: {
    amount: number;
    minimumOrder?: number;
  };
  percentDiscount?: {
    percent: number;
    maximumAmount?: number;
    minimumOrder?: number;
  };
  deliveryChargeDiscount?: {
    newDeliveryCharge?: number;
    discountAmount?: number;
    minimumOrder?: number;
  };
  // connection to bot
  // offerId?: string;
  createdAt: Date;
}
