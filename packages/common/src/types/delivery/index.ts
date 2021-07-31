

export interface IGoogleMapAddress {
  description: string;
  placeId: string;
}

export interface IGoogleMapAddressList {
  predictions: IGoogleMapAddress[];
  status: string;
}

export interface IGoogleMapAddressResult {
  formattedAddress: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export interface IGoogleMapAddressDetails {
  result?: IGoogleMapAddressResult;
  status: string;
}
