-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2024 at 06:44 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drug-management-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `depos`
--

CREATE TABLE `depos` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `depos`
--

INSERT INTO `depos` (`id`, `name`) VALUES
(1, 'Gudang Farmasi'),
(2, 'Farmasi Rawat Jalan'),
(3, 'Farmasi Rawat Inap'),
(4, 'Farmasi IGD');

-- --------------------------------------------------------

--
-- Table structure for table `drugs`
--

CREATE TABLE `drugs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drugs`
--

INSERT INTO `drugs` (`id`, `name`, `unit`, `price`) VALUES
(1, 'AMOXSAN CAPS 500 MG (R)', 'CAPSUL', 3020),
(3, 'ZYPRAZ TAB 0.5 MG (Alprazolam)', 'TABLET', 2404),
(5, 'ZYPRAZ TAB 0.25 MG (Alprazolam)', 'TABLET', 1212),
(7, 'ZYLORIC TAB 300 MG (Allopurinol)', 'TABLET', 4854),
(9, 'ZYLORIC TAB 100 MG (Allopurinol) ', 'TABLET', 2680),
(12, 'MIOZIDINE MR Tab 35 mg (Trimetazidine) 30\'s', 'TABLET', 1754),
(13, 'ZUMAFIB CAPS 300 MG (Fenofibrate)', 'CAPSUL', 9735),
(14, 'ZUMAFIB CAPS 100 MG (Fenofibrate)', 'CAPSUL', 1848),
(16, 'NUFAPREG TAB (prometazine) ', 'TABLET', 2860),
(18, 'APTOR Tab 100 mg (Acetosal) 100\'s', 'TABLET', 300),
(21, 'NUTRIBREAST TAB ', 'TABLET', 7799),
(26, 'EFFIENT Tablet 5 mg (Prasugrel HCL) 16\'s', 'TABLET', 3960),
(31, 'NUTRIFLAM TAB 30\'s', 'TABLET', 12500),
(32, 'ZOLOFT FC TAB 50 MG (Sertraline)', 'TABLET', 17424),
(33, 'KOLKATRIOL CAPS 0.25 mcg (Calcitriol) (*)', 'CAPSUL', 5982),
(39, 'KOLKATRIOL FORTE CAPS 0.5 mcg (Calcitriol) (*)', 'CAPSUL', 10678),
(43, 'FLUOXETIN Tab 20 mg 30\'s', 'TABLET', 447),
(44, 'ZOFREDAL TAB 2 MG (Risperidone)', 'TABLET', 5691),
(47, 'ZOFREDAL TAB 1 MG (Risperidone)', 'TABLET', 3872),
(49, 'KSR TAB 600 MG ( AJII )', 'TABLET', 2000),
(52, 'KSR Tab 600 mg (Potassium Chloride) 100\'s', 'TABLET', 3480),
(54, 'KSR Tab 600 mg \"JKN\" (Potassium Chloride) 100\'s', 'TABLET', 1842),
(56, 'ZITHROMAX TAB 500 MG (Azitromycin) 3\'s', 'TABLET', 78873),
(63, 'OBIMIN AF TAB (R)', 'TABLET', 825),
(64, 'OBIPLUZ CAPS', 'CAPSUL', 3013),
(65, 'KUTOIN CAPS 100 MG ', 'CAPSUL', 1075),
(70, 'ziNNAT TAB 500 MG (Cefuroxime)', 'TABLET', 9360),
(78, 'ZINC TAB 20 MG ', 'TABLET', 470),
(80, 'L BIO SACHET 30\'s', 'SACHET', 7750),
(82, 'ZIBRAMAX TAB 500 MG (Azitromycin)', 'TABLET', 23018),
(83, 'OCULEX CAPS', 'CAPSUL', 3795),
(88, 'LACBON TAB (Lactobacillus)', 'TABLET', 1430),
(90, 'OCUSON TAB ( Betamethasone, Dexchlorpheniramin)', 'TABLET', 1200),
(92, 'ODACE TAB (lisinopril) (R)', 'TABLET', 3036),
(96, 'OFLOXACIN TAB 200 MG (Ofloxacin)', 'TABLET', 590),
(98, 'OFLOXACIN TAB 400 MG (Ofloxacin)', 'TABLET', 793),
(100, 'ZEMYC CAPS 150 MG (Fluconazole)', 'CAPSUL', 48620),
(102, 'ZEGAVITE Tablet 60\'s', 'TABLET', 4500),
(104, 'LACTA-MAM TAB ', 'TABLET', 3000),
(105, 'ZEGASE TAB', 'TABLET', 2300),
(106, 'LACTO B  1 gr Sachet 40\'s', 'SACHET', 6375),
(107, 'OLANDOZ TAB 5 MG (Olanzapine) (jamaah)', 'TABLET', 16940),
(108, 'FLUNARIZIN Tablet 10 mg', 'TABLET', 13200),
(110, 'OLANDOZ TAB 5 MG (Olanzapine) ', 'TABLET', 5864),
(116, 'OLMETEC TAB 20 MG (Olmesartan)', 'TABLET', 10348),
(120, 'OMEGA 3  CAPS', 'CAPSUL', 1317),
(121, 'OMEGA H3 CAPS ', 'CAPSUL', 4034),
(122, 'ZALDIAR TAB (Paracetamo, Tramadol)', 'TABLET', 9450),
(125, 'OMEPRAZOLE CAPS 20 MG', 'CAPSUL', 466),
(136, 'XELODA Tab 500 mg (Capecitabine)', 'TABLET', 42652),
(137, 'XELODA TAB 500 MG (Capecitabine) (JKN)', 'TABLET', 31000),
(138, 'XARELTO TAB 15 MG (Rivaroxaban)', 'TABLET', 27500),
(139, 'XARELTO TAB 10 mg (Rivaroxaban) 10\'s', 'TABLET', 25779),
(140, 'XANAX TAB 1 MG (Alprazolam)', 'TABLET', 4325),
(141, 'XANAX TAB 0,5 MG (Alprazolam) ', 'TABLET', 2632),
(142, 'XANAX TAB 0,25 MG (Alprazolam)', 'TABLET', 1947),
(156, 'EUTHYROX TAB 100 MCG (Levothyroxine Na)', 'TABLET', 2919),
(157, 'EUTHYROX TAB 100 MCG (Levothyroxine Na) (JKN)', 'TABLET', 975),
(162, 'EVIPROSTAT TAB', 'TABLET', 1320),
(169, '3 TC- HBV TAB 100 MG', 'TABLET', 15540),
(172, 'OMNICEF CAPS (R)', 'CAPSUL', 12834),
(175, 'VOSTRIN CAPS 300 MG (Erdostein) ', 'CAPSUL', 3590),
(181, 'EXFORGE TAB 5/160 MG (Valsartan, Amlodipine) ', 'TABLET', 12957),
(185, 'EXFORGE TAB 5/80 MG (Valsartan, Amlodipine) 28\'s', 'TABLET', 12260),
(187, 'OMZ CAPS 20 MG (Omeprazole) 30\'s', 'CAPSUL', 11667),
(188, 'vomiTROL TAB 10 MG (Metoclopramide) ', 'TABLET', 495),
(195, 'ONDANSETRON TAB 8 MG (Ondansetron)', 'TABLET', 1150),
(196, 'VOMITAS TAB 10 MG (Domperidone) ', 'TABLET', 3392),
(202, 'ABILIFY TAB 10 MG (Aripiprazole)', 'TABLET', 46904),
(204, 'VOMITAS FDT TAB 10 MG (Domperidone)', 'TABLET', 3885),
(205, 'ONDANSETRON TAB 4 MG (Ondansetron )', 'TABLET', 700),
(207, 'ABILIFY TAB 5 MG (Aripiprazole)', 'TABLET', 25797),
(208, 'VOMETA TAB 10 MG (Domperidone) ', 'TABLET', 2475),
(212, 'ABIXA TAB 10 MG  (R)', 'TABLET', 25929),
(213, 'VOMETA FT TAB 10 MG (Domperidone)', 'TABLET', 4200),
(219, 'OPTILET M (R)', 'TABLET', 2349),
(220, 'OPTIMAX TAB 30\'s', 'TABLET', 6167),
(221, 'LAMESON TAB 16 MG (Methylprenisolone) 100\'s', 'TABLET', 10000),
(222, 'OPTIMAX FOR G TAB', 'TABLET', 8151),
(225, 'LAMESON TAB 4 MG (Methylprenisolone) 100\'s', 'TABLET', 4250),
(226, 'VOMERIN TAB 10 MG (Domperidone)', 'TABLET', 2992),
(227, 'ORALIT  SACHET', 'BOX', 346),
(228, 'ACARBOSE TAB 100 mg 100\'s (*)', 'TABLET', 1738),
(229, 'ACARBOSE TAB 50 MG (*)', 'TABLET', 1078),
(231, 'OREZINC SACHET (zinc)', 'SACHET', 1056),
(232, 'EYEVIT TAB', 'TABLET', 4070),
(233, 'LAMESON TAB 8 MG (Methylprenisolone) 100\'s', 'TABLET', 7000),
(237, 'OSCAL CAPS 0,25 MG (AJII) ', 'CAPSUL', 3000),
(240, 'OScal Caps 0.25 mcg (Calcitriol)', 'CAPSUL', 7000),
(242, 'LEVETIRACETAM Tablet 500 mg', 'TABLET', 8434),
(243, 'VOMCERAN TAB 8 MG (Ondansentron)', 'TABLET', 19800),
(244, 'LANAVEN CAPS ', 'CAPSUL', 4620),
(245, 'OSFIT DHA PLATINUM Tab 30\'s', 'TABLET', 5500),
(246, 'VOMCERAN TAB 4 MG (Ondansentron) ', 'TABLET', 15000),
(248, 'OSFIT TAB', 'TABLET', 1283),
(250, 'LEVETIRACETAM Tab 250 mg 30\'s', 'TABLET', 23615),
(251, 'ACETOSAL TAB 100 MG', 'TABLET', 116),
(252, 'LANAVISION CAPS (R)', 'CAPSUL', 3300),
(254, 'OSKADON ', 'TABLET', 300),
(256, 'OSSOPAN TAB 200 MG ', 'TABLET', 935),
(258, 'OSSOPAN TAB 800 MG ', 'TABLET', 4150),
(264, 'LANCID Caps 30 mg (Lansoprazole) 20\'s ', 'CAPSUL', 19250),
(265, 'LANCOLIN TAB 500 MG (Citicholine) (R)', 'TABLET', 8443),
(267, 'VOLTAREN SR TAB 75 MG  (Na diklofenak)', 'TABLET', 8304),
(268, 'VOLTAREN TAB 50 MG (Na diklofenak)', 'TABLET', 6432),
(269, 'VOLTAREN TAB 25 MG (Na diklofenak)', 'TABLET', 3314),
(272, 'VOLTADEX TAB 50 MG (Na diklofenak)', 'TABLET', 500),
(276, 'VITACIMIN TAB (Vit C)', 'TABLET', 561),
(281, 'VITAMIN K TAB 10 MG ', 'TABLET', 689),
(285, 'VITAMIN C TAB IPI', 'TABLET', 117),
(287, 'VITAMIN C TAB 50 MG ', 'TABLET', 38),
(288, 'VITAMIN C TAB 100 MG ', 'TABLET', 170),
(292, 'VITAMIN B6 TAB 10 MG (*)', 'TABLET', 144),
(294, 'VITAMIN B12 TAB - IPI / Botol', 'BOTOL', 2050),
(295, 'VITAMIN B12 TAB (*)', 'TABLET', 89),
(296, 'VITAMIN B1 TAB - IPI/ Botol', 'BOTOL', 2889),
(298, 'VITAMIN B1 TAB 50 MG (*)', 'TABLET', 183),
(300, 'VITAMIN B COMPLEK TAB', 'TABLET', 182),
(302, 'VITAMIN B COMPLEK TAB - IPI / Botol', 'BOTOL', 3275),
(303, 'VITAMIN A TAB 6000 IU', 'TABLET', 356),
(304, 'VITAMIN A TAB 200.000 IU', 'TABLET', 420),
(305, 'VITAMIN A TAB 100,000 IU ', 'TABLET', 130),
(309, 'OSSOVIT TAB', 'TABLET', 4200),
(310, 'OSTE FORTE TAB', 'TABLET', 6180),
(311, 'OSTE OD EFF (R)', 'TABLET', 79008),
(314, 'OSTE TAB', 'TABLET', 3358),
(315, 'OSTELOX TAB 7.5 MG (R)', 'TABLET', 2481),
(316, 'VIPALBUMIN CAPS', 'CAPSUL', 6667),
(317, 'OSTELOX TAB 7.5 MG (R)', 'TABLET', 2481),
(318, 'VIOSTIN DS TAB (Glucosamin,chondroitin)', 'TABLET', 5598),
(319, 'VIOSTIN - X  CAPS ', 'CAPSUL', 4909),
(320, 'OSTEOCAL PLUS TAB (Calcium Carbonate 1.250 mg / 500 mg)', 'TABLET', 1100),
(321, 'PRO TB 3 Kids (Rifampicin 75 ,  INH 50, Pyrazinamid 150) 28\'s', 'TABLET', 203775),
(322, 'OSTEOCAL TAB (Calcium Carbonate) isi 72\'s', 'TABLET', 867),
(325, 'OSTOBON SACHET (R)', 'SACHET', 5500),
(327, 'LANPRACID CAPS 30 MG (Lansoprazole) ', 'CAPSUL', 10700),
(329, 'LANSOPRAZOLE CAPS 30 MG (AJII)', 'CAPSUL', 1229),
(330, 'VIFERRON TAB (R)', 'TABLET', 317),
(335, 'lapiBAL CAPS 250 McG (Mecobalamin) ', 'CAPSUL', 1200),
(336, 'lapiBAL CAPS 500 McG (Mecobalamin) 100\'s', 'CAPSUL', 2500),
(338, 'lapiCEF CAPS 500 MG (Cefadroxil) ', 'CAPSUL', 10500),
(346, 'lapiFED TAB (Triprolidine HCL, Pseudoephedrine HCL)', 'TABLET', 2750),
(348, 'lapiFLOX TAB 500 MG (Ciprofloxacin) ', 'TABLET', 12000),
(349, 'VIBRAMYCIN CAPS 100 MG (Doxyxicline)', 'CAPSUL', 11950),
(350, 'lapiSTAN CAPS 500 MG (Asam mefenamat) ', 'TABLET', 1400),
(352, 'VIAGRA TAB 50 MG (Sildenafil Cytrate)', 'TABLET', 110376),
(353, 'LAPRAZ CAPS 30 MG (Lansoprazole) ', 'CAPSUL', 11120),
(354, 'VIAGRA TAB 100 MG (Sildenafil Cytrate) ', 'TABLET', 128168),
(360, 'LASAL TAB 2 MG (Salbutamol) ', 'TABLET', 950),
(361, 'VESTEIN CAPS 300 mg (Erdostein) 20\'s ', 'CAPSUL', 6050),
(364, 'LASIX TAB 40 MG (Furosemide) ', 'TABLET', 5398),
(365, 'VESICARE Tab 10 mg (Solifenacin Succinate) 30\'s', 'TABLET', 18078),
(367, 'VESICARE Tab 5 mg (Solifenacin Succinate) 30\'s', 'TABLET', 21069),
(372, 'VERMOX TAB 500 MG (Mebendazole)', 'TABLET', 19475),
(374, 'VITANORM TAB', 'TABLET', 3388),
(375, 'LESICHOL Caps 300 mg 60\'s', 'CAPSUL', 12917),
(376, 'VERAPAMIL TAB 80 MG (*)', 'TABLET', 436),
(377, 'LESICHOL Caps 600 mg 60\'s', 'CAPSUL', 18833),
(380, 'LETONAL TAB 100 MG (Spironolactone) ', 'TABLET', 3465),
(382, 'LETONAL TAB 25 MG (Spironolactone) ', 'TABLET', 1500),
(391, 'VENOSMIL CAP 200 MG (Hydrosmin)', 'CAPSUL', 10000),
(399, 'CERINI TAB (Cetirizine) ', 'TABLET', 2789),
(403, 'CETAFLOXO TAB 500 MG (Ciprofloxacin)', 'TABLET', 12210),
(404, 'LEVOCIN TAB 500 MG (Levofloxacin) ', 'TABLET', 36900),
(407, 'LEVOFLOXACIN TAB 500 MG ', 'TABLET', 1049),
(408, 'CETINAL TAB 10 MG (Cetirizine) ', 'TABLET', 4579),
(409, 'CETIRIZINE TAB 10 MG ', 'TABLET', 350),
(410, 'LEVOPAR TAB (Levodopa,Benserazide HCL) ', 'TABLET', 4400),
(411, 'LEVOPAR TAB (Levodopa, Benserazide HCL) (JKN)', 'TABLET', 936),
(412, 'CHLORamex CAPS 500 MG (Chloramphenicol) ', 'CAPSUL', 1430),
(415, 'CHLORAMPENICHOL CAPS 250 MG (R)', 'CAPSUL', 151),
(419, 'CHLORamphenicol CAPS 250 MG ', 'CAPSUL', 260),
(421, 'OSSORAL CAPS 200 MG', 'CAPSUL', 866),
(423, 'LINCOMYCIN CAPS 500 MG ', 'CAPSUL', 1473),
(425, 'OSSOVIT TAB (R)', 'TABLET', 2945),
(432, 'LIORESAL TAB 10 MG (Blacofen) ', 'TABLET', 9400),
(433, 'CHLORPROMAZIN TAB 100 MG (*) ', 'TABLET', 285),
(435, 'LIPANTHYL CAPS 100 MG ', 'CAPSUL', 7376),
(436, 'CHOLESPAR TAB 10 MG (Pravastatin) ', 'TABLET', 17188),
(438, 'CHOLESTAT TAB 10 MG (Simvastatin) ', 'TABLET', 3561),
(439, 'VENARON CAPS 300 MG (Sophora japonica)', 'CAPSUL', 2600),
(440, 'LIPANTHYL PENTA TAB 145 MG (Fenofibrat) ', 'TABLET', 20920),
(441, 'FANSIDAR TAB (sulfadoxine+ pyrimethamine) (R)', 'TABLET', 7215),
(442, 'LIPANTHYL SUPRA TAB 160 MG (Fenofibrat) ', 'TABLET', 20377),
(443, 'CHOLESTAT TAB 20 MG (Simvastatin) ', 'TABLET', 6105),
(445, 'LIPESCO TAB ', 'TABLET', 5330),
(447, 'CILOSTAZOL TAB 100 MG ', 'TABLET', 3990),
(448, 'LIPITOR TAB 10 MG (Atorvastatin) 30\'s', 'TABLET', 19021),
(449, 'VECTRINE Caps 300 mg (Erdostein) ', 'CAPSUL', 5600),
(450, 'LIPITOR TAB 20 MG (Atorvastatin) 30\'s', 'TABLET', 19776),
(452, 'CIMETIDIN TAB 200 MG ', 'TABLET', 343),
(455, 'LIPITOR TAB 40 MG (Atorvastatin) ', 'TABLET', 28198),
(457, 'CIPRALEX TAB 10 MG (Escitalopram)', 'TABLET', 17857),
(458, 'VASTIGO TAB 6 MG (Betahistine) ', 'TABLET', 900),
(459, 'LIPROLAC SACHET (R)', 'SACHET', 5596),
(460, 'CIPROFLOXACIN TAB 500 MG HEXP (R)', 'TABLET', 339),
(466, 'LISINOPRIL TAB 10 MG (*)', 'TABLET', 550),
(467, 'LIVALO TAB 2 MG (Pitavastatin) 30\'s', 'TABLET', 7500),
(470, 'FARGOXIN 0.25 MG TAB (Digoxin) ', 'TABLET', 193),
(471, 'LIVER PRIME CAPSUL', 'TABLET', 7333),
(476, 'CIPROXIN XR TAB 1000 MG (Ciprofloxacin) ', 'TABLET', 37471),
(477, 'OXcal CAPS', 'CAPSUL', 3000),
(478, 'CIPROXIN XR TAB 500 MG (Ciprofloxacin) ', 'TABLET', 20444),
(479, 'VALVIR TAB 500 MG (Valacyclovir)', 'TABLET', 12500),
(480, 'LODIA TAB 2 MG (Loperamide) 100\'s', 'TABLET', 1050),
(481, 'VALSARTAN Tab 80 mg', 'TABLET', 4000),
(483, 'CIRRUS TAB (Cetirizine,Pseudoepherine)', 'TABLET', 4597),
(484, 'FARLEV TAB 750 MG (Levofloxacin) ', 'TABLET', 37000),
(486, 'VALSARTAN Tab 160 mg', 'TABLET', 6500),
(487, 'LOFACOL  TAB 20 MG (Lovastatin)', 'TABLET', 8104),
(488, 'VALIUM TAB 5 MG (Diazepam) ', 'TABLET', 3273),
(490, 'LORATADINE TAB 10 MG ', 'TABLET', 330),
(493, 'VALIUM TAB 2 MG (Diazepam) ', 'TABLET', 1877),
(494, 'LOSARTAN TAB 50 MG ', 'TABLET', 3030),
(499, 'VALISANBE TAB 5 MG (Diazepam) ', 'TABLET', 360),
(501, 'VALISANBE TAB 2 MG (Diazepam) ', 'TABLET', 215),
(511, 'VALESCO TAB 80 MG (Valsartan)', 'TABLET', 1600),
(513, 'CITICHOLINE TAB 500 MG', 'TABLET', 6000),
(515, 'VALESCO TAB 160 MG (Valsartan) ', 'TABLET', 2444),
(516, 'LUDIOMIL TAB 25 MG (Maprotilin HCl)', 'TABLET', 5976),
(517, 'OZID CAPS 20 MG (Omeprazole)', 'CAPSUL', 11079),
(518, 'CITICHOLINE TAB 1000 MG', 'TABLET', 12000),
(519, 'LUDIOMIL TAB 50 MG (Maprotilin HCl)', 'TABLET', 3609),
(522, 'LUTENYL CAPS 5 MG ', 'CAPSUL', 14242),
(525, 'OXYMED CAPS', 'CAPSUL', 1485),
(527, 'CLABAT CAPS 500 MG (Amoxicilline,Clavuanat)', 'CAPSUL', 13500),
(528, 'PACEGO CAPS (R)', 'CAPSUL', 400),
(529, 'LYNORAL TAB (Etinilestradiol) ', 'TABLET', 1995),
(531, 'VALDIMEX TAB 5 MG (Diazepam) ', 'TABLET', 1119),
(539, 'VALACYCLOVIR TAB 500 MG ', 'TABLET', 6000),
(540, 'FARMADOL TAB (Paracetamol) ', 'TABLET', 280),
(542, 'LYRICA TAB 75 MG (Pregabalin)', 'TABLET', 11427),
(546, 'LYSAGOR TAB 500 Mcg (Pizotifen)', 'TABLET', 973),
(550, 'CLANEKSI TAB 500 MG (Amoxicillin, Clafulanat)', 'TABLET', 11175),
(555, 'CLARINASE TAB (Loratadine, Pseudoefedrin)', 'TABLET', 3332),
(558, 'PAN- ENTERAL SACHET (MEDIUM CHAIN TRYGLICERID)', 'SACHET', 8653),
(560, 'PANADOL COLD & FLU TAB', 'TABLET', 678),
(562, 'PANADOL TAB (Paracetamol)', 'TABLET', 552),
(565, 'CLARITIN 10 MG TAB (Loratadine) ', 'TABLET', 5966),
(566, 'PANKREOFLAT TAB (R)', 'TABLET', 2440),
(572, 'PANTOPRAZOLE TAB 40 MG', 'TABLET', 8000),
(574, 'CLAST TAB 0,5 MG (Clebopride malate)', 'TABLET', 1890),
(579, 'PANTOPRAZOLE TAB 20 MG ', 'TABLET', 8000),
(588, 'CLAVAMOX TAB 500 MG (Amoxicillin, Clavulanat) ', 'TABLET', 12333),
(590, 'PANTOZOL TAB 20 MG (Pantoprazole)', 'TABLET', 14857),
(591, 'CLIMADAN CAPS 300 MG (Clindamycin) ', 'CAPSUL', 6435),
(592, 'PANTOZOL TAB 40 MG (Pantoprazole)', 'TABLET', 18857),
(593, 'CLINDAMYCIN CAPS 150 MG ', 'CAPSUL', 724),
(595, 'CLINDAMYCIN CAPS 300 MG ', 'CAPSUL', 1250),
(599, 'PAPAVERIN TAB 40 MG', 'TABLET', 460);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `transactionId` int(11) NOT NULL,
  `code` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`transactionId`, `code`, `name`, `unit`, `qty`, `price`, `totalPrice`) VALUES
