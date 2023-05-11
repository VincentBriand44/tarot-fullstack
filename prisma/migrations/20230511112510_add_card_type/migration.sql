/*
  Warnings:

  - Changed the type of `card` on the `Round` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Card" AS ENUM ('HEART', 'TILE', 'CLOVER', 'PIKE');

-- AlterTable
ALTER TABLE "Round" DROP COLUMN "card",
ADD COLUMN     "card" "Card" NOT NULL;
