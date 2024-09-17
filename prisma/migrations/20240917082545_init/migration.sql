-- CreateTable
CREATE TABLE "TestWaterPoint" (
    "id" SERIAL NOT NULL,
    "group_name" TEXT NOT NULL,
    "nr_animals_using_wps" INTEGER,
    "type" INTEGER NOT NULL,
    "troughlength" INTEGER,
    "cleanliness" INTEGER NOT NULL,
    "functioning" TEXT NOT NULL,
    "waterflow" TEXT NOT NULL,

    CONSTRAINT "TestWaterPoint_pkey" PRIMARY KEY ("id")
);
