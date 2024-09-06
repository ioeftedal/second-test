export const disbuddingDehorningMethod = [
  "None",
  "Thermocautery",
  "Caustic paste",
  "Dehorned",
] as const;
export type DisbuddingDehorningMethod =
  (typeof disbuddingDehorningMethod)[number];
export const tailDockingMethod = ["Rubber ring", "Surgery", "N/A"] as const;
export type TailDockingMethod = (typeof tailDockingMethod)[number];

export interface ManagementQuestionnaireForm {
  id: string;
  tempIn?: number | null;
  tempOut?: number | null;
  pastureAccess: boolean;
  pastureDaysYear: number;
  pastureHoursDay: number;
  pastureDaysComment?: string | null;
  outdoorAccess?: boolean | null;
  outdoorDaysYear?: number | null;
  outdoorHoursDay?: number | null;
  looseHoused: boolean;
  nrDystocia_12Mos: number;
  nrDownercows_12Mos: number;
  nrMortality_12Mos: number;
  disbDehoOnFarm: number;
  disbDehoMethod: number;
  hotAir?: number | null;
  disbDehoAnesthesia: number;
  disbDehoAnalgesia: number;
  tdOnFarm: number;
  tdMethod: number;
  tdAnesthesia: number;
  tdAnalgesia: number;
  calfMotherTime?: number | null;
  singleboxTime?: number | null;
  milkVolumeDaily?: number | null;
  colostrumVolume?: number | null;
  concentrateAge?: number | null;
  roughageAge?: number | null;
  waterAge?: number | null;
  favCow?: boolean | null;
  specialMeasure?: boolean | null;
  specialMeasureDesc?: string | null;
  nrMilkrec_3mos?: number | null;
  avgDairyCow_12mos?: number | null;
  avgCalvingsYear?: number | null;
  pctScc400k_3mos?: number | null;
  // TODO: Add herd back eventually @uzaaft
  // herd: Herd;
}

export function defaultManagmentQuestionnaireForm(): ManagementQuestionnaireForm {
  return {
    id: "",
    pastureAccess: false,
    pastureDaysYear: 0,
    pastureHoursDay: 0,
    looseHoused: false,
    nrDystocia_12Mos: 0,
    nrDownercows_12Mos: 0,
    nrMortality_12Mos: 0,
    disbDehoOnFarm: 0,
    disbDehoMethod: 0,
    disbDehoAnesthesia: 0,
    disbDehoAnalgesia: 0,
    tdOnFarm: 0,
    tdMethod: 0,
    tdAnesthesia: 0,
    tdAnalgesia: 0,
    calfMotherTime: 0,
    singleboxTime: 0,
    milkVolumeDaily: 0,
    colostrumVolume: 0,
    concentrateAge: 0,
    roughageAge: 0,
    waterAge: 0,
    favCow: false,
    specialMeasure: false,
    specialMeasureDesc: "",
    nrMilkrec_3mos: 0,
    avgDairyCow_12mos: 0,
    avgCalvingsYear: 0,
    pctScc400k_3mos: 0,
    // TODO: Add herd back eventually @uzaaft
    // herd: defaultHerd(),
  };
}
