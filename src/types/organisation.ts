export type StreamtimeOrganisation = {
  name: string;
  domain: string;
  currency: {
    id: string;
    name: string;
    symbol: string;
  };
  address: string;
  country: {
    id: string;
    name: string;
  };
};
