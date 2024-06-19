package models

import "gorm.io/gorm"

func MigrateAll(db *gorm.DB) error {
	if err := db.AutoMigrate(&Ezemshigch{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&Baiguullaga{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&BairshilTurul{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&Bairshil{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&Ger{}); err != nil {
		return err
	}
	if err := db.AutoMigrate(&GerZurag{}); err != nil {
		return err
	}
	return nil
}
