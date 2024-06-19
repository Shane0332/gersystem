package models

import "gorm.io/gorm"

type Baiguullaga struct {
	BID        int        `gorm:"primaryKey;autoIncrement;column:b_id" json:"b_id"`
	BNer       string     `gorm:"not null;column:b_ner" json:"b_ner"`
	BTuhai     string     `gorm:"not null;column:b_tuhai" json:"b_tuhai"`
	BZurag     string     `gorm:"not null;column:b_zurag" json:"b_zurag"`
	BUtas      string     `gorm:"not null;column:b_utas" json:"b_utas"`
	BGertoo    string     `gorm:"not null;column:b_gertoo" json:"b_gertoo"`
	EID        int        `gorm:"not null;column:e_id" json:"e_id"`
	Ezemshigch Ezemshigch `gorm:"foreignKey:EID;references:EID" json:"ezemshigch"`
}

func MigrateBaiguullaga(db *gorm.DB) error {
	return db.AutoMigrate(&Baiguullaga{})
}
