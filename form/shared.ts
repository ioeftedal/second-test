export const responseOptions = ["Yes", "No", "N/A"] as const;
export type ResponseOptionsType = (typeof responseOptions)[number];
