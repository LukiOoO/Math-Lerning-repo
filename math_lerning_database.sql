-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: math_learning
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add Token',6,'add_token'),(22,'Can change Token',6,'change_token'),(23,'Can delete Token',6,'delete_token'),(24,'Can view Token',6,'view_token'),(25,'Can add token',7,'add_tokenproxy'),(26,'Can change token',7,'change_tokenproxy'),(27,'Can delete token',7,'delete_tokenproxy'),(28,'Can view token',7,'view_tokenproxy'),(29,'Can add pictures',8,'add_pictures'),(30,'Can change pictures',8,'change_pictures'),(31,'Can delete pictures',8,'delete_pictures'),(32,'Can view pictures',8,'view_pictures'),(33,'Can add test model',9,'add_testmodel'),(34,'Can change test model',9,'change_testmodel'),(35,'Can delete test model',9,'delete_testmodel'),(36,'Can view test model',9,'view_testmodel'),(37,'Can add mathsite user',10,'add_mathsiteuser'),(38,'Can change mathsite user',10,'change_mathsiteuser'),(39,'Can delete mathsite user',10,'delete_mathsiteuser'),(40,'Can view mathsite user',10,'view_mathsiteuser');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authtoken_token`
--

DROP TABLE IF EXISTS `authtoken_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authtoken_token` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`key`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `authtoken_token_user_id_35299eff_fk_users_mathsiteuser_id` FOREIGN KEY (`user_id`) REFERENCES `users_mathsiteuser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authtoken_token`
--

