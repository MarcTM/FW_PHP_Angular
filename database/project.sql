-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 11-09-2020 a las 08:51:23
-- Versión del servidor: 5.7.31-0ubuntu0.18.04.1
-- Versión de PHP: 7.2.29-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `project`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carousel`
--

CREATE TABLE `carousel` (
  `url` varchar(255) NOT NULL,
  `id` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `carousel`
--

INSERT INTO `carousel` (`url`, `id`) VALUES
('frontend/assets/img/carousel/carousel1.jpg', 'liquidacion'),
('frontend/assets/img/carousel/carousel2.jpg', 'packs'),
('frontend/assets/img/carousel/carousel3.jpg', 'bcaas'),
('frontend/assets/img/carousel/carousel4.jpg', 'dto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `email` varchar(50) DEFAULT NULL,
  `idproduct` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cart`
--

INSERT INTO `cart` (`email`, `idproduct`, `quantity`) VALUES
('marctorresmartinez@gmail.com', 20, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `cat` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `id` varchar(255) DEFAULT NULL,
  `views` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`cat`, `url`, `id`, `views`) VALUES
('PROTEIN', 'frontend/assets/img/category/protein.png', 'Protein', 51),
('MASS GAINER', 'frontend/assets/img/category/massgainer.png', 'Mass_gainer', 36),
('BCAA', 'frontend/assets/img/category/bcaa.png', 'Bcaa', 14),
('CREATINE', 'frontend/assets/img/category/creatine.png', 'Creatine', 3),
('VITAMIN', 'frontend/assets/img/category/vitamine.png', 'Vitamin', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `checkout`
--

CREATE TABLE `checkout` (
  `email` varchar(30) DEFAULT NULL,
  `idproduct` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `day` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorites`
--

CREATE TABLE `favorites` (
  `email` varchar(100) DEFAULT NULL,
  `prod` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `favorites`
--

INSERT INTO `favorites` (`email`, `prod`) VALUES
('marctorresmartinez@gmail.com', 28),
('marctorresmartinez@gmail.com', 26),
('marctorresmartinez@gmail.com', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idproduct` int(11) NOT NULL,
  `codprod` varchar(20) DEFAULT NULL,
  `product` varchar(60) DEFAULT NULL,
  `ingredients` varchar(1000) DEFAULT NULL,
  `flavour` varchar(200) DEFAULT NULL,
  `brand` varchar(60) DEFAULT NULL,
  `kg` int(11) DEFAULT NULL,
  `datecaducity` varchar(60) DEFAULT NULL,
  `descr` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `views` int(11) DEFAULT '0',
  `cod_shop` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idproduct`, `codprod`, `product`, `ingredients`, `flavour`, `brand`, `kg`, `datecaducity`, `descr`, `price`, `img`, `views`, `cod_shop`) VALUES
(20, '4444', 'Mass_gainer', 'Acido_Aspartico:', 'Chocolate', 'HSNraw', 6, '07/02/2020', 'Producto mu bueno mu bueno', '45', 'frontend/assets/img/shop/massgainer.png', 26, 1),
(21, '77777', 'Creatine', 'Amilopectina:Acido_Aspartico:Ashwagandha:', 'Strawberry', 'BiotechUSA', 2, '06/02/2020', 'asamalama damalama', '25', 'frontend/assets/img/shop/creatine.png', 6, 1),
(22, '2134466', 'Mass_gainer', 'Ashwagandha:', 'Chocolate', 'HSNraw', 1, '24/02/2020', 'asidufgmasdfasidufgmasdfasidufgmasdfasidufgmasdfvasidufgmasdfasidufgmasdfasidufgmasdfasidufgmasdfv', '20', 'frontend/assets/img/shop/massgainer.png', 151, 1),
(26, '9999', 'Mass_gainer', 'Amilopectina:Acido_Aspartico:Ashwagandha:', 'Banana', 'HSN', 2, '20/20/2020', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa fff', '3', 'frontend/assets/img/shop/massgainer.png', 38, 2),
(27, '1234566', 'Mass_gainer', 'Acido_Aspartico:', 'Banana', 'HSN', 1, '20/20/2020', 'tus muerto', '12', 'frontend/assets/img/shop/massgainer.png', 7, 2),
(28, '12984', 'Vitamin', 'Amilopectina:', 'Vanilla', 'HSNraw', 1, '25/02/2020', 'asfg', '12', 'frontend/assets/img/shop/vitamine.png', 19, 2),
(33, '1234567', 'Mass_gainer', 'Amilopectina:', 'Banana', 'HSN', 3, '25/02/2020', '', '3', 'frontend/assets/img/shop/default.png', 7, 3),
(34, '878', 'Protein', 'Acido_Aspartico:', 'Capuccino', 'HSNraw', 2, '03/03/2020', 'aaa', '14', 'frontend/assets/img/shop/protein.png', 9, 0),
(35, 'yfiyilyf', 'Mass_gainer', 'Amilopectina:', 'Banana', 'HSN', 4, '31/03/2020', '', '50', 'frontend/assets/img/shop/massgainer.png', 0, 0),
(36, '555f', 'Mass_gainer', 'Amilopectina:Acido_Aspartico:Ashwagandha:', 'Vanilla', 'HSNraw', 2, '19/03/2020', 'aaa', '30', 'frontend/assets/img/shop/massgainer.png', 0, 0),
(37, '666f', 'Mass_gainer', 'Acido_Aspartico:', 'Capuccino', 'BiotechUSA', 2, '03/03/2020', '', '25', 'frontend/assets/img/shop/massgainer.png', 1, 0),
(38, '777h', 'Mass_gainer', 'Acido_Aspartico:Ashwagandha:', 'Banana', 'BiotechUSA', 7, '07/03/2020', '', '44', 'frontend/assets/img/shop/massgainer.png', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shops`
--

CREATE TABLE `shops` (
  `name` varchar(255) DEFAULT NULL,
  `latitude` varchar(30) DEFAULT NULL,
  `longitude` varchar(30) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `cod_shop` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `shops`
--

INSERT INTO `shops` (`name`, `latitude`, `longitude`, `city`, `cod_shop`) VALUES
('HSN', '-34', '151', 'Valencia', 1),
('BiotechUSA', '-33', '150', 'Alicante', 2),
('Prozis', '-33', '151', 'Castellon', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `IDuser` varchar(100) NOT NULL,
  `user` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `type` varchar(45) NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `activate` tinyint(1) NOT NULL DEFAULT '0',
  `token` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`IDuser`, `user`, `email`, `password`, `type`, `avatar`, `activate`, `token`) VALUES
('marc', 'marc', 'marctorresmartinez@gmail.com', '$2y$10$xe3pTj3/QrP0/cZ9aUnWpeL2qvvI0D0JPBhmGWc4AiV8egEtX3mP6', 'user', 'frontend/assets/img/avatars/default.jpg', 1, 'eyJ0eXAiOiJKV1QiLCAiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE1OTk0MjE5MDEsImV4cCI6MTU5OTQyMjIwMSwibmFtZSI6Im1hcmMifQ.KFimqCHBg-tUAKbBe-UIQgBxuHuwtCp0lccENSzasnQ'),
('marcos', 'marcos', 'marctorresmartinez2@gmail.com', '$2y$10$257MWXHn5c1By42znPfLfOBeVBdza0RgW6X9gTJZS74OaJUAHysHy', 'user', 'frontend/assets/img/avatars/default.jpg', 1, '43fa27982b96ba99a627b70185fdf3cfdee36fdf'),
('', '', '', '$2y$10$G8z3crszuCdhCuyWr6Y5reGn1Hh0in65y8qrfSQVtkn4c4f99rh6C', 'user', 'frontend/assets/img/avatars/default.jpg', 0, 'e532c3a098ea18b1321ed8be39130f53b1567c0c'),
('Kew5TrLIaWQClUIf2SEQcm5fVZl1', 'Marc Torres Martinez', 'marctorresmartinez@gmail.com', '', 'user', 'https://lh3.googleusercontent.com/a-/AOh14GgfayETb0U7xY4HQ3JvHzwNKOroY_4FBdYNP944HQ', 1, 'eyJ0eXAiOiJKV1QiLCAiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE1OTE2MDExMzEsImV4cCI6MTU5MTYwMTQzMSwibmFtZSI6IktldzVUckxJYVdRQ2xVSWYyU0VRY201ZlZabDEifQ.xY4vl_0XhKHkaD5OQNalob5d_hQ6446taoYmgc-dISQ'),
('RA3qlW46oWg8B2QJov3GXmGvZo72', 'Marc Torres martinez', 'marctorresmartinez2@gmail.com', '', 'user', 'https://lh6.googleusercontent.com/-6k1BkGOIUpQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnpLjfSe2I9unDsslDKtpx2BnXRTA/photo.jpg', 1, 'eyJ0eXAiOiJKV1QiLCAiYWxnIjoiSFMyNTYifQ.eyJpYXQiOjE1OTE2MDExNjMsImV4cCI6MTU5MTYwMTQ2MywibmFtZSI6IlJBM3FsVzQ2b1dnOEIyUUpvdjNHWG1HdlpvNzIifQ.NIMwNX70pe9K1K1QvxSVGtW0vqzGw4yF_JYJpD1Zocs');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idproduct`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idproduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