(1, 3, 'ZYPRAZ TAB 0.5 MG (Alprazolam)', 'TABLET', 10, 2404, 24040),
(2, 116, 'OLMETEC TAB 20 MG (Olmesartan)', 'TABLET', 100, 10348, 1034800),
(2, 169, '3 TC- HBV TAB 100 MG', 'TABLET', 100, 15540, 1554000),
(2, 320, 'OSTEOCAL PLUS TAB (Calcium Carbonate 1.250 mg / 500 mg)', 'TABLET', 100, 1100, 110000),
(3, 90, 'OCUSON TAB ( Betamethasone, Dexchlorpheniramin)', 'TABLET', 50, 1200, 60000),
(3, 221, 'LAMESON TAB 16 MG (Methylprenisolone) 100\'s', 'TABLET', 50, 10000, 500000);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `depoOrigin` varchar(255) NOT NULL,
  `depoDestination` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `totalPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `date`, `depoOrigin`, `depoDestination`, `description`, `totalPrice`) VALUES
(1, '2024-06-16 22:54:07', 'Gudang Farmasi', 'Farmasi Rawat Jalan', 'Pengiriman Stok', 54240),
(2, '2024-06-16 22:57:08', 'Gudang Farmasi', 'Farmasi Rawat Inap', 'Pemenuhan Permintaan', 2698800),
(3, '2024-06-16 22:58:54', 'Farmasi Rawat Inap', 'Farmasi IGD', 'Pinjam Obat', 560000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `depos`
--
ALTER TABLE `depos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drugs`
--
ALTER TABLE `drugs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
