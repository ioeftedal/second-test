export interface WaterPoints {
  group_name: string;
  nr_animals_using_wps?: number | null;
  type: number;
  troughlength?: number | null;
  cleanliness: number;
  functioning: string;
  waterflow: string;
  farmId: string;
}

export function defaultWaterPoint(): WaterPoints {
  return {
    group_name: "",
    type: 0,
    cleanliness: 0,
    functioning: "",
    waterflow: "",
    farmId: "",
  };
}
