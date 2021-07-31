export type IDelivererEnum =
  | "pathao"
  | "foodpanda"
  | "shohoz"
  | "hungrynaki"
  | "efood";

export const delivererEnum: IDelivererEnum[] = [
  "pathao",
  "foodpanda",
  "shohoz",
  "hungrynaki",
  "efood",
];

export interface IPaymentsAndDeliveries {
  sendOneVatAndServices: boolean;
  sameVatAndServices: boolean;
  vat?: number | null;
  serviceCharge?: number | null;
  vatAndServicesEn?: string;
  vatAndServicesBn?: string;

  sendOnePayment: boolean;
  samePaymentOptions: boolean;
  acceptCards?: boolean;
  acceptedCards?: string[];
  acceptWallets?: boolean;
  acceptedWallets?: string[];
  acceptedPaymentEn?: string;
  acceptedPaymentBn?: string;

  sendOneDelivery: boolean;
  sameDeliveryOptions: boolean;
  deliveryAreas?: string[];
  doOnlineDelivery?: boolean;
  personalDelivery?: boolean;
  deliverers?: IDelivererEnum[];
  deliveryEn?: string;
  deliveryBn?: string;
}

export interface IPaymentsAndDeliveriesBranch {
  _id: string;
  resId: string;
  pageId: string;
  branchName: string;
  branchAreaEn: string;
  branchAreaBn: string;

  vat?: number | null;
  serviceCharge?: number | null;
  vatAndServicesEn?: string;
  vatAndServicesBn?: string;

  acceptCards?: boolean;
  acceptedCards?: string[];
  acceptWallets?: boolean;
  acceptedWallets?: string[];
  acceptedPaymentEn?: string;
  acceptedPaymentBn?: string;

  deliveryAreas?: string[];
  doOnlineDelivery?: boolean;
  personalDelivery?: boolean;
  deliverers?: string[];
  deliveryEn?: string;
  deliveryBn?: string;
}
