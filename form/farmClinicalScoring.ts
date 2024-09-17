export interface ClinicalScoring {
  group_name: string;
  ear_tag: string;
  side: string;
  breed: number;
  bcs_wqt: number;
  bcs_std: number | null;
  clean_scr_lower_hindleg: number;
  clean_scr_upper_hindleg: number;
  clean_scr_udderwq: number;
  clean_scr_udder: number | null;
  clean_scr_teats: number | null;
  integ_tarsus: number;
  nr_hairless_tarsus: number | null;
  nr_lesion_tarsus: number | null;
  nr_swelling_tarsus: number | null;
  integ_hindquarter: number;
  nr_hairless_hq: number | null;
  nr_lesion_hq: number | null;
  nr_swelling_hq: number | null;
  integ_neck_shoulder_back: number;
  nr_hairless_nsb: number | null;
  nr_lesion_nsb: number | null;
  nr_swelling_nsb: number | null;
  integ_carpus: number;
  nr_hairless_carpus: number | null;
  nr_lesion_carpus: number | null;
  nr_swelling_carpus: number | null;
  integ_flank_side_udder: number;
  nr_hairless_fsu: number | null;
  nr_lesion_fsu: number | null;
  nr_swelling_fsu: number | null;
  integ_other: number;
  integ_other_specify: string | null;
  tail_broken: number | null;
  hampered_respiration: number;
  diarrhoea: number;
  vulval_discharge: number;
  lameness: number;
  comment: string | null;
  farmId: string;
}

export function defaultClinicalScoring(): ClinicalScoring {
  return {
    group_name: "",
    ear_tag: "",
    side: "",
    breed: 0,
    bcs_wqt: 0,
    bcs_std: null,
    clean_scr_lower_hindleg: 0,
    clean_scr_upper_hindleg: 0,
    clean_scr_udderwq: 0,
    clean_scr_udder: null,
    clean_scr_teats: null,
    integ_tarsus: 0,
    nr_hairless_tarsus: null,
    nr_lesion_tarsus: null,
    nr_swelling_tarsus: null,
    integ_hindquarter: 0,
    nr_hairless_hq: null,
    nr_lesion_hq: null,
    nr_swelling_hq: null,
    integ_neck_shoulder_back: 0,
    nr_hairless_nsb: null,
    nr_lesion_nsb: null,
    nr_swelling_nsb: null,
    integ_carpus: 0,
    nr_hairless_carpus: null,
    nr_lesion_carpus: null,
    nr_swelling_carpus: null,
    integ_flank_side_udder: 0,
    nr_hairless_fsu: null,
    nr_lesion_fsu: null,
    nr_swelling_fsu: null,
    integ_other: 0,
    integ_other_specify: null,
    tail_broken: null,
    hampered_respiration: 0,
    diarrhoea: 0,
    vulval_discharge: 0,
    lameness: 0,
    comment: null,
    farmId: "",
  };
}
