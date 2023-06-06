/*
  Warnings:

  - You are about to drop the column `auctionId` on the `Round` table. All the data in the column will be lost.
  - Added the required column `type` to the `Auction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuctionType" AS ENUM ('HIDDEN', 'UNIQUE', 'OPTIONAL');

-- DropForeignKey
ALTER TABLE "Round" DROP CONSTRAINT "Round_auctionId_fkey";

-- AlterTable
ALTER TABLE "Auction" ADD COLUMN     "type" "AuctionType" NOT NULL;

-- AlterTable
ALTER TABLE "Round" DROP COLUMN "auctionId";

-- CreateTable
CREATE TABLE "_AuctionToRound" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuctionToRound_AB_unique" ON "_AuctionToRound"("A", "B");

-- CreateIndex
CREATE INDEX "_AuctionToRound_B_index" ON "_AuctionToRound"("B");

-- AddForeignKey
ALTER TABLE "_AuctionToRound" ADD CONSTRAINT "_AuctionToRound_A_fkey" FOREIGN KEY ("A") REFERENCES "Auction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuctionToRound" ADD CONSTRAINT "_AuctionToRound_B_fkey" FOREIGN KEY ("B") REFERENCES "Round"("id") ON DELETE CASCADE ON UPDATE CASCADE;
