-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(500) NOT NULL,
    `user_pwd` VARCHAR(50) NOT NULL,
    `user_grade` INTEGER NOT NULL DEFAULT 0,
    `user_wallet` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_user_email_key`(`user_email`),
    UNIQUE INDEX `user_user_wallet_key`(`user_wallet`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
