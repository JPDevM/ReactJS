-- https://dev.mysql.com/doc/refman/8.0/en/data-types.html
-- Tips: don't use FLOAT, use DECIMAL instead.
-- Tips: don't use BOOLEAN, use INTEGER DEFAULT 0.

-- Database
CREATE DATABASE subs_db;
USE subs_db;

-- Create CREATE tables without FK 
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(125) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `colorHexa` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;

-- Create CREATE tables with FK 
CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `isPopular` int(11) NOT NULL DEFAULT 0,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT 'no-image.png',
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT 0.00,
  `firstPayment` datetime DEFAULT NULL,
  `recurrency` varchar(255) DEFAULT NULL,
  `longDate` datetime DEFAULT NULL,
  `notification` int(11) DEFAULT NULL,
  `currency` varchar(255) DEFAULT 'eur',
  `style` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `promotions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `type` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `urlPath` varchar(255) DEFAULT 'no-image.png',
  `description` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;

