/*
  Warnings:

  - A unique constraint covering the columns `[diet_id]` on the table `DietGoal` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."DietGoal" ADD COLUMN     "diet_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "DietGoal_diet_id_key" ON "public"."DietGoal"("diet_id");
