package models

import "gorm.io/gorm"

type BairshilTurul struct {
	BTID  int    `gorm:"primaryKey;column:bt_id" json:"bt_id"`
	BTNer string `gorm:"not null;column:bt_ner" json:"bt_ner"`
}

func MigrateBairshilTurul(db *gorm.DB) error {
	return db.AutoMigrate(&BairshilTurul{})
}
