package models

import "gorm.io/gorm"

type GerZurag struct {
	GzID     int    `gorm:"primaryKey;column:gz_id" json:"gz_id"`
	GID      int    `gorm:"column:g_id" json:"g_id"`
	GerZurag string `gorm:"column:ger_zurag" json:"ger_zurag"`
	Ger      Ger    `gorm:"foreignKey:GID;references:GID" json:"ger"`
}

func MigrateGerZurag(db *gorm.DB) error {
	return db.AutoMigrate(&GerZurag{})
}
