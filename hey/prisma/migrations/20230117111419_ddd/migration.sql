/*
  Warnings:

  - Added the required column `music_no` to the `MusicFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `music` ADD COLUMN `music_isfunding` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `musicfile` ADD COLUMN `music_no` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `MusicFile` ADD CONSTRAINT `MusicFile_music_no_fkey` FOREIGN KEY (`music_no`) REFERENCES `Music`(`music_no`) ON DELETE RESTRICT ON UPDATE CASCADE;
