export const typeOfWaterPoint = [
  "Through",
  "Tip Over Through",
  "Bowl",
  "Bowl With Reserviour",
  "Through With Balls / Anti-Frost Devices",
  "Nipple Drinker",
] as const;
export type TypeOfWaterPoint = (typeof typeOfWaterPoint)[number];

export const waterPoints = ["Clean", "Partially Dirty", "Dirty"] as const;
export type WaterPoints = (typeof waterPoints)[number];

export const functioning = ["Functioning", "Not Functioning"] as const;
export type Functioning = (typeof functioning)[number];

export const waterflow = ["Adequate", "Inadequate"] as const;
export type Waterflow = (typeof waterflow)[number];

export interface FarmResources {
  id: string;
  group_name: string;
  nr_wps: number;
}

export interface WaterPoint {
  id: number;
  group_name: string;
  nr_animals_using_wps?: number | null;
  type: number;
  troughlength?: number | null;
  cleanliness: number;
  functioning: string;
  waterflow: string;
}

export function defaultFarmResources(): FarmResources {
  return {
    id: "",
    group_name: "",
    nr_wps: 0,
  };
}

export function defaultWaterPoint(): WaterPoint {
  return {
    id: 0,
    group_name: "",
    type: 0,
    cleanliness: 0,
    functioning: "",
    waterflow: "",
  };
}
