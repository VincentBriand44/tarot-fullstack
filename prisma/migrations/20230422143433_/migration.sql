/*
  Warnings:

  - Added the required column `gameId` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seasonId` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "gameId" TEXT NOT NULL,
ADD COLUMN     "seasonId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
