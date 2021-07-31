export const orderSource = ["engaze", "app"];
export type TOrderSource = "engaze" | "app";

// export const addressType = ["home", "office"];
// type TAddressType = "home" | "office";

export const discountType = ["discount", "promo"];
type TDiscountType = "discount" | "promo";

export const discountCategory = ["flat", "percent", "delivery"];
type TDiscountCategory = "flat" | "percent" | "delivery";

export const orderStatus = ["active", "complete", "cancelled", "fully_cancelled"];
type TOrderStatus = "active" | "complete" | "cancelled" | "fully_cancelled";

export const orderStatusTexts = {
  active: "Active",
  complete: "Complete",
  cancelled: "Cancelled",
  "fully_cancelled": "Cancelled"
};

export const userStatus = ["ordered", "received", "cancelled"];
export const orderRestaurantStatus = [
  "accepted",
  "served",
  "returned",
  "cancelled",
  "pending",
];
export const orderDeliveryCompanyStatus = ["pending", "accepted", "cancelled"];
export const orderRiderStatus = [
  "pending",
  "accepted",
  "picked",
  "delivered",
  "completed",
  "failed",
  "dropped",
  "discarded",
  "returned",
  "cancelled",
];

export const statusNames = [
  "order",
  "user",
  "restaurant",
  "deliveryCompany",
  "rider",
];

type TUserStatus = "ordered" | "received" | "cancelled";
type TOrderRestaurantStatus =
  | "pending"
  | "accepted"
  | "served"
  | "returned"
  | "cancelled"
  | "completed"
  | "discarded";
type TOrderDeliveryCompanyStatus =
  | "pending"
  | "accepted"
  | "rider_accepted"
  | "cancelled"
  | "completed";
type TOrderRiderStatus =
  | "pending"
  | "dropped"
  | "accepted"
  | "picked"
  | "delivered"
  | "completed"
  | "failed"
  | "discarded"
  | "returned"
  | "cancelled";

// type TStatusNames =
//   | "order"
//   | "user"
//   | "restaurant"
//   | "deliveryCompany"
//   | "rider";

export const cancelSource = ["customer", "restaurant", "delivery", "rider"];
export const cancelResponsibility = ["delivery", "restaurant"];

type TCancelSource = "customer" | "restaurant" | "delivery" | "rider";
type TCancelResponsibility = "delivery" | "restaurant";

export const statusAll = [
  ...orderStatus,
  ...userStatus,
  ...orderRestaurantStatus,
  ...orderDeliveryCompanyStatus,
  ...orderRiderStatus,
];

interface IFood {
  foodId: string;
  name: string;
  size: {
    name: string;
    price: string;
  };
  variations: [
    {
      name: string;
      variation: string;
      addedPrice: number;
    }
  ];
  addOns: [
    {
      name: string;
      addedPrice: number;
    }
  ];
  basePrice: number;
  finalPrice: number;
  quantity: number;
  instructions: string;
}

// V4 Updates //

export const DELIVERY_ORDER_TYPE = {
  DELIVERY: "delivery" as const,
  PICKUP: "pickup" as const,
};
export const DeliveryOrderTypes = Object.values(DELIVERY_ORDER_TYPE);
export type TDeliveryOrderType = typeof DeliveryOrderTypes[number];

export const DELIVERY_ORDER_SCHEDULE = {
  CURRENT: "current" as const,
  PRE_ORDER: "pre_order" as const,
};
export const DeliveryOrderSchedules = Object.values(DELIVERY_ORDER_SCHEDULE);
export type TDeliveryOrderSchedule = typeof DeliveryOrderSchedules[number];

export const ORDER_PAYMENT_METHOD = {
  CASH: "cash" as const,
  ONLINE: "online" as const,
  CUSTOM: "custom" as const,
};
export const OrderPaymentMethods = Object.values(ORDER_PAYMENT_METHOD);
export type TOrderPaymentMethod = typeof OrderPaymentMethods[number];

export interface IDeliveryOrderDiscount {
  id: string;
  name: string;
  type: TDiscountType;
  promoCode?: string;
  category: TDiscountCategory;
  flat?: {
    total: number;
    delivery: number;
    restaurant: number;
  };
  percent?: {
    total: number;
    delivery: number;
    restaurant: number;
  };
}

export interface IOrder {
  _id: string;
  orderNo: string;
  restaurant: {
    name: string;
    pageId: string;
    phone?: string;
  };
  branch: {
    area?: string;
    branchDeliveryId: string;
  };
  user: {
    id: string;
    name: string;
    phone: string;
    psid?: string;
  };
  deliveryOrderType: TDeliveryOrderType;
  deliveryOrderSchedule: TDeliveryOrderSchedule;
  deliveryTime?: Date;
  pickupTime?: Date;
  delivery: {
    address: string;
    title?: string;
    details?: string;
    location: {
      type: "Point";
      coordinates: number[];
    };
  };
  orderedAt: Date;
  summary: {
    foods: IFood[];
    orderTotal: number;
    instructions?: number;
  };
  discount?: IDeliveryOrderDiscount;
  deliveryCharge: {
    amount: number;
    discount: {
      id: string;
      name: string;
      promoCode?: string;
      amount: number;
    };
    total: number;
  };
  vat: {
    percentage: number;
    total: number;
  };
  serviceCharge: {
    percentage: number;
    total: number;
  };
  finalTotal: number;
  restaurantTotal: number;
  deliveryTotal: number;

  userStatus: TUserStatus;
  orderStatus: TOrderStatus;
  restaurantStatus: TOrderRestaurantStatus;
  deliverySystemStatus: TOrderDeliveryCompanyStatus;
  riderStatus: TOrderRiderStatus;

  restaurantReceive?: {
    received: boolean;
    receivedAt: Date;
    returned: boolean;
    returnedAt: Date;
  };

  rider?: {
    riderId: string;
    name: string;
    avatar: string;
    phone: string;
  };
  cancellation?: {
    source: TCancelSource;
    reason: string;
  }[];
  cancellationResponsibility?: TCancelResponsibility;
  userPayment?: {
    status: boolean;
    paymentMethod?: TOrderPaymentMethod;
    paymentId?: string;
  };

  applicableDeliverySystems: {
    personalDelivery: boolean;
    deliverySystem?: {
      id: string;
      name: string;
      code: string;
      branchId: string;
    };
  };

  isSoundOn?: boolean;
  createdAt: Date;
}

export interface ICurrentOrders {
  pendingOrders: IOrder[];
  activeOrders: {
    currentDeliveryOrders: IOrder[];
    preOrderDeliveryOrders: IOrder[];
    currentPickupOrders: IOrder[];
    preOrderPickupOrders: IOrder[];
  };
}