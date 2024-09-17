export interface OverallScore {
  id: string;
  absence_of_prolonged_hunger: number;
  absence_of_prolonged_thirst: number;
  comfort_around_resting: number;
  ease_of_movement: number;
  absence_of_injuries: number;
  absence_of_disease: number;
  absence_of_pain: number;
  expression_of_social_behaviors: number;
  expression_of_other_behaviors: number;
  good_human_animal_relationship: number;
  positive_emotional_state: number;
  principle_good_feeding: number;
  principle_good_housing: number;
  principle_good_health: number;
  principle_good_behavior: number;
  welfare_category: string;
  farmId: string;
}

export function defaultOverallScore(): OverallScore {
  return {
    id: "",
    absence_of_prolonged_hunger: 0,
    absence_of_prolonged_thirst: 0,
    comfort_around_resting: 0,
    ease_of_movement: 0,
    absence_of_injuries: 0,
    absence_of_disease: 0,
    absence_of_pain: 0,
    expression_of_social_behaviors: 0,
    expression_of_other_behaviors: 0,
    good_human_animal_relationship: 0,
    positive_emotional_state: 0,
    principle_good_feeding: 0,
    principle_good_housing: 0,
    principle_good_health: 0,
    principle_good_behavior: 0,
    welfare_category: "",
    farmId: "",
  };
}
