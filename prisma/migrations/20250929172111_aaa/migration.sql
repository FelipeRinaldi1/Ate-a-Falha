/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");
DROP SEQUENCE "User_user_id_seq";

-- CreateTable
CREATE TABLE "public"."DietGoal" (
    "diet_goal_id" TEXT NOT NULL,
    "diet_goal_carbohydrate" INTEGER NOT NULL,
    "diet_goal_protein" INTEGER NOT NULL,
    "diet_goal_fat" INTEGER NOT NULL,
    "diet_goal_fiber" INTEGER NOT NULL,
    "diet_goal_calories" INTEGER NOT NULL,
    "diet_goal_water" INTEGER NOT NULL,

    CONSTRAINT "DietGoal_pkey" PRIMARY KEY ("diet_goal_id")
);

-- CreateTable
CREATE TABLE "public"."Diet" (
    "user_id" TEXT NOT NULL,
    "diet_goal_id" TEXT NOT NULL,
    "diet_id" TEXT NOT NULL,
    "diet_name" VARCHAR(64) NOT NULL,

    CONSTRAINT "Diet_pkey" PRIMARY KEY ("diet_id")
);

-- CreateTable
CREATE TABLE "public"."Meal" (
    "meal_id" TEXT NOT NULL,
    "meal_name" VARCHAR(64) NOT NULL,
    "meal_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("meal_id")
);

-- CreateTable
CREATE TABLE "public"."Food" (
    "food_id" TEXT NOT NULL,
    "food_name" VARCHAR(64) NOT NULL,
    "food_carbohydrate" INTEGER NOT NULL,
    "food_protein" INTEGER NOT NULL,
    "food_fat" INTEGER NOT NULL,
    "food_fiber" INTEGER NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("food_id")
);

-- CreateTable
CREATE TABLE "public"."MealWithFood" (
    "meal_id" TEXT NOT NULL,
    "food_id" TEXT NOT NULL,
    "meal_with_food_id" TEXT NOT NULL,
    "quantity_per_100g" INTEGER NOT NULL,

    CONSTRAINT "MealWithFood_pkey" PRIMARY KEY ("meal_with_food_id")
);

-- AddForeignKey
ALTER TABLE "public"."Diet" ADD CONSTRAINT "Diet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Diet" ADD CONSTRAINT "Diet_diet_goal_id_fkey" FOREIGN KEY ("diet_goal_id") REFERENCES "public"."DietGoal"("diet_goal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MealWithFood" ADD CONSTRAINT "MealWithFood_meal_id_fkey" FOREIGN KEY ("meal_id") REFERENCES "public"."Meal"("meal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MealWithFood" ADD CONSTRAINT "MealWithFood_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "public"."Food"("food_id") ON DELETE RESTRICT ON UPDATE CASCADE;
