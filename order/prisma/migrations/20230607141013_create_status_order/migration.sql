/*
  Warnings:

  - You are about to drop the column `stautus` on the `ordered` table. All the data in the column will be lost.
  - Added the required column `status` to the `ordered` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ordered" DROP COLUMN "stautus",
ADD COLUMN     "status" TEXT NOT NULL;
