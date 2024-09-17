interface Farm {
  id: string;
  country?: string | null;
  address?: string | null;
  zip?: string | null;
  town?: string | null;
  visit_date_arranged: string;
  visit_date_actual?: string | null;
  id_number: string;
  visit_completed?: boolean | null;
  preVisit?: PreVisit | null;
  score?: Score | null;
  contactPersons: ContactPerson[];
  herd?: Herd | null;
  groups: Group[];
  SocialBehaviourAndCoughing: SocialBehaviourAndCoughing[];
  resources: Resources[];
  waterPoints: WaterPoint[];
  avoidanceDistanceTests: AvoidanceDistanceTest[];
  clinicalScoring: ClinicalScoring[];
}

interface PreVisit {
  id: string;
  herd_size?: number | null;
  sample_size?: number | null;
  nr_groups?: number | null;
  pregheifers_mixed?: boolean | null;
  drycows_mixed?: boolean | null;
  bull?: boolean | null;
  bull_sep?: number | null;
  feeding?: string | null;
  milking_system?: number | null;
  morning_routines?: string | null;
  headlock?: boolean | null;
  nr_headlocks?: number | null;
  on_pasture?: boolean | null;
  date_last_claw_trim?: string | null;
  interference?: string | null;
  stockperson_available?: boolean | null;
  farm: Farm;
}

interface Score {
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
  farm: Farm;
}

interface ContactPerson {
  id: number;
  name: string;
  phone_a: string;
  phone_b?: string | null;
  email?: string | null;
  farm: Farm;
}

interface Herd {
  id: string;
  farm: Farm;
  lyingTimeAndCollisions: LyingTimeAndCollision[];
  managementQuestionnaire?: ManagementQuestionnaire | null;
  qualitativeBehaviourAnalysis?: QualitativeBehaviourAnalysis | null;
}

interface LyingTimeAndCollision {
  id: number;
  lie_t: number;
  collision: string;
  herd: Herd;
}

interface ManagementQuestionnaire {
  id: string;
  temp_in?: number | null;
  temp_out?: number | null;
  pasture_access: boolean;
  pasture_days_year: number;
  pasture_hours_day: number;
  pasture_days_comment?: string | null;
  outdoor_access?: boolean | null;
  outdoor_days_year?: number | null;
  outdoor_hours_day?: number | null;
  loose_housed: boolean;
  nr_dystocia_12_mos: number;
  nr_downercows_12_mos: number;
  nr_mortality_12_mos: number;
  disb_deho_on_farm: number;
  disb_deho_method: number;
  hot_air?: number | null;
  disb_deho_anesthesia: number;
  disb_deho_analgesia: number;
  td_on_farm: number;
  td_method: number;
  td_anesthesia: number;
  td_analgesia: number;
  calf_mother_time?: number | null;
  singlebox_time?: number | null;
  milk_volume_daily?: number | null;
  colostrum_volume?: number | null;
  concentrate_age?: number | null;
  roughage_age?: number | null;
  water_age?: number | null;
  fav_cow?: boolean | null;
  special_measure?: boolean | null;
  special_measure_desc?: string | null;
  nr_milkrec_3mos?: number | null;
  avg_dairy_cow_12mos?: number | null;
  avg_calvings_year?: number | null;
  pct_scc400k_3mos?: number | null;
  herd: Herd;
}

interface QualitativeBehaviourAnalysis {
  id: string;
  active: number;
  relaxed: number;
  fearful: number;
  agitated: number;
  calm: number;
  content: number;
  indifferent: number;
  frustrated: number;
  friendly: number;
  bored: number;
  playful: number;
  positively_occupied: number;
  lively: number;
  inquisitive: number;
  irritable: number;
  calmless_uneasy: number;
  sociable: number;
  apathetic: number;
  happy: number;
  distressed: number;
  herd: Herd;
}

interface Group {
  id: number;
  group_name: string;
  group_size: number;
  group_sample: number;
  farm: Farm;
}

interface SocialBehaviourAndCoughing {
  id: string;
  segment: string;
  group_name: string;
  start: string;
  finish: string;
  duration: number;
  standing_start: number;
  standing_finish: number;
  eat_drink_start: number;
  eat_drink_finish: number;
  lying_start: number;
  lying_finish: number;
  sum_start: number;
  sum_finish: number;
  lying_out_start: number;
  lying_out_finish: number;
  headbutt: number;
  displacement: number;
  fighting: number;
  chasing: number;
  chasing_up: number;
  coughing: number;
  farm: Farm;
}

interface Resources {
  id: string;
  group_name: string;
  nr_wps: number;
  farm: Farm;
}

interface WaterPoint {
  id: number;
  group_name: string;
  nr_animals_using_wps?: number | null;
  type: number;
  troughlength?: number | null;
  cleanliness: number;
  functioning: string;
  waterflow: string;
  farm: Farm;
}

interface AvoidanceDistanceTest {
  id: string;
  group_name: string;
  ear_tag: string;
  side: string;
  a_d_t1: number;
  a_d_t2?: number | null;
  nasal_discharge: string;
  ocular_discharge: string;
  comment?: string | null;
  farm: Farm;
}

interface ClinicalScoring {
  id: string;
  group_name: string;
  ear_tag: string;
  side: string;
  breed: number;
  bcs_wq: number;
  bcs_std?: number | null;
  clean_scr_lower_hindleg: number;
  clean_scr_upper_hindleg: number;
  clean_scr_udderwq: number;
  clean_scr_udder?: number | null;
  clean_scr_teats?: number | null;
  integ_tarsus: number;
  nr_hairless_tarsus?: number | null;
  nr_lesion_tarsus?: number | null;
  nr_swelling_tarsus?: number | null;
  integ_hindquarter: number;
  nr_hairless_hq?: number | null;
  nr_lesion_hq?: number | null;
  nr_swelling_hq?: number | null;
  integ_neck_shoulder_back: number;
  nr_hairless_nsb?: number | null;
  nr_lesion_nsb?: number | null;
  nr_swelling_nsb?: number | null;
  integ_carpus: number;
  nr_hairless_carpus?: number | null;
  nr_lesion_carpus?: number | null;
  nr_swelling_carpus?: number | null;
  integ_flank_side_udder: number;
  nr_hairless_fsu?: number | null;
  nr_lesion_fsu?: number | null;
  nr_swelling_fsu?: number | null;
  integ_other: number;
  integ_other_specify?: string | null;
  tail_broken?: number | null;
  hampered_respiration: number;
  diarrhoea: number;
  vulval_discharge: number;
  lameness: number;
  comment?: string | null;
  farm: Farm;
}
