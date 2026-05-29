CREATE TABLE `lists` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`list_id` text NOT NULL,
	`text` text NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`list_id`) REFERENCES `lists`(`id`) ON UPDATE no action ON DELETE no action
);
