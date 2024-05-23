create database vehiclrental;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blacklist_token`
--

DROP TABLE IF EXISTS `blacklist_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blacklist_token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(476) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blacklist_token`
--

LOCK TABLES `blacklist_token` WRITE;
/*!40000 ALTER TABLE `blacklist_token` DISABLE KEYS */;
INSERT INTO `blacklist_token` VALUES (51,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgsIm5hbWUiOiJIYXpwaSBOdXJhZmdhbiIsImVtYWlsIjoiaGF6dmludXJhZmdhbkBnbWFpbC5jb20iLCJpbWFnZSI6bnVsbCwicm9sZXNfaWQiOjIsImlhdCI6MTY0ODY2NzIyMCwiZXhwIjoxNjQ4NzAzMjIwLCJpc3MiOiJIYXoifQ.kojkm_OpDMO6KxWP-Pc9sqtAQrXJhE3qyyLsCZ5Vbd4');
/*!40000 ALTER TABLE `blacklist_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genders`
--

DROP TABLE IF EXISTS `genders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genders`
--

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO `genders` VALUES (1,'male'),(2,'female'),(3,'confidential');
/*!40000 ALTER TABLE `genders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historys`
--

DROP TABLE IF EXISTS `historys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `vehicles_id` int NOT NULL,
  `owner_id` int DEFAULT NULL,
  `status_id` int NOT NULL,
  `date` varchar(45) DEFAULT NULL,
  `payment` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `testimony` mediumtext,
  `rating` int DEFAULT NULL,
  `create_at` timestamp(1) NULL DEFAULT CURRENT_TIMESTAMP(1) ON UPDATE CURRENT_TIMESTAMP(1),
  `update_at` timestamp(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vehicle_key_idx` (`vehicles_id`),
  KEY `status_key_idx` (`status_id`),
  KEY `user_key_idx` (`users_id`),
  CONSTRAINT `status_id` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  CONSTRAINT `vehicle_id` FOREIGN KEY (`vehicles_id`) REFERENCES `vehicles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historys`
--

LOCK TABLES `historys` WRITE;
/*!40000 ALTER TABLE `historys` DISABLE KEYS */;
/*!40000 ALTER TABLE `historys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_fk_idx` (`user_id`),
  CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (33,'Jakarta',68),(34,'bandung',68),(35,'yogyakarta',68);
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user'),(3,'owner');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Has been returned'),(2,'Not been returned');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'car'),(2,'motorbike'),(3,'bike');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(150) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `active_year` year DEFAULT NULL,
  `gender_id` int NOT NULL,
  `address` varchar(150) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `roles_id` int NOT NULL,
  `pin_verify` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `pin_reset_pass` int DEFAULT NULL,
  `create_at` timestamp(1) NULL DEFAULT CURRENT_TIMESTAMP(1) ON UPDATE CURRENT_TIMESTAMP(1),
  `update_at` timestamp(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gender_id_idx` (`gender_id`),
  KEY `roles_id_idx` (`roles_id`),
  CONSTRAINT `gender_id` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`id`),
  CONSTRAINT `roles_id` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (68,'Hazpi Nurafgan','hazvinurafgan@gmail.com','$2b$10$3G/sJ/6wx4h0vIxmb7C4K./tTfFXBfVkPwZjAYcYiTFcxwhq7N5cu',NULL,'',2022,3,NULL,NULL,3,NULL,'active',NULL,'2022-03-30 21:32:52.4',NULL),(69,'badut','badut@mail.com','$2b$10$TVONg4oFvJYA/tRBPnhmluIxuvANrra6PG3iC.pYQhVBXGv64JOpi',NULL,'',2022,3,NULL,NULL,2,291736,'pending',NULL,'2022-03-30 19:28:18.3',NULL),(70,'hendra','mahendraiqbal001@gmail.com','$2b$10$wZkHYivFMoS4cOk0JFZoZecplRHvu47ZE5GghfNMbZntzGoaUijzy',NULL,'',2022,3,NULL,NULL,2,NULL,'active',NULL,'2022-03-30 19:30:14.9',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` longtext,
  `locations_id` int NOT NULL,
  `types_id` int NOT NULL,
  `stock` int NOT NULL,
  `price` int NOT NULL,
  `user_id` int NOT NULL,
  `create_at` timestamp(1) NULL DEFAULT CURRENT_TIMESTAMP(1) ON UPDATE CURRENT_TIMESTAMP(1),
  `update_at` timestamp(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `types_fk` (`types_id`),
  CONSTRAINT `types_id` FOREIGN KEY (`types_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=368 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (342,'Chevrolet Spark','ini rental mobil',33,1,5,320000,68,'2022-03-30 20:36:56.5',NULL),(343,'Daihatsu Sirion','ini rental mobil',33,1,5,1220000,68,'2022-03-30 20:38:30.7',NULL),(344,'Honda Accord','ini rental mobil',33,1,5,1220000,68,'2022-03-30 20:39:01.5',NULL),(346,'Mazda 3 Sedan','ini rental mobil',34,1,5,1220000,68,'2022-03-30 20:40:09.5',NULL),(347,'Mercedes-Benz A 200 Hatchback','ini rental mobil',34,1,5,1220000,68,'2022-03-30 20:40:46.1',NULL),(348,'Mithubishi Xpander','ini rental mobil',35,1,5,1220000,68,'2022-03-30 20:41:18.0',NULL),(349,'Nissan X-Trail','ini rental mobil',35,1,5,1220000,68,'2022-03-30 20:41:52.4',NULL),(350,'Suzuki Baleno','ini rental mobil',35,1,3,1220000,68,'2022-03-30 20:42:17.8',NULL),(351,'Toyota Rush','ini rental mobil',35,1,3,1220000,68,'2022-03-30 20:43:05.0',NULL),(352,'Honda Beat','ini rental motorbike',33,2,3,1220000,68,'2022-03-30 20:43:52.5',NULL),(353,'Honda CB150R','ini rental motorbike',33,2,3,1220000,68,'2022-03-30 20:44:19.0',NULL),(354,'Honda CRF150L','ini rental motorbike',33,2,3,1220000,68,'2022-03-30 20:44:41.5',NULL),(355,'Honda Genio','ini rental motorbike',34,2,3,1220000,68,'2022-03-30 20:45:09.7',NULL),(356,'Kawasaki Ninja 250','ini rental motorbike',34,2,3,1220000,68,'2022-03-30 20:45:33.8',NULL),(357,'Kawasaki Ninja ZX-25R','ini rental motorbike',35,2,3,1220000,68,'2022-03-30 20:46:00.0',NULL),(358,'Royal Enfield Classic 350','ini rental motorbike',35,2,3,1220000,68,'2022-03-30 20:46:39.6',NULL),(359,'Vespa Sprint','ini rental motorbike',35,2,3,1220000,68,'2022-03-30 20:47:03.3',NULL),(360,'Yamaha MX King','ini rental motorbike',33,2,3,1220000,68,'2022-03-30 20:47:25.3',NULL),(361,'Yamaha YZF R15','ini rental motorbike',33,2,3,1220000,68,'2022-03-30 20:47:48.4',NULL),(362,'Yamaha YZF R15','ini rental bike',33,3,1,1220000,68,'2022-03-30 20:54:00.4',NULL),(363,'Brompton S6R','ini rental bike',33,3,1,1220000,68,'2022-03-30 20:54:56.0',NULL),(364,'Brompton S6R','ini rental bike',33,3,1,1220000,68,'2022-03-30 20:55:18.0',NULL),(365,'fixie','ini rental bike',34,3,1,1220000,68,'2022-03-30 20:55:46.0',NULL),(366,'Lankeleisi Sepeda Elektrik Lipat Elite','ini rental bike',34,3,1,1220000,68,'2022-03-30 20:56:08.8',NULL),(367,'Sepeda Gunung MTB','ini rental bike',35,3,1,1220000,68,'2022-03-30 20:56:38.0',NULL);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles_img`
--

DROP TABLE IF EXISTS `vehicles_img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles_img` (
  `id` int NOT NULL AUTO_INCREMENT,
  `images` varchar(255) NOT NULL,
  `vehicle_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `create_at` timestamp(1) NULL DEFAULT CURRENT_TIMESTAMP(1) ON UPDATE CURRENT_TIMESTAMP(1),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=358 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles_img`
--

LOCK TABLES `vehicles_img` WRITE;
/*!40000 ALTER TABLE `vehicles_img` DISABLE KEYS */;
INSERT INTO `vehicles_img` VALUES (285,'images-1648672615946.jpg',342,68,'2022-03-30 20:36:56.5'),(286,'images-1648672616219.jpg',342,68,'2022-03-30 20:36:56.5'),(287,'images-1648672616493.jpg',342,68,'2022-03-30 20:36:56.5'),(288,'images-1648672710144.jpg',343,68,'2022-03-30 20:38:30.7'),(289,'images-1648672710153.jpg',343,68,'2022-03-30 20:38:30.7'),(290,'images-1648672710424.jpg',343,68,'2022-03-30 20:38:30.7'),(291,'images-1648672741297.jpg',344,68,'2022-03-30 20:39:01.5'),(292,'images-1648672741379.jpg',344,68,'2022-03-30 20:39:01.5'),(293,'images-1648672741400.jpg',344,68,'2022-03-30 20:39:01.5'),(297,'images-1648672809201.jpg',346,68,'2022-03-30 20:40:09.5'),(298,'images-1648672809224.jpg',346,68,'2022-03-30 20:40:09.5'),(299,'images-1648672809491.jpg',346,68,'2022-03-30 20:40:09.5'),(300,'images-1648672845873.jpg',347,68,'2022-03-30 20:40:46.1'),(301,'images-1648672845896.jpg',347,68,'2022-03-30 20:40:46.1'),(302,'images-1648672845925.jpg',347,68,'2022-03-30 20:40:46.1'),(303,'images-1648672877191.jpg',348,68,'2022-03-30 20:41:18.0'),(304,'images-1648672877756.jpg',348,68,'2022-03-30 20:41:18.0'),(305,'images-1648672877863.jpg',348,68,'2022-03-30 20:41:18.0'),(306,'images-1648672912139.jpg',349,68,'2022-03-30 20:41:52.4'),(307,'images-1648672912200.jpg',349,68,'2022-03-30 20:41:52.4'),(308,'images-1648672912219.jpg',349,68,'2022-03-30 20:41:52.4'),(309,'images-1648672937544.jpg',350,68,'2022-03-30 20:42:17.8'),(310,'images-1648672937581.jpg',350,68,'2022-03-30 20:42:17.8'),(311,'images-1648672937607.jpg',350,68,'2022-03-30 20:42:17.8'),(312,'images-1648672984946.png',351,68,'2022-03-30 20:43:05.0'),(313,'images-1648672985041.png',351,68,'2022-03-30 20:43:05.0'),(314,'images-1648672985078.jpg',351,68,'2022-03-30 20:43:05.0'),(315,'images-1648673032247.jpg',352,68,'2022-03-30 20:43:52.5'),(316,'images-1648673032295.jpg',352,68,'2022-03-30 20:43:52.5'),(317,'images-1648673032326.jpg',352,68,'2022-03-30 20:43:52.5'),(318,'images-1648673058763.png',353,68,'2022-03-30 20:44:19.0'),(319,'images-1648673058824.jpg',353,68,'2022-03-30 20:44:19.0'),(320,'images-1648673058843.jpg',353,68,'2022-03-30 20:44:19.0'),(321,'images-1648673081470.jpg',354,68,'2022-03-30 20:44:41.5'),(322,'images-1648673081500.jpg',354,68,'2022-03-30 20:44:41.5'),(323,'images-1648673081511.jpg',354,68,'2022-03-30 20:44:41.5'),(324,'images-1648673109534.jpg',355,68,'2022-03-30 20:45:09.8'),(325,'images-1648673109556.jpg',355,68,'2022-03-30 20:45:09.8'),(326,'images-1648673109570.jpg',355,68,'2022-03-30 20:45:09.8'),(327,'images-1648673133564.jpg',356,68,'2022-03-30 20:45:33.8'),(328,'images-1648673133595.jpg',356,68,'2022-03-30 20:45:33.8'),(329,'images-1648673133609.jpg',356,68,'2022-03-30 20:45:33.8'),(330,'images-1648673159793.jpg',357,68,'2022-03-30 20:46:00.0'),(331,'images-1648673159815.jpg',357,68,'2022-03-30 20:46:00.0'),(332,'images-1648673159830.jpg',357,68,'2022-03-30 20:46:00.0'),(333,'images-1648673199398.jpg',358,68,'2022-03-30 20:46:39.6'),(334,'images-1648673199448.jpg',358,68,'2022-03-30 20:46:39.6'),(335,'images-1648673199467.jpg',358,68,'2022-03-30 20:46:39.6'),(336,'images-1648673223052.jpg',359,68,'2022-03-30 20:47:03.3'),(337,'images-1648673223119.jpg',359,68,'2022-03-30 20:47:03.3'),(338,'images-1648673223132.jpg',359,68,'2022-03-30 20:47:03.3'),(339,'images-1648673245089.jpg',360,68,'2022-03-30 20:47:25.3'),(340,'images-1648673245104.jpg',360,68,'2022-03-30 20:47:25.3'),(341,'images-1648673245158.jpg',360,68,'2022-03-30 20:47:25.3'),(342,'images-1648673268140.jpg',361,68,'2022-03-30 20:47:48.4'),(343,'images-1648673268159.jpg',361,68,'2022-03-30 20:47:48.4'),(344,'images-1648673268251.jpg',361,68,'2022-03-30 20:47:48.4'),(345,'images-1648673640168.jpg',362,68,'2022-03-30 20:54:00.4'),(346,'images-1648673695825.jpg',363,68,'2022-03-30 20:54:56.0'),(347,'images-1648673717246.jpg',364,68,'2022-03-30 20:55:18.0'),(348,'images-1648673717804.jpg',364,68,'2022-03-30 20:55:18.0'),(349,'images-1648673743893.jpg',365,68,'2022-03-30 20:55:46.0'),(350,'images-1648673743960.jpg',365,68,'2022-03-30 20:55:46.0'),(351,'images-1648673745751.jpg',365,68,'2022-03-30 20:55:46.0'),(352,'images-1648673768820.jpg',366,68,'2022-03-30 20:56:08.8'),(353,'images-1648673768864.jpg',366,68,'2022-03-30 20:56:08.8'),(354,'images-1648673768881.jpeg',366,68,'2022-03-30 20:56:08.8'),(355,'images-1648673796606.jpg',367,68,'2022-03-30 20:56:38.0'),(356,'images-1648673797762.jpg',367,68,'2022-03-30 20:56:38.0'),(357,'images-1648673797807.jpg',367,68,'2022-03-30 20:56:38.0');
/*!40000 ALTER TABLE `vehicles_img` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-31  4:40:47
