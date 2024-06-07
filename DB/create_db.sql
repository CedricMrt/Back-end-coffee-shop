DROP TABLE IF EXISTS "coffee";

DROP TABLE IF EXISTS "category";

DROP TABLE IF EXISTS "users";

DROP TABLE IF EXISTS "cart_items";

CREATE TABLE IF NOT EXISTS "category" (
  "id" SERIAL PRIMARY KEY,
  "category" VARCHAR(255) NOT NULL
);

set client_encoding to utf8;

INSERT INTO "category" ("id", "category")
VALUES
(1, 'Corsé'),
(2, 'Acide'),
(3, 'Fruité'),
(4, 'Doux'),
(5, 'Épicé'),
(6, 'Chocolaté');

CREATE TABLE IF NOT EXISTS "coffee" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT NOT NULL,
  "reference" VARCHAR(255) NOT NULL UNIQUE,
  "origin" VARCHAR(255) NOT NULL,
  "kg_price" REAL NOT NULL,
  "disponibility" BOOLEAN NOT NULL,
  "date" DATE NOT NULL DEFAULT CURRENT_DATE,
  "category_id" INT,
  FOREIGN KEY("category_id") REFERENCES "category"("id")
);


INSERT INTO "coffee"("id","name", "description", "reference", "origin", "kg_price", "disponibility", "date", "category_id")
VALUES
(1, 'Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', 'Italie', 20.99, TRUE, '2024-01-21', 1),
(2, 'Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', 'Colombie', 18.75, TRUE, '2023-12-02', 2),
(3, 'Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 'Éthiopie', 22.50, TRUE, '2022-01-11', 3),
(4, 'Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '134009550', 'Brésil', 17.80, TRUE, '2024-06-03', 4),
(5, 'Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', 'Guatemala', 21.25, TRUE, '2022-10-12', 1),
(6, 'Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 'Kenya', 23.70, TRUE, '2023-05-21', 2),
(7, 'Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 'Indonésie', 19.95, TRUE, '2023-02-22', 1),
(8, 'Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '327302954', 'Costa Rica', 24.50, TRUE, '2024-03-08', 2),
(9, 'Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 'Vietnam', 16.75, TRUE, '2023-09-21', 5),
(10, 'Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 'Tanzanie', 26.80, TRUE,'2023-08-17', 3),
(11, 'Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', 'Jamaïque', 39.25, TRUE, '2023-11-11', 4),
(12, 'Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 'Rwanda', 21.90, TRUE, '2023-08-19', 3),
(13, 'Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 'Panama', 42.00, TRUE, '2023-07-09', 3),
(14, 'Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 'Pérou', 19.40, TRUE, '2023-02-28', 6),
(15, 'Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '958090105', 'Hawaï', 55.75, TRUE, '2023-06-04', 4),
(16, 'Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 'Nicaragua', 28.60, TRUE, '2022-12-31', 3);

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "firstname" VARCHAR(255) NOT NULL,
  "lastname" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO "users"("id","firstname", "lastname", "password", "email")
VALUES
(1, 'cedric', 'martin', 'azerty11', 'test@gmail.com');

CREATE TABLE IF NOT EXISTS "cart_items" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT,
  FOREIGN KEY("user_id") REFERENCES "users"("id"),
  "item_id" INT,
  FOREIGN KEY("item_id") REFERENCES "coffee"("id"),
  "quantity" INT DEFAULT 1
);