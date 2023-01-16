/*
  Warnings:

  - You are about to drop the column `email_verified_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `remember_token` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `email_verified_at`,
    DROP COLUMN `phone`,
    DROP COLUMN `remember_token`;
