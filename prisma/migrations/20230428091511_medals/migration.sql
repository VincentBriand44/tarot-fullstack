-- CreateEnum
CREATE TYPE "Medal" AS ENUM ('GOLD', 'SILVER', 'BRONZE');

-- CreateTable
CREATE TABLE "Medals" (
    "id" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "medal" "Medal" NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Medals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Medals" ADD CONSTRAINT "Medals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
