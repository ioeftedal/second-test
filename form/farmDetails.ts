export interface FarmDetails {
  id: string;
  country: string;
  address: string;
  zip: string;
  town: string;
  visitDate: string;
}

export function defaultFarmDetails(): FarmDetails {
  return {
    id: "",
    country: "",
    address: "",
    zip: "",
    town: "",
    visitDate: "",
  };
}
