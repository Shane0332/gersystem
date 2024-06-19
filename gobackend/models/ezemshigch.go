package models

import "gorm.io/gorm"

// Ezemshigch represents the structure of the Ezemshigch table
type Ezemshigch struct {
	EID    int    `gorm:"primaryKey;column:e_id" json:"e_id"`
	ENer   string `gorm:"not null;default:'Гэр';column:e_ner" json:"e_ner"`
	EDugar string `gorm:"not null;column:e_dugar" json:"e_dugar"`
}

func MigrateEzemshigch(db *gorm.DB) error {
	return db.AutoMigrate(&Ezemshigch{})
}
