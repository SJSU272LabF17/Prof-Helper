-- MySQL dump 10.13  Distrib 5.7.19, for osx10.12 (x86_64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `fname` varchar(50) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `psuedo_name` varchar(256) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `starred` tinyint(1) DEFAULT NULL,
  `mime_type` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES ('APPROVED PROJECT PROPOSAL.pdf',2,'1508054225942',1,0,NULL),('11721.jpg',3,'1508093568550',3,0,NULL),('11721.jpg',4,'1508112813754',7,0,NULL),('AcroRdrDC_1701220093_MUI.dmg',5,'1508113778087',7,0,NULL),('anshit.jpg',6,'1508130090961',7,0,NULL);
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users1`
--

DROP TABLE IF EXISTS `users1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users1`
--

LOCK TABLES `users1` WRITE;
/*!40000 ALTER TABLE `users1` DISABLE KEYS */;
INSERT INTO `users1` VALUES (1,'ks','$2a$10$jJS9xaEWeipps7R4bYe1j.CXloV9LDGPjke7QF7Iu9sKYbttXYoBK','ks@gmail.com'),(2,'akshay','$2a$10$vimCAdLvSL4BMcIoe1FPuuFDBC7hvLt1QLkh9CrnnL1yUXfvcEmWC','as@gmail.com'),(3,'Anshit','$2a$10$qeDQX5uRlKCI/V/EvSAg/OAVMo2Art5vuW2rYCIrnRef2cVtVnmSy','ds@gmail.com'),(4,'anu','$2a$10$K9zCpU6cLcUXw5k8tCUY4exx2Z.Mv8WMWC9RrfcIqvlSVtBqlugiC','anu@gmail.com'),(5,'anu','$2a$10$3FeBBdcgf7xvSEKIGx.XC.E.W2YvES4CNduWvCADL.krYzsWNUSqa','anuradha@gmail.com'),(6,'raghav','1234','rs@gmail.com'),(7,'anushree','$2a$10$lvPfcnOjAi6b90/UzbpfteQDxZPSxC/Bz9Pj.Bz6US6FPR1Psy6yS','aw@gmail.com');
/*!40000 ALTER TABLE `users1` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-15 22:41:59
