export interface IReservationAndEvents {
  takeReservationTable: boolean;
  sendOneReservationTable: boolean;
  sameReservationTable: boolean;
  reservationTableEn?: string;
  reservationTableBn?: string;

  takeReservationEvent: boolean;
  sendOneReservationEvent: boolean;
  sameReservationEvent: boolean;
  reservationEventEn?: string;
  reservationEventBn?: string;

  sendOneHostPrograms: boolean;
  sameHostPrograms: boolean;
  hostedPrograms?: string[];
  hostProgramsEn?: string;
  hostProgramsBn?: string;

  sendOneEventCosts: boolean;
  sameEventCosts: boolean;
  costProgramEn?: string;
  costProgramBn?: string;

  sendOneHostingAdvance: boolean;
  sameHostingAdvance: boolean;
  takeHostingAdvance: boolean;
  advanceOnEventEn?: string;
  advanceOnEventBn?: string;

  sendOneCapacity: boolean;
  sameCapacity: boolean;
  capacity?: number;
  capacityEn?: string;
  capacityBn?: string;

  reservationAdvanceBookEn?: string;
  reservationAdvanceBookBn?: string;

  sendOneDecoration: boolean;
  sameDecoration: boolean;
  allowExternalDeco: boolean;
  decorationEn?: string;
  decorationBn?: string;
  sendPicsOfDecoration?: boolean;

  allowTakingPhotos?: boolean;
  allowedPhotosEn?: string;
  allowedPhotosBn?: string;

  allowPhotoShoot?: boolean;
  photoShootEn?: string;
  photoShootBn?: string;
}

export interface IReservationAndEventsBranch {
  _id: string;
  resId: string;
  pageId: string;
  branchName: string;
  branchAreaEn: string;
  branchAreaBn: string;

  takeReservationTable: boolean;
  reservationTableEn?: string;
  reservationTableBn?: string;

  takeReservationEvent?: boolean;
  reservationEventEn?: string;
  reservationEventBn?: string;

  hostedPrograms?: string[];
  hostProgramsEn?: string;
  hostProgramsBn?: string;

  costProgramEn?: string;
  costProgramBn?: string;

  takeHostingAdvance: boolean;
  advanceOnEventEn?: string;
  advanceOnEventBn?: string;

  capacity?: number;
  capacityEn?: string;
  capacityBn?: string;

  allowExternalDeco?: boolean;
  decorationEn?: string;
  decorationBn?: string;
}