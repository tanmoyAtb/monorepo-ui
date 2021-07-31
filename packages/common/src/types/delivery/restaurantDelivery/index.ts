import { Moment } from "moment";
import {
  TDeliveryHistoryStates,
  TRestaurantDeliveryStatus,
  TDeliveryStrategy,
} from "src/constants/delivery/restaurantDeliveryEnums";

export interface IDeliverySystem {
  _id: string;
  name: string;
  logo: string;
  desc: string;
  helpline: string;
  apiURL: string;
  active: boolean;
  radius: number;
  openingTime: Date;
  closingTime: Date;
  averageCommission: number;
  deliveryCharge: number;
}

export interface IDeliverySystemShort {
  _id: string;
  name: string;
  logo: string;
  desc: string;
  code: string;
  helpline: string;
  apiURL: string;
  openingTime: Date;
  closingTime: Date;
}

export interface IBranchClosestDeliverySystems {
  branches: {
    name: string;
    area: string;
    coordinates: [number, number];
    radius: number;
    deliverySystems: IDeliverySystemShort[];
  }[];
  deliverySystemsApplicable: IDeliverySystemShort[];
}

export interface IBranchDeliverySystemsInput {
  branches: {
    name: string;
    area?: string;
    coordinates: [number, number];
    radius: number;
  }[];
  pageId: string;
}

export interface IRestaurantDeliveryForm {
  area: string;
  address: string;
  addressSearch: string;
  lat: number;
  long: number;
  radius: string;
  start: Moment | null;
  end: Moment | null;
  percentage: string;
  deliverySystemId: string | null;
  personalDelivery: boolean;
  charge: string;
  hotline: string;
}

export interface IUpdateRestaurantDeliveryForm {
  start: Moment;
  end: Moment;
  percentage: string;
  hotline: string;
}

export interface IRestaurantDeliveryFormError {
  area: string;
  address: string;
  radius: string;
  start: string;
  end: string;
}

export interface IRestaurantDeliveryWithBranchDeliveries
  extends IRestaurantDelivery {
  branchDeliveries: IBranchDelivery[];
}

export interface IRestaurantDelivery {
  _id: string;
  pageId: string;
  isActive: boolean;
  isActivatedBefore: boolean;
  isOpen: boolean;
  isApproved: boolean;
  status: TRestaurantDeliveryStatus;

  name: string;
  isMultiBranch: boolean;
  personalDelivery: {
    isActive: boolean;
    isUsingApp: boolean;
  };
  cashOnDelivery?: {
    isActive: boolean;
  };
  onlinePayment?: {
    isActive: boolean;
  };
  customPayment?: {
    isActive: boolean;
    name: string;
    customMessage: string;
  };
  deliverySystems: {
    id: string;
    name: string;
    isApproved: boolean;
    restaurantId: string;
  }[];
}

export interface IBranchDeliverySystem {
  id: string;
  name: string;
  logo: string;
  code: string;
  commission: number;
  openingTime: Date;
  closingTime: Date;
  isApproved: boolean;
  isActive: boolean;
  restaurantId: string;
  branchId: string;
}

export interface IPerKmIncrement {
  perKmDeliveryChargeIncrement: number;
  perKmMinimumOrderIncrement?: number;
  maximumDistanceInM: number;
  minimumDistanceInM?: number;
}

export interface IRadiusSlot {
  radius: number;
  deliveryCharge: number;
  minimumOrder?: number;
  deliveryTime?: {
    minInHours?: number;
    maxInHours?: number;
  };
}

export interface IDeliveryRadiuses {
  radiusSlots: IRadiusSlot[];
  perKmIncrements?: IPerKmIncrement;
}

export interface IDeliverySubArea {
  deliverySubAreaId: string;
  deliverySubArea: string;
  location: {
    type: "Point";
    coordinates: number[];
  };
}

export interface IDeliveryArea {
  deliveryAreaId: string;
  deliveryArea: string;
  location: {
    type: "Point";
    coordinates: number[];
  };
  deliverySubAreas?: IDeliverySubArea[];
  deliveryCharge: number;
  minimumOrder?: number;
  deliveryTime?: {
    minInHours?: number;
    maxInHours?: number;
  };
}

