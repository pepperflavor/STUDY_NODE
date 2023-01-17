/*
  Warnings:

  - The primary key for the `music` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `music` table. All the data in the column will be lost.
  - The primary key for the `musiccart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `musiccart` table. All the data in the column will be lost.
  - You are about to drop the column `user_cart_id` on the `musiccart` table. All the data in the column will be lost.
  - The primary key for the `musicfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `musicfile` table. All the data in the column will be lost.
  - You are about to drop the column `music_file_path` on the `musicfile` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - Added the required column `music_no` to the `Music` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mc_no` to the `MusicCart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_mc_id` to the `MusicCart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mf_no` to the `MusicFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mf_path` to the `MusicFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_nickname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_no` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_streaming` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `musiccart` DROP FOREIGN KEY `musicCart_music_id_fkey`;

-- DropForeignKey
ALTER TABLE `musiccart` DROP FOREIGN KEY `musicCart_user_cart_id_fkey`;

-- AlterTable
ALTER TABLE `music` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `music_no` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`music_no`);

-- AlterTable
ALTER TABLE `musiccart` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `user_cart_id`,
    ADD COLUMN `mc_no` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `user_mc_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`mc_no`);

-- AlterTable
ALTER TABLE `musicfile` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `music_file_path`,
    ADD COLUMN `mf_no` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `mf_path` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`mf_no`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `user_nickname` VARCHAR(30) NOT NULL,
    ADD COLUMN `user_no` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `user_streaming` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`user_no`);

-- CreateTable
CREATE TABLE `Shinchunghada` (
    `shin_no` INTEGER NOT NULL AUTO_INCREMENT,
    `shin_amount` INTEGER NOT NULL,
    `shin_nft_amount` INTEGER NOT NULL,
    `shin_cover` VARCHAR(191) NOT NULL,
    `shin_period` DATETIME(3) NOT NULL,
    `shin_category` VARCHAR(191) NOT NULL,
    `shin_ispermit` BOOLEAN NOT NULL,
    `shin_creator_ca` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`shin_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funding` (
    `fund_no` INTEGER NOT NULL AUTO_INCREMENT,
    `fund_state` INTEGER NOT NULL DEFAULT 0,
    `shin_no` INTEGER NOT NULL,

    UNIQUE INDEX `Funding_shin_no_key`(`shin_no`),
    PRIMARY KEY (`fund_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Singer` (
    `sing_no` INTEGER NOT NULL AUTO_INCREMENT,
    `sing_name` VARCHAR(191) NOT NULL,
    `sing_profile` VARCHAR(191) NULL,
    `shin_no` INTEGER NOT NULL,

    UNIQUE INDEX `Singer_shin_no_key`(`shin_no`),
    PRIMARY KEY (`sing_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Composer` (
    `com_no` INTEGER NOT NULL AUTO_INCREMENT,
    `com_name` VARCHAR(191) NOT NULL,
    `com_profile` VARCHAR(191) NULL,
    `shin_no` INTEGER NOT NULL,

    UNIQUE INDEX `Composer_shin_no_key`(`shin_no`),
    PRIMARY KEY (`com_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lyricist` (
    `lyric_no` INTEGER NOT NULL AUTO_INCREMENT,
    `lyric_name` VARCHAR(191) NOT NULL,
    `lyric_profile` VARCHAR(191) NULL,
    `shin_no` INTEGER NOT NULL,

    UNIQUE INDEX `Lyricist_shin_no_key`(`shin_no`),
    PRIMARY KEY (`lyric_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `product_no` INTEGER NOT NULL AUTO_INCREMENT,
    `product_price` INTEGER NOT NULL,
    `product_descrip` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`product_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cart` (
    `cart_no` INTEGER NOT NULL AUTO_INCREMENT,
    `user_no` INTEGER NOT NULL,
    `product_no` INTEGER NOT NULL,

    PRIMARY KEY (`cart_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Funding` ADD CONSTRAINT `Funding_shin_no_fkey` FOREIGN KEY (`shin_no`) REFERENCES `Shinchunghada`(`shin_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Singer` ADD CONSTRAINT `Singer_shin_no_fkey` FOREIGN KEY (`shin_no`) REFERENCES `Shinchunghada`(`shin_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Composer` ADD CONSTRAINT `Composer_shin_no_fkey` FOREIGN KEY (`shin_no`) REFERENCES `Shinchunghada`(`shin_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lyricist` ADD CONSTRAINT `Lyricist_shin_no_fkey` FOREIGN KEY (`shin_no`) REFERENCES `Shinchunghada`(`shin_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MusicCart` ADD CONSTRAINT `MusicCart_user_mc_id_fkey` FOREIGN KEY (`user_mc_id`) REFERENCES `User`(`user_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MusicCart` ADD CONSTRAINT `MusicCart_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `Music`(`music_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_user_no_fkey` FOREIGN KEY (`user_no`) REFERENCES `User`(`user_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_product_no_fkey` FOREIGN KEY (`product_no`) REFERENCES `Product`(`product_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `user_user_email_key` TO `User_user_email_key`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `user_user_wallet_key` TO `User_user_wallet_key`;
