package models

import "gorm.io/gorm"

type Ger struct {
	GID           int         `gorm:"primaryKey;column:g_id" json:"g_id"`
	BID           int         `gorm:"column:b_id" json:"b_id"`
	GerNer        string      `gorm:"not null;column:ger_ner" json:"ger_ner"`
	GerTurul      string      `gorm:"not null;column:ger_turul" json:"ger_turul"`
	GerUne        string      `gorm:"not null;column:ger_une" json:"ger_une"`
	GerUilchilgee string      `gorm:"not null;column:ger_uilchilgee" json:"ger_uilchilgee"`
	GerStatus     string      `gorm:"column:ger_status" json:"ger_status"`
	Baiguullaga   Baiguullaga `gorm:"foreignKey:BID;references:BID" json:"baiguullaga"`
}

func MigrateGer(db *gorm.DB) error {
	return db.AutoMigrate(&Ger{})
}
