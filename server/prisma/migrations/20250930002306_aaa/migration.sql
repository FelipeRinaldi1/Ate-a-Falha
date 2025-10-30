-- CreateTable
CREATE TABLE "public"."BodyComposition" (
    "body_composition_id" TEXT NOT NULL,
    "body_composition_birth" DATE NOT NULL,
    "body_composition_weight" INTEGER NOT NULL,
    "body_composition_height" INTEGER NOT NULL,
    "body_composition_gender" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "BodyComposition_pkey" PRIMARY KEY ("body_composition_id")
);

-- AddForeignKey
ALTER TABLE "public"."BodyComposition" ADD CONSTRAINT "BodyComposition_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