LOCK TABLES `authtoken_token` WRITE;
/*!40000 ALTER TABLE `authtoken_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `authtoken_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_users_mathsiteuser_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_users_mathsiteuser_id` FOREIGN KEY (`user_id`) REFERENCES `users_mathsiteuser` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (99,'2023-03-04 13:46:35.865657','8','admin',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(100,'2023-03-04 13:47:01.505905','9','testuser1',1,'[{\"added\": {}}]',10,8),(101,'2023-03-04 13:47:04.742627','9','testuser1',2,'[]',10,8),(102,'2023-03-04 13:47:28.783071','10','testUser2',1,'[{\"added\": {}}]',10,8),(103,'2023-03-04 13:47:31.021384','10','testUser2',2,'[]',10,8),(104,'2023-03-04 13:47:57.254475','11','testuser3',1,'[{\"added\": {}}]',10,8),(105,'2023-03-04 13:47:59.433941','11','testuser3',2,'[]',10,8),(106,'2023-03-04 13:48:27.754498','12','testuer3',1,'[{\"added\": {}}]',10,8),(107,'2023-03-04 13:48:30.250756','12','testuer3',2,'[]',10,8),(108,'2023-03-04 13:48:49.419404','12','testuer4',2,'[{\"changed\": {\"fields\": [\"Nickname\", \"Slug\"]}}]',10,8),(109,'2023-03-04 13:49:13.038994','13','us5',1,'[{\"added\": {}}]',10,8),(110,'2023-03-04 13:49:15.606635','13','us5',2,'[]',10,8),(111,'2023-03-04 13:49:42.805824','14','h2',1,'[{\"added\": {}}]',10,8),(112,'2023-03-04 13:49:45.707654','14','h2',2,'[]',10,8),(113,'2023-03-04 13:50:13.808079','15','uu26',1,'[{\"added\": {}}]',10,8),(114,'2023-03-04 13:50:17.223107','15','uu26',2,'[]',10,8),(115,'2023-03-04 13:50:34.356136','16','xd2',1,'[{\"added\": {}}]',10,8),(116,'2023-03-04 13:50:36.867841','16','xd2',2,'[]',10,8),(117,'2023-03-04 13:50:53.764037','17','ho00',1,'[{\"added\": {}}]',10,8),(118,'2023-03-04 13:50:55.870964','17','ho00',2,'[]',10,8),(119,'2023-03-04 13:51:35.090457','18','Staffuser',1,'[{\"added\": {}}]',10,8),(120,'2023-03-04 13:51:37.732664','18','Staffuser',2,'[]',10,8),(121,'2023-03-04 13:51:51.306112','14','h2',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(122,'2023-03-04 13:51:56.563554','17','ho00',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(123,'2023-03-04 13:52:02.501834','18','Staffuser',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(124,'2023-03-04 13:52:09.100505','12','testuer4',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(125,'2023-03-04 13:52:13.488185','18','Staffuser',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(126,'2023-03-04 13:52:27.574348','9','testuser1',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(127,'2023-03-04 13:52:31.828821','10','testUser2',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(128,'2023-03-04 13:52:35.549609','11','testuser3',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(129,'2023-03-04 13:52:41.694621','13','us5',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(130,'2023-03-04 13:52:41.988479','15','uu26',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8),(131,'2023-03-04 13:52:42.296864','16','xd2',2,'[{\"changed\": {\"fields\": [\"Score\"]}}]',10,8);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(6,'authtoken','token'),(7,'authtoken','tokenproxy'),(4,'contenttypes','contenttype'),(8,'home','pictures'),(9,'math_tests','testmodel'),(5,'sessions','session'),(10,'users','mathsiteuser');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-02-16 14:57:46.955397'),(2,'contenttypes','0002_remove_content_type_name','2023-02-16 14:57:46.999417'),(3,'auth','0001_initial','2023-02-16 14:57:47.240087'),(4,'auth','0002_alter_permission_name_max_length','2023-02-16 14:57:47.293061'),(5,'auth','0003_alter_user_email_max_length','2023-02-16 14:57:47.301060'),(6,'auth','0004_alter_user_username_opts','2023-02-16 14:57:47.311059'),(7,'auth','0005_alter_user_last_login_null','2023-02-16 14:57:47.321060'),(8,'auth','0006_require_contenttypes_0002','2023-02-16 14:57:47.325060'),(9,'auth','0007_alter_validators_add_error_messages','2023-02-16 14:57:47.333060'),(10,'auth','0008_alter_user_username_max_length','2023-02-16 14:57:47.342059'),(11,'auth','0009_alter_user_last_name_max_length','2023-02-16 14:57:47.350060'),(12,'auth','0010_alter_group_name_max_length','2023-02-16 14:57:47.369062'),(13,'auth','0011_update_proxy_permissions','2023-02-16 14:57:47.379061'),(14,'auth','0012_alter_user_first_name_max_length','2023-02-16 14:57:47.386062'),(15,'users','0001_initial','2023-02-16 14:57:47.513061'),(16,'admin','0001_initial','2023-02-16 14:57:47.615060'),(17,'admin','0002_logentry_remove_auto_add','2023-02-16 14:57:47.623060'),(18,'admin','0003_logentry_add_action_flag_choices','2023-02-16 14:57:47.632059'),(19,'authtoken','0001_initial','2023-02-16 14:57:47.689060'),(20,'authtoken','0002_auto_20160226_1747','2023-02-16 14:57:47.713065'),(21,'authtoken','0003_tokenproxy','2023-02-16 14:57:47.718061'),(22,'home','0001_initial','2023-02-16 14:57:47.738061'),(23,'math_tests','0001_initial','2023-02-16 14:57:47.759062'),(24,'math_tests','0002_initial','2023-02-16 14:57:47.805060'),(25,'sessions','0001_initial','2023-02-16 14:57:47.834061'),(26,'math_tests','0003_testmodel_level','2023-02-17 14:12:39.291107');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('408d77oe61t1m5lrwn7gthgxo3oll1ri','.eJxVjDsOwjAQRO_iGlle_Mmakp4zWGt7jQPIkeKkQtydREoBxTTz3sxbBFqXGtbOcxizuAgUp98uUnpy20F-ULtPMk1tmccod0UetMvblPl1Pdy_g0q9bmtmsDoRWBwAzqSNQo9WeYhmCyAZKikV5VjbOPiCBJiVdY6K18AsPl_JRjd3:1pYSDQ:i8swxPSO2kUkmd5AS-djq8gIuPhqVT4QLuR3mxiRGxk','2023-03-18 13:46:24.486870');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_pictures`
--

DROP TABLE IF EXISTS `home_pictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_pictures` (
  `id` int NOT NULL,
  `image_field` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_pictures`
--

LOCK TABLES `home_pictures` WRITE;
/*!40000 ALTER TABLE `home_pictures` DISABLE KEYS */;
INSERT INTO `home_pictures` VALUES (15,'static/images/easy.png'),(16,'static/images/advanced.png'),(17,'static/images/hard.png');
/*!40000 ALTER TABLE `home_pictures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `math_tests_testmodel`
--

DROP TABLE IF EXISTS `math_tests_testmodel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `math_tests_testmodel` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `correct` int NOT NULL,
  `mistakes` int NOT NULL,
  `user_id` bigint NOT NULL,
  `level` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `math_tests_testmodel_user_id_91404b6d_fk_users_mathsiteuser_id` (`user_id`),
  CONSTRAINT `math_tests_testmodel_user_id_91404b6d_fk_users_mathsiteuser_id` FOREIGN KEY (`user_id`) REFERENCES `users_mathsiteuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=337 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `math_tests_testmodel`
--

LOCK TABLES `math_tests_testmodel` WRITE;
/*!40000 ALTER TABLE `math_tests_testmodel` DISABLE KEYS */;
/*!40000 ALTER TABLE `math_tests_testmodel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_mathsiteuser`
--

DROP TABLE IF EXISTS `users_mathsiteuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_mathsiteuser` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `last_login` datetime(6) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `score` int NOT NULL,
  `rating` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `staff` tinyint(1) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nickname` (`nickname`),
  KEY `users_mathsiteuser_slug_4e6c8e6f` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_mathsiteuser`
--

LOCK TABLES `users_mathsiteuser` WRITE;
/*!40000 ALTER TABLE `users_mathsiteuser` DISABLE KEYS */;
INSERT INTO `users_mathsiteuser` VALUES (8,'2023-03-04 13:46:24.190643','admin@admin.com','admin','pbkdf2_sha256$390000$KzxF5aau5eyg90rT0bPHwa$FuGPgnSCOQNOgAI9pzTAgJxAO+Wo2tfhDyq54lsNzR4=','admin',2147483647,'GM',1,1,1),(9,NULL,'a@a.com','testuser1','pbkdf2_sha256$390000$7mQM7EIwxKj3RfdeJ826WN$ICXf+mSzlp9j/6FczaWAqMVgC3HJtoIUY9+NIxOQcNw=','testuser1',100,'A',1,0,0),(10,NULL,'a2@a1.com','testUser2','pbkdf2_sha256$390000$PIhbCtwb7N8QesTLO8nIgu$bWI1A9JsUyjOLkSZaaAB8zJOM1/23BFeGxIQ9ktE2Vs=','testUser2',80,'B',1,0,0),(11,NULL,'h@h.com','testuser3','pbkdf2_sha256$390000$Fd1OCtlyWM5l6AU7o5Logj$+gLHrBsIztKzZ2fNHUOlLdWZ1lY3pFIIjBXk5vQwwrE=','testuser3',50,'B',1,0,0),(12,NULL,'b@b1.com','testuer4','pbkdf2_sha256$390000$r60uOpAKY8gnP0BSHH5PKn$wFMncuNbIQMfwlG4FLv8QS0v2D82HDHV/ZlSDOX2tUY=','testuer4',300,'M',1,0,0),(13,NULL,'use@s.com','us5','pbkdf2_sha256$390000$zQ5YofbVqTPk9hSPpE8gxv$dJ5Yk5v7fPs9bXXDzrCaFSJm3h8j3ZIqeHyfirKATi4=','us5',10,'B',1,0,0),(14,NULL,'tt@tt.com','h2','pbkdf2_sha256$390000$6PlbthYFdB62OMC9wi37X5$h0mMmf1a9A9yCgAEqLkwjTW4oz1OeHCbg0vEHhPAIzI=','h2',1000,'GM',1,0,0),(15,NULL,'hhh@hhh.com','uu26','pbkdf2_sha256$390000$t2VWS2nLuKTJQQQA4DJU5J$rWz7aeX5iunpQHGgYu/JU6l1cZ5fJTtJ3jT7WGcVgiY=','uu26',2,'B',1,0,0),(16,NULL,'aay@yyyasd.com','xd2','pbkdf2_sha256$390000$XSKDCnievpIgsBJD4KCGBe$5w47kbldRGxintgZd0NB2ObFIfkGhcy7nDBACfD7d/0=','xd2',3,'B',1,0,0),(17,NULL,'u@uu.pl','ho00','pbkdf2_sha256$390000$abcZ4FBlLPjZcv11VNOsXb$7k541dfbm4BZB+4pdM8x+JQS5RTV7buB/Z3aB2ajBvg=','ho00',600,'GM',1,0,0),(18,NULL,'staffUser@staffUser.com','Staffuser','pbkdf2_sha256$390000$sZcLAfNlB7xtDXHIJFjfI3$umAVstXmzyPu4OZoZm9z+ID0vrXk66NVqQUafCCgzH8=','Staffuser',200,'M',1,1,0);
/*!40000 ALTER TABLE `users_mathsiteuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_mathsiteuser_groups`
--

DROP TABLE IF EXISTS `users_mathsiteuser_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_mathsiteuser_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mathsiteuser_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_mathsiteuser_groups_mathsiteuser_id_group_id_4b0113c3_uniq` (`mathsiteuser_id`,`group_id`),
  KEY `users_mathsiteuser_groups_group_id_aa0f4897_fk_auth_group_id` (`group_id`),
  CONSTRAINT `users_mathsiteuser_g_mathsiteuser_id_6aad07d1_fk_users_mat` FOREIGN KEY (`mathsiteuser_id`) REFERENCES `users_mathsiteuser` (`id`),
  CONSTRAINT `users_mathsiteuser_groups_group_id_aa0f4897_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_mathsiteuser_groups`
--

LOCK TABLES `users_mathsiteuser_groups` WRITE;
/*!40000 ALTER TABLE `users_mathsiteuser_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_mathsiteuser_groups` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-04 15:35:14
