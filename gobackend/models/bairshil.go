package models

import "gorm.io/gorm"

type Bairshil struct {
	BairID        int           `gorm:"primaryKey;column:bair_id" json:"bair_id"`
	BTID          int           `gorm:"not null;column:bt_id" json:"bt_id"`
	BID           int           `gorm:"not null;column:b_id" json:"b_id"`
	BairNer       string        `gorm:"not null;column:bair_ner" json:"bair_ner"`
	BairUrt       string        `gorm:"column:bair_urt" json:"bair_urt"`
	BairUrg       string        `gorm:"column:bair_urg" json:"bair_urg"`
	BairZurag     string        `gorm:"column:bair_zurag" json:"bair_zurag"`
	Baiguullaga   Baiguullaga   `gorm:"foreignKey:BID;references:BID" json:"baiguullaga"`
	BairshilTurul BairshilTurul `gorm:"foreignKey:BTID;references:BTID" json:"bairshil_turul"`
}

func MigrateBairshil(db *gorm.DB) error {
	return db.AutoMigrate(&Bairshil{})
}
