export interface QBehaviorAnalysisForm {
  active: number;
  relaxed: number;
  fearful: number;
  agitated: number;
  calm: number;
  content: number;
  inDifferent: number;
  frustrated: number;
  friendly: number;
  bored: number;
  playful: number;
  positivelyOccupied: number;
  lively: number;
  inquisitive: number;
  irritable: number;
  calmlessUneasy: number;
  sociable: number;
  apathetic: number;
  happy: number;
  distressed: number;
}

export function defaultQBehaviorAnalysisForm(): QBehaviorAnalysisForm {
  return {
    active: 0,
    relaxed: 0,
    fearful: 0,
    agitated: 0,
    calm: 0,
    content: 0,
    inDifferent: 0,
    frustrated: 0,
    friendly: 0,
    bored: 0,
    playful: 0,
    positivelyOccupied: 0,
    lively: 0,
    inquisitive: 0,
    irritable: 0,
    calmlessUneasy: 0,
    sociable: 0,
    apathetic: 0,
    happy: 0,
    distressed: 0,
  };
}
