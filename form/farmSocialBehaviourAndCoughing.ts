export interface SocialBehaviourAndCoughingData {
  segment: string | undefined;
  groupName: string | undefined;
  start: string | undefined;
  finish: string | undefined;
  duration: number;
  standingStart: number;
  standingFinish: number;
  eatDrinkStart: number;
  eatDrinkFinish: number;
  lyingStart: number;
  lyingFinish: number;
  sumStart: number;
  sumFinish: number;
  lyingOutStart: number;
  lyingOutFinish: number;
  headbutt: number;
  displacement: number;
  fighting: number;
  chasing: number;
  chasingUp: number;
  coughing: number;
}
export function defaultSocialBehaviourAndCoughingData() {
  return {
    segment: undefined,
    groupName: undefined,
    start: undefined,
    finish: undefined,
    duration: undefined,
    standingStart: 0,
    standingFinish: 0,
    eatDrinkStart: 0,
    eatDrinkFinish: 0,
    lyingStart: 0,
    lyingFinish: 0,
    sumStart: 0,
    sumFinish: 0,
    lyingOutStart: 0,
    lyingOutFinish: 0,
    headbutt: 0,
    displacement: 0,
    fighting: 0,
    chasing: 0,
    chasingUp: 0,
    coughing: 0,
  };
}

export interface SocialBehaviourAndCoughingForm {
  groups: SocialBehaviourAndCoughingData[];
}

export function defaultSocialBehaviourAndCoughingForm() {
  return {
    groups: [],
  };
}
