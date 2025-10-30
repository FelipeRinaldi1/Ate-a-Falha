/*
  Warnings:

  - You are about to drop the column `diet_goal_calories` on the `DietGoal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Diet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `body_composition_activity_level` to the `BodyComposition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `BodyComposition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Diet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `DietGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `EspecificWorkout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `ExerciseWithSets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `GlobalWorkout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diet_id` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `MealWithFood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Sets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."BodyComposition" ADD COLUMN     "body_composition_activity_level" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Diet" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."DietGoal" DROP COLUMN "diet_goal_calories",
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."EspecificWorkout" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Exercise" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."ExerciseWithSets" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Food" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL,
ALTER COLUMN "food_carbohydrate" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "food_protein" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "food_fat" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "food_fiber" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."GlobalWorkout" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Meal" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "diet_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."MealWithFood" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL,
ALTER COLUMN "quantity_per_100g" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."Sets" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Diet_user_id_key" ON "public"."Diet"("user_id");

-- AddForeignKey
ALTER TABLE "public"."Meal" ADD CONSTRAINT "Meal_diet_id_fkey" FOREIGN KEY ("diet_id") REFERENCES "public"."Diet"("diet_id") ON DELETE RESTRICT ON UPDATE CASCADE;
