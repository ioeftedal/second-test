interface AvoidanceDistanceTest {
  id: string;
  groupName: string;
  earTag: string;
  side: string;
  /**
   * Avoidance distance test 1
   */
  aDT1: number;
  /**
   * Avoidance distance test retest
   */
  aDT2?: number | null;
  nasalDischarge: string;
  ocularDischarge: string;
  comment?: string;
}
export interface AvoidanceDistanceTestForm {
  individuals: AvoidanceDistanceTest[];
}

export function defaultAvoidanceDistanceTestForm(): AvoidanceDistanceTestForm {
  return {
    individuals: [],
  };
}

export function defaultAvoidanceDistanceTest() {
  console.log("defaultAvoidanceDistanceTest");
  return {
    id: "",
    groupName: "",
    earTag: "",
    side: "",
    aDT1: 0,
    aDT2: 0,
    nasalDischarge: "",
    ocularDischarge: "",
    comment: "",
  };
}