export interface ICurrentDeliveryOrders {
  isActive: boolean;
  deliveryStrategy: TDeliveryStrategy;
  deliveryRadiuses?: IDeliveryRadiuses;
  deliveryAreas?: IDeliveryArea[];
}

export interface IPreOrderDeliveryOrders extends ICurrentDeliveryOrders {
  isStrategySameAsCurrent: boolean;
  minDelayInHours: number;
  maxDelayInHours: number;
}

export interface ICurrentPickupOrders {
  isActive: boolean;
}

export interface IPreOrderPickupOrders {
  isActive: boolean;
  minDelayInHours: number;
  maxDelayInHours: number;
}

export interface IBranchDelivery {
  _id: string;
  pageId: string;
  restaurantDeliveryId: string;
  name: string;
  area?: string;
  hotline?: string;

  isActive: boolean;
  isOpen: boolean;
  isApproved: boolean;

  address: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  vat: {
    percentage: number;
  };

  workingHours: {
    start: Date;
    end: Date;
  };
  personalDelivery?: {
    isActive: boolean;
    isUsingApp: boolean;
  };
  deliverySystem?: IBranchDeliverySystem;
  deliverySystemHistory: {
    date: Date;
    id: string;
    state: TDeliveryHistoryStates;
  }[];
  personalDeliveryHistory: {
    date: Date;
    state: TDeliveryHistoryStates;
  }[];
  currentDeliveryOrders: ICurrentDeliveryOrders;
  preOrderDeliveryOrders: IPreOrderDeliveryOrders;
  currentPickupOrders: ICurrentPickupOrders;
  preOrderPickupOrders: IPreOrderPickupOrders;
}

export interface IRestaurantDeliverySystem {
  id: string;
  name: string;
  logo: string;
  code: string;
  commission: number;
  openingTime: Date;
  closingTime: Date;
  approved: boolean;
  deliveryCharge: number;
  restaurantId: string;
}

export interface IRestaurantDeliveryQueryData {
  isMultiBranch: boolean | null;
  pageId: string;
  branches: {
    area: string;
    address: string;
    coordinates: [number, number];
    radius: number;
    workingHours: {
      start: Moment;
      end: Moment;
    };
    vat: {
      percentage: number;
    };
    personalDelivery: boolean;
    deliverySystemId?: string;
  }[];
}

export interface IUpdateRestaurantDeliveryQueryData {
  workingHours: {
    start: Moment;
    end: Moment;
  };
  vat: {
    percentage: number;
  };
  hotline: string;
}

export interface IUpdateRestaurantDeliverySettingsQueryData {
  area: string;
  location: {
      type: string;
      coordinates: [number, number] | []
  };
  workingHours: {
      start: Date,
      end: Date
  };
  vat: {
      percentage: number;
  };
  hotline: string;
  currentDeliveryOrders: {
      isActive: boolean;
      deliveryStrategy: string,
      deliveryRadiuses?: {
          radiusSlots: [
              {
                  radius: number,
                  deliveryCharge: number,
                  minimumOrder: number,
                  deliveryTime: {
                      minInHours: number,
                      maxInHours: number,
                  }
              }
          ]
      }
  };
  preOrderDeliveryOrders: {
      isActive: boolean,
      isStrategySameAsCurrent: boolean,
      minDelayInHours: number,
      maxDelayInHours: number
  };
  currentPickupOrders: {
      isActive: boolean
  };
  preOrderPickupOrders: {
      isActive: boolean
  };
}

export interface IActivateDelivery {
  greetings: string;
  persistentMenu: {
    messaging: string[];
    delivery: string[];
  };
}

export interface IToggleRestaurantDeliveryQueryData {
  isOpen?: boolean;
  autoAccept?: boolean;
}

export interface IToggleRestaurantDeliveryActiveQueryData {
  deliverySystem: {
    isActive: boolean;
  };
  personalDelivery: {
    isActive: boolean;
  };
  pageId?: string;
}

// for restaurant delivery payments data
export interface IUpdateRestaurantDeliveryPaymentsData {
  cashOnDelivery: {
    isActive: boolean;
  };
  onlinePayment: {
    isActive: boolean;
  };
  customPayment?: {
    isActive: boolean;
    name: string;
    customMessage: string;
  };
}

export interface IUpdateRestaurantDeliveryCustomPaymentForm {
  name: string;
  customMessage: string;
}

