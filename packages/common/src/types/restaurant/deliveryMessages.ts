export interface IDeliveryMessagesBranches {
  _id: string;
  resId: string;
  pageId: string;
  branchName: string;
  branchAreaEn: string;
  branchAreaBn: string;

  deliveryDoEn?: string;
  deliveryDoBn?: string;

  deliveryLocationsEn?: string;
  deliveryLocationsBn?: string;

  deliveryOpeningEn?: string;
  deliveryOpeningBn?: string;

  deliveryPaymentsEn?: string;
  deliveryPaymentsBn?: string;

  deliveryChargeEn?: string;
  deliveryChargeBn?: string;

  deliveryHowLongEn?: string;
  deliveryHowLongBn?: string;
}

export interface IDeliveryMessages {
  sendOneDeliveryDo?: boolean;
  sameDeliveryDo?: boolean;
  deliveryDoEn?: string;
  deliveryDoBn?: string;

  sendOneDeliveryLocations?: boolean;
  sameDeliveryLocations?: boolean;
  deliveryLocationsEn?: string;
  deliveryLocationsBn?: string;

  sendOneDeliveryOpening?: boolean;
  sameDeliveryOpening?: boolean;
  deliveryOpeningEn?: string;
  deliveryOpeningBn?: string;

  sendOneDeliveryPayments?: boolean;
  sameDeliveryPayments?: boolean;
  deliveryPaymentsEn?: string;
  deliveryPaymentsBn?: string;

  sendOneDeliveryCharge: boolean;
  sameDeliveryCharge: boolean;
  deliveryChargeEn?: string;
  deliveryChargeBn?: string;

  sendOneDeliveryHowLong: boolean;
  sameDeliveryHowLong: boolean;
  deliveryHowLongEn?: string;
  deliveryHowLongBn?: string;

  branches: IDeliveryMessagesBranches[];
}
