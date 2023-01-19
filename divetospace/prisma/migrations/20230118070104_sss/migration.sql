-- CreateTable
CREATE TABLE `User` (
    `user_no` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(500) NOT NULL,
    `user_pwd` VARCHAR(50) NOT NULL,
    `user_nickname` VARCHAR(30) NOT NULL,
    `user_grade` INTEGER NOT NULL DEFAULT 0,
    `user_streaming` DATETIME(3) NOT NULL,
    `user_wallet` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_user_email_key`(`user_email`),
    UNIQUE INDEX `User_user_wallet_key`(`user_wallet`),
    PRIMARY KEY (`user_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `Music` (
    `music_no` INTEGER NOT NULL AUTO_INCREMENT,
    `music_title` VARCHAR(50) NOT NULL,
    `music_lyricist` VARCHAR(191) NOT NULL,
    `music_composer` VARCHAR(191) NOT NULL,
    `music_singer` VARCHAR(191) NOT NULL,
    `music_category` INTEGER NOT NULL,
    `music_description` VARCHAR(191) NOT NULL,
    `music_isfunding` BOOLEAN NULL,

    PRIMARY KEY (`music_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MusicFile` (
    `mf_no` INTEGER NOT NULL AUTO_INCREMENT,
    `mf_path` VARCHAR(191) NOT NULL,
    `music_no` INTEGER NOT NULL,

    PRIMARY KEY (`mf_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MusicCart` (
    `mc_no` INTEGER NOT NULL AUTO_INCREMENT,
    `user_mc_id` INTEGER NOT NULL,
    `music_id` INTEGER NOT NULL,

    PRIMARY KEY (`mc_no`)
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
ALTER TABLE `MusicFile` ADD CONSTRAINT `MusicFile_music_no_fkey` FOREIGN KEY (`music_no`) REFERENCES `Music`(`music_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MusicCart` ADD CONSTRAINT `MusicCart_user_mc_id_fkey` FOREIGN KEY (`user_mc_id`) REFERENCES `User`(`user_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MusicCart` ADD CONSTRAINT `MusicCart_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `Music`(`music_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_user_no_fkey` FOREIGN KEY (`user_no`) REFERENCES `User`(`user_no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_product_no_fkey` FOREIGN KEY (`product_no`) REFERENCES `Product`(`product_no`) ON DELETE RESTRICT ON UPDATE CASCADE;
