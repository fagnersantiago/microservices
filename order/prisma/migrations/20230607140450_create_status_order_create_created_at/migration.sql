/*
  Warnings:

  - Added the required column `createdAt` to the `ordered` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stautus` to the `ordered` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ordered" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "stautus" TEXT NOT NULL;
