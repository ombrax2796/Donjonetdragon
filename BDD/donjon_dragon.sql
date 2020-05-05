-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 04 mai 2020 à 20:34
-- Version du serveur :  10.3.14-MariaDB
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `donjon&dragon`
--

-- --------------------------------------------------------

--
-- Structure de la table `armes`
--

DROP TABLE IF EXISTS `armes`;
CREATE TABLE IF NOT EXISTS `armes` (
  `nom` varchar(255) NOT NULL,
  `dégat` decimal(10,0) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `armes`
--

INSERT INTO `armes` (`nom`, `dégat`) VALUES
('Dague', '6'),
('Gourdin', '4'),
('Hachette', '6'),
('Massue', '8'),
('Coutille', '10'),
('Epée à deux main', '12'),
('Lance d\'arçon', '12'),
('Trident', '6'),
('Rapière', '8'),
('Arc long', '8');

-- --------------------------------------------------------

--
-- Structure de la table `armures`
--

DROP TABLE IF EXISTS `armures`;
CREATE TABLE IF NOT EXISTS `armures` (
  `nom` varchar(255) NOT NULL,
  `protection` decimal(10,0) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `armures`
--

INSERT INTO `armures` (`nom`, `protection`) VALUES
('Cuir', '11'),
('Cuir clouté', '12'),
('Ecailles', '14'),
('Chemise de maille', '13'),
('Demi-Plate', '15'),
('Cuirasse', '14'),
('Broigne', '14'),
('Cotte de maille', '16'),
('Clibanion', '17'),
('Harnois', '18');

-- --------------------------------------------------------

--
-- Structure de la table `monstres`
--

DROP TABLE IF EXISTS `monstres`;
CREATE TABLE IF NOT EXISTS `monstres` (
  `nom` varchar(255) NOT NULL,
  `vie` float NOT NULL,
  `atk` float NOT NULL,
  `faiblesse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `monstres`
--

INSERT INTO `monstres` (`nom`, `vie`, `atk`, `faiblesse`) VALUES
('Aboleth', 135, 26, 'Feu'),
('Ankylosaure', 68, 23, 'Foudre'),
('Basilic', 52, 19, 'Argent'),
('Chimère', 114, 23, 'Eau'),
('Chuul', 93, 23, 'Foudre'),
('Déva', 136, 22, 'Magie'),
('Diablotin', 10, 4, 'Argent'),
('Djinn', 161, 26, 'Eau'),
('Drider', 123, 19, 'Lumière'),
('Ettin', 85, 26, 'Lumière'),
('Feu follet', 22, 0, 'Aucune'),
('Géant des collines', 105, 26, 'Débile'),
('Glabrezu', 157, 25, 'Lumière'),
('Gobelin', 7, 7, 'Magie'),
('Goule', 22, 14, 'Lumière'),
('Hezrou', 136, 23, 'Argent'),
('Homonculus', 5, 1, 'Faible'),
('Kraken', 472, 40, 'Inconnu'),
('Lamie', 97, 19, 'Feu'),
('Liche', 135, 11, 'Argent'),
('Magmatique', 9, 5, 'Eau'),
('Manteleur', 78, 20, 'Lumière'),
('Merrow', 45, 22, 'Feu'),
('Mimique', 58, 20, 'Foudre'),
('Momie', 58, 19, 'Lumière'),
('Naga gardien', 127, 23, 'Immortel'),
('Nécrophage', 45, 17, 'Lumière'),
('Oni', 110, 23, 'Magie'),
('Oxydeur', 27, 14, 'Magie'),
('Pégase', 59, 22, 'Aucune'),
('Ptéranodon', 13, 13, 'Feu'),
('Quasit', 7, 2, 'Argent'),
('Rakshasa', 110, 16, 'Magie'),
('Roc', 248, 37, 'Foudre'),
('Sahuagin', 22, 14, 'Magie'),
('Salamandre', 90, 22, 'Eau'),
('Satyre', 31, 13, 'Argent'),
('Solar', 243, 34, 'Inconnu'),
('Succube', 66, 7, 'Argent'),
('Tarasque', 676, 40, 'Foudre'),
('Torve', 11, 19, 'Magie'),
('Traqueur invisible', 104, 19, 'Magie'),
('Troll', 84, 22, 'Feu'),
('Vampire', 144, 22, 'Argent'),
('Ver pourpre', 247, 37, 'Magie'),
('Wiverne', 110, 23, 'Magie'),
('Xorn', 73, 20, 'Magie'),
('Yéti', 51, 22, 'Feu'),
('Zombie', 32, 17, 'Magie'),
('Chien du trépas', 39, 17, 'Magie');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
