/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.3.15-MariaDB : Database - d39074_pwttest
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`d39074_pwttest` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `d39074_pwttest`;

/*Table structure for table `sales` */

DROP TABLE IF EXISTS `sales`;

CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) DEFAULT NULL,
  `sn` varchar(255) DEFAULT NULL,
  `buyer` varchar(255) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

/*Table structure for table `warranty` */

DROP TABLE IF EXISTS `warranty`;

CREATE TABLE `warranty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) DEFAULT NULL,
  `sn` varchar(255) DEFAULT NULL,
  `war_req_des` text DEFAULT NULL,
  `war_type` enum('Paid','Debt') DEFAULT NULL,
  `buyer` varchar(255) DEFAULT NULL,
  `contact_info` varchar(255) DEFAULT NULL,
  `rec_date` varchar(255) DEFAULT NULL,
  `rec_user` varchar(255) DEFAULT NULL,
  `ret_date` varchar(255) DEFAULT NULL,
  `war_res_des` text DEFAULT NULL,
  `service_code` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `invoice_flag` tinyint(1) DEFAULT NULL,
  `invoice_sent` tinyint(1) DEFAULT NULL,
  `deliv_date` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
