/*
  Warnings:

  - You are about to drop the `Pattern` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stash` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tools` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Yarn` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pattern" DROP CONSTRAINT "Pattern_userId_fkey";

-- DropForeignKey
ALTER TABLE "Stash" DROP CONSTRAINT "Stash_userId_fkey";

-- DropForeignKey
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_stashId_fkey";

-- DropForeignKey
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_userId_fkey";

-- DropForeignKey
ALTER TABLE "Yarn" DROP CONSTRAINT "Yarn_stashId_fkey";

-- DropForeignKey
ALTER TABLE "Yarn" DROP CONSTRAINT "Yarn_userId_fkey";

-- DropTable
DROP TABLE "Pattern";

-- DropTable
DROP TABLE "Stash";

-- DropTable
DROP TABLE "Tools";

-- DropTable
DROP TABLE "Yarn";

-- DropEnum
DROP TYPE "TOOL_TYPE";
