package main

import (
	"log"
	"your_module/models" // adjust the import path according to your module name

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	// Open a connection to the database
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}

	// Migrate the schemas
	if err := models.MigrateAll(db); err != nil {
		log.Fatalf("Failed to migrate database: %v", err)
	}

	log.Println("Database migration completed successfully.")
}
