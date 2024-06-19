package main

import (
	"gobackend/models"
	"gobackend/storage"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

type Repository struct {
	DB *gorm.DB
}

func (r *Repository) CreateBaiguullaga(c *fiber.Ctx) error {
	bai := models.Baiguullaga{}
	err := c.BodyParser(&bai)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Failed to parse request body",
		})
	}
	err = r.DB.Create(&bai).Error
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to create baiguullaga",
		})
	}
	return c.JSON(fiber.Map{
		"Message": "Baiguullaga successfully created",
		"data":    bai,
	})
}
func (r *Repository) GetBaiguullaga(c *fiber.Ctx) error {
	bai := []models.Baiguullaga{}
	err := r.DB.Find(&bai).Error
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to get baiguullaga",
		})
	}
	return c.JSON(fiber.Map{
		"Message": "Baiguullaga successfully get",
		"data":    bai,
	})
}

func (r *Repository) SetupRouters(app *fiber.App) {
	api := app.Group("/api")
	api.Post("/createBai", r.CreateBaiguullaga)
	api.Post("/getBai", r.GetBaiguullaga)

}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal(err)
	}

	config := &storage.Config{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		Password: os.Getenv("DB_PASSWORD"),
		User:     os.Getenv("DB_USER"),
		DBName:   os.Getenv("DB_DBNAME"),
		SSLMode:  os.Getenv("DB_SSLMODE"),
	}

	db, err := storage.NewConnection(config)
	if err != nil {
		log.Fatal("could not load the database")
	}

	if err = models.MigrateAll(db); err != nil {
		log.Fatalf("Failed to migrate database: %v", err)
	}
	r := Repository{
		DB: db,
	}

	app := fiber.New()

	// app.Use(cors.New(cors.Config{
	// 	AllowCredentials: true,
	// 	AllowOrigins:     "http://localhost:3000",
	// }))

	r.SetupRouters(app)
	log.Fatal(app.Listen(":8080"))
}
