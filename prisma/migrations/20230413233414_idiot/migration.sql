/*
  Warnings:

  - You are about to drop the column `roundId` on the `Auction` table. All the data in the column will be lost.
  - You are about to drop the column `calendarId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_GameToRound` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GameToSeason` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `seasonId` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `auctionId` to the `Round` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameId` to the `Round` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Auction" DROP CONSTRAINT "Auction_roundId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_calendarId_fkey";

-- DropForeignKey
ALTER TABLE "_GameToRound" DROP CONSTRAINT "_GameToRound_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToRound" DROP CONSTRAINT "_GameToRound_B_fkey";

-- DropForeignKey
ALTER TABLE "_GameToSeason" DROP CONSTRAINT "_GameToSeason_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToSeason" DROP CONSTRAINT "_GameToSeason_B_fkey";

-- AlterTable
ALTER TABLE "Auction" DROP COLUMN "roundId";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "seasonId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Round" ADD COLUMN     "auctionId" TEXT NOT NULL,
ADD COLUMN     "gameId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "calendarId";

-- DropTable
DROP TABLE "_GameToRound";

-- DropTable
DROP TABLE "_GameToSeason";

-- CreateTable
CREATE TABLE "_CalendarToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CalendarToUser_AB_unique" ON "_CalendarToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CalendarToUser_B_index" ON "_CalendarToUser"("B");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_auctionId_fkey" FOREIGN KEY ("auctionId") REFERENCES "Auction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CalendarToUser" ADD CONSTRAINT "_CalendarToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Calendar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CalendarToUser" ADD CONSTRAINT "_CalendarToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
