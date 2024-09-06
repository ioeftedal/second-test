import { ResponseOptionsType } from "./shared";

export const milkingSystemData = ["AMS", "Milking Parlour", "Other"] as const;

export interface farmOverviewData {
  isDryCowMixed: boolean;
  isHeiferMixed: boolean;
  isBreedingBullMixed: boolean;
  isCowsOnPasture: boolean;
  isStockPersonAvailable: boolean;
  isLockingHeadYokes: boolean;
  nrOfHeadlocks: number;
  canBullBeSeperated: ResponseOptionsType;
  milkingSystem: (typeof milkingSystemData)[number];
  feedingRoutine: String;
  morningRoutine: String;
  interference: String;
  herdSize: number;
  nrGroups: number;
  groups: HerdGroup[];
}

export interface HerdGroup {
  groupName: String;
  groupSize: number;
  suggestedGroupSample: number;
}

export function defaultFarmOverviewData(): farmOverviewData {
  return {
    isDryCowMixed: false,
    isHeiferMixed: false,
    isBreedingBullMixed: false,
    isCowsOnPasture: false,
    isStockPersonAvailable: false,
    isLockingHeadYokes: false,
    nrOfHeadlocks: 0,
    canBullBeSeperated: "No",
    milkingSystem: "AMS",
    feedingRoutine: "",
    morningRoutine: "",
    interference: "",
    herdSize: 0,
    nrGroups: 0,
    groups: [],
  };
}
