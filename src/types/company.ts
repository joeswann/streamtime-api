export type StreamtimeAddress = {
  line1: string;
  line2: string;
  line3: string;
  city: string;
  region: string;
  countryName: string;
  postCode: string;
};

export type StreamtimeCompany = {
  id?: number;
  name: string;
  rateCardId?: number;
  taxNumber?: string;
  phone1?: string;
  phone2?: string;
  websiteAddress?: null | string;
  notes?: null | string;
  physicalAddress?: null | StreamtimeAddress;
  postalAddress?: null | StreamtimeAddress;
};
