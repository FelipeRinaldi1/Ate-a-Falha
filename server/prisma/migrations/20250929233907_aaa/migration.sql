/*
  Warnings:

  - A unique constraint covering the columns `[diet_goal_id]` on the table `Diet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "public"."Exercise" (
    "exercise_id" TEXT NOT NULL,
    "exercise_name" VARCHAR(64) NOT NULL,
    "exercise_description" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("exercise_id")
);

-- CreateTable
CREATE TABLE "public"."Sets" (
    "set_id" TEXT NOT NULL,
    "set_load" INTEGER NOT NULL,
    "set_repetitions" INTEGER NOT NULL,
    "set_rest_time" TIME NOT NULL,

    CONSTRAINT "Sets_pkey" PRIMARY KEY ("set_id")
);

-- CreateTable
CREATE TABLE "public"."ExerciseWithSets" (
    "exercise_id" TEXT NOT NULL,
    "set_id" TEXT NOT NULL,
    "exercise_with_set_id" TEXT NOT NULL,
    "especificWorkoutEspecific_workout_id" TEXT,

    CONSTRAINT "ExerciseWithSets_pkey" PRIMARY KEY ("exercise_with_set_id")
);

-- CreateTable
CREATE TABLE "public"."EspecificWorkout" (
    "especific_workout_id" TEXT NOT NULL,
    "especific_workout_day" DATE NOT NULL,
    "globalWorkoutGlobal_workout_id" TEXT,

    CONSTRAINT "EspecificWorkout_pkey" PRIMARY KEY ("especific_workout_id")
);

-- CreateTable
CREATE TABLE "public"."GlobalWorkout" (
    "user_id" TEXT NOT NULL,
    "global_workout_id" TEXT NOT NULL,
    "global_workout_name" VARCHAR(64) NOT NULL,

    CONSTRAINT "GlobalWorkout_pkey" PRIMARY KEY ("global_workout_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Diet_diet_goal_id_key" ON "public"."Diet"("diet_goal_id");

-- AddForeignKey
ALTER TABLE "public"."ExerciseWithSets" ADD CONSTRAINT "ExerciseWithSets_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "public"."Exercise"("exercise_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExerciseWithSets" ADD CONSTRAINT "ExerciseWithSets_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "public"."Sets"("set_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExerciseWithSets" ADD CONSTRAINT "ExerciseWithSets_especificWorkoutEspecific_workout_id_fkey" FOREIGN KEY ("especificWorkoutEspecific_workout_id") REFERENCES "public"."EspecificWorkout"("especific_workout_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EspecificWorkout" ADD CONSTRAINT "EspecificWorkout_globalWorkoutGlobal_workout_id_fkey" FOREIGN KEY ("globalWorkoutGlobal_workout_id") REFERENCES "public"."GlobalWorkout"("global_workout_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GlobalWorkout" ADD CONSTRAINT "GlobalWorkout_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
