import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// Define the expected body type
type WaterPointBody = {
  group_name: string;
  nr_animals_using_wps?: number | null; // Optional or null
  type: number; // This must be an integer based on Prisma model
  troughlength?: number | null; // Optional or null
  cleanliness: number; // This is an integer in Prisma model
  functioning: string; // This must be a string based on Prisma model
  waterflow: string; // This must be a string based on Prisma model
  farmId: string; // Required UUID string
};

// POST /api/post
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Safely parse the body as WaterPointBody
  const {
    group_name,
    nr_animals_using_wps,
    type,
    troughlength,
    cleanliness,
    functioning,
    waterflow,
    farmId,
  } = req.body as WaterPointBody;

  try {
    // Create a new waterPoint record in the database
    const result = await prisma.waterPoint.create({
      data: {
        group_name,
        nr_animals_using_wps: nr_animals_using_wps ?? null, // Handle optional field
        type,
        troughlength: troughlength ?? null, // Handle optional field
        cleanliness,
        functioning,
        waterflow,
        farmId, // Make sure to include this field in the request
      },
    });
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error creating water point" });
  }
}
