/*
  Warnings:

  - You are about to drop the column `date` on the `transaction` table. All the data in the column will be lost.
  - Changed the type of `type` on the `transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('INCOME', 'EXPENSE');

-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "date",
DROP COLUMN "type",
ADD COLUMN     "type" "TRANSACTION_TYPE" NOT NULL;
