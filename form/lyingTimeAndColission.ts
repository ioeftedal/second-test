export const CollionData = ["Absent", "Present"] as const;
export type Collision = (typeof CollionData)[number];

interface LyingTimeAndCollision {
  lyingTime: number | undefined;
  collision: Collision | undefined;
}

export interface LyingTimeAndCollisionForm {
  individuals: LyingTimeAndCollision[];
}

export default function defaultLyingTimeAndCollisionForm(
  n_individuals: number,
): LyingTimeAndCollisionForm {
  return {
    individuals: [...Array(n_individuals)].map(() => ({
      lyingTime: undefined,
      collision: undefined,
    })),
  };
}
