/*
  Warnings:

  - You are about to drop the column `date` on the `Program` table. All the data in the column will be lost.
  - Added the required column `closeDate` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openDate` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Program" DROP COLUMN "date",
ADD COLUMN     "closeDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "openDate" TIMESTAMP(3) NOT NULL;
