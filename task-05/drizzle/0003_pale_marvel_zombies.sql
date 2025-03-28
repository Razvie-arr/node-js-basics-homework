ALTER TABLE `todos` ADD `priority` text DEFAULT 'normal' NOT NULL;--> statement-breakpoint
ALTER TABLE `todos` DROP COLUMN `category`;