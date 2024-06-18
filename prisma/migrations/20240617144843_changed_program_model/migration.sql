/*
  Warnings:

  - You are about to drop the column `description` on the `Program` table. All the data in the column will be lost.
  - Added the required column `about` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `benefits` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eligibility` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profil` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Program" DROP COLUMN "description",
ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "benefits" TEXT NOT NULL,
ADD COLUMN     "eligibility" TEXT NOT NULL,
ADD COLUMN     "profil" TEXT NOT NULL;
