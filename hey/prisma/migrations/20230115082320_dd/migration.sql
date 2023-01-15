-- CreateTable
CREATE TABLE `music` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `music_title` VARCHAR(50) NOT NULL,
    `music_lyricist` VARCHAR(191) NOT NULL,
    `music_composer` VARCHAR(191) NOT NULL,
    `music_singer` VARCHAR(191) NOT NULL,
    `music_category` INTEGER NOT NULL,
    `music_description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `musicFile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `music_file_path` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `musicCart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_cart_id` INTEGER NOT NULL,
    `music_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `musicCart` ADD CONSTRAINT `musicCart_user_cart_id_fkey` FOREIGN KEY (`user_cart_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `musicCart` ADD CONSTRAINT `musicCart_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `music`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
