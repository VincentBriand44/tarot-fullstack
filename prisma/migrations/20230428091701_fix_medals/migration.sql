/*
  Warnings:

  - You are about to drop the `Medals` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "MedalType" AS ENUM ('GOLD', 'SILVER', 'BRONZE');

-- DropForeignKey
ALTER TABLE "Medals" DROP CONSTRAINT "Medals_userId_fkey";

-- DropTable
DROP TABLE "Medals";

-- DropEnum
DROP TYPE "Medal";

-- CreateTable
CREATE TABLE "Medal" (
    "id" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "medal" "MedalType" NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Medal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Medal" ADD CONSTRAINT "Medal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
