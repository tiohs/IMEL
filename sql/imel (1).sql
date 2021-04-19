-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Abr-2021 às 14:41
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `imel`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `bi` varchar(15) NOT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `classe` int(11) NOT NULL,
  `sala` varchar(100) NOT NULL,
  `turno` varchar(100) NOT NULL,
  `palavraPasse` varchar(100) DEFAULT NULL,
  `photoBi` varchar(255) NOT NULL,
  `photoAvatar` varchar(255) DEFAULT NULL,
  `idCurso` int(11) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `nivelSession` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`id`, `nome`, `bi`, `numero`, `classe`, `sala`, `turno`, `palavraPasse`, `photoBi`, `photoAvatar`, `idCurso`, `idTurma`, `nivelSession`) VALUES
(1, 'Hamilton Massango', 'HM1020700', '12', 10, '12', 'Manha ', 'carlos', '1608325956179_14365.jpg', '1611650643551_17927.jpg', 2, 1, 1),
(2, 'Hamilton Silva', '1020700HS', '1020700', 11, '12', 'Manha ', 'massango', '1608699126841_15094.jpg', '1608953411839_11772.jpg', 2, 1, 1),
(3, 'Hamilton Silva', '1020700HS1', '12', 10, '14', 'Manha ', '1020700HS1', '1608954256569_11926.jpg', '1608954256540_14189.jpg', 1, 1, 1),
(5, 'Julio Silva', '1020700JS', '14', 10, '13', 'Manha ', 'massango', '1609251070991_10570.jpg', '1609252120192_10677.jpg', 2, 1, 1),
(6, 'simao jose mateus', 'simaold', '12', 10, '1', 'Manha', 'simaold', '1609770936710_17073.jpg', '1609770936555_17598.jpg', 1, 1, 1),
(7, 'Hamilton', '102010', '1', 10, '12', 'Manha', '102010', '1617197927100_11504.png', '1617197927096_16165.png', 1, 1, 1),
(8, 'Telma Francisco', '112233', '10', 10, '13', 'Manha', '112233', '1617198218478_18220.png', '1617198218437_18452.png', 5, 1, 1),
(9, 'Antonia Massango', '0000A12', '2', 10, '10', 'Manha', '0000A12', '1617198938938_14434.png', '1617198938935_11943.png', 4, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `colaborador`
--

CREATE TABLE `colaborador` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `bi` varchar(15) DEFAULT NULL,
  `idCurso` int(11) NOT NULL,
  `idCoordenador` int(11) NOT NULL,
  `photoAvatar` varchar(255) DEFAULT NULL,
  `photoBi` varchar(255) NOT NULL,
  `nivelSession` int(11) NOT NULL,
  `palavraPasse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `colaborador`
--

INSERT INTO `colaborador` (`id`, `nome`, `bi`, `idCurso`, `idCoordenador`, `photoAvatar`, `photoBi`, `nivelSession`, `palavraPasse`) VALUES
(1, 'Marcio Massango', '1020700HSCC', 1, 1, '1609148236725_17775.jpg', '1615390923196_19710.jpg', 2, ''),
(2, 'Marcio Massango', '2020200HS', 1, 1, '1609148314239_15255.jpg', '1609148314285_12753.jpg', 2, '2020200HS'),
(3, 'Simão José', '1019850SJC', 1, 1, '1615391548783_11528.jpg', '1615391548830_10001.jpg', 2, '1019850SJC');

-- --------------------------------------------------------

--
-- Estrutura da tabela `coordenador`
--

CREATE TABLE `coordenador` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `bi` varchar(15) NOT NULL,
  `idCurso` int(11) NOT NULL,
  `photoAvatar` varchar(255) DEFAULT NULL,
  `photoBi` varchar(255) NOT NULL,
  `nivelSession` int(11) NOT NULL,
  `palavraPasse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `coordenador`
--

INSERT INTO `coordenador` (`id`, `nome`, `bi`, `idCurso`, `photoAvatar`, `photoBi`, `nivelSession`, `palavraPasse`) VALUES
(1, 'Carlos Massango', '1020700CC', 4, '1020700CS', '1615390679513_11599.jpg', 3, '1020700CS'),
(2, 'Hamilton Silva', '1020700HSCC', 4, '1610969200047_13159.jpg', '1610969200493_12738.jpg', 3, '1020700HSCC'),
(3, 'Telma Francisco', '1020700TF', 4, '1610984996516_12053.jpg', '1610984996933_13980.jpg', 3, '1020700TF'),
(4, 'Creusa Miranda ', '1020700CM', 5, '1610989894905_10823.jpg', '1610989894910_16662.jpg', 3, '1020700CM'),
(5, 'Kelson Most', '1020700KM', 5, '1618235284542_14878.jpg', '1618235284701_15534.jpg', 3, '1020700KM'),
(6, 'Ariana Grande', '1019850ARI', 1, '1618257868779_13747.jpg', '1618257868856_19751.png', 3, '1019850ARI');

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso`
--

CREATE TABLE `curso` (
  `id` int(11) NOT NULL,
  `nomeCurso` varchar(255) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `curso`
--

INSERT INTO `curso` (`id`, `nomeCurso`, `descricao`) VALUES
(1, 'Medicina', 'Medicina bom curso.'),
(2, 'Eng. Informática', 'Bom curso'),
(3, 'Eng. Arquitectura Urbanística  ', 'Bom curso '),
(4, 'Gestão Empresarial ', 'Bom curso para empresas '),
(5, 'Metafisica ', 'Bom curso ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cursodisciplina`
--

CREATE TABLE `cursodisciplina` (
  `id` int(11) NOT NULL,
  `idCurso` varchar(255) NOT NULL,
  `idDisciplina` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplina`
--

CREATE TABLE `disciplina` (
  `id` int(11) NOT NULL,
  `nomeDisciplina` varchar(255) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `disciplina`
--

INSERT INTO `disciplina` (`id`, `nomeDisciplina`, `descricao`) VALUES
(1, 'Matemática', 'Cadeira de cálculos '),
(2, 'Língua Português ', 'Cadeira onde estuda a língua portuguesa ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `nota`
--

CREATE TABLE `nota` (
  `id` int(11) NOT NULL,
  `nota1` int(11) DEFAULT NULL,
  `nota2` int(11) DEFAULT NULL,
  `media` int(11) DEFAULT NULL,
  `trimestre` int(11) DEFAULT NULL,
  `idDisciplina` int(11) NOT NULL,
  `idAluno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `nota`
--

INSERT INTO `nota` (`id`, `nota1`, `nota2`, `media`, `trimestre`, `idDisciplina`, `idAluno`) VALUES
(1, 10, 10, 10, 1, 1, 3),
(2, 10, 10, 10, 1, 1, 1),
(3, 120, 20, 70, 1, 1, 1),
(4, 20, 20, 20, 1, 1, 1),
(5, 20, 20, 20, 1, 1, 1),
(6, 10, 10, 10, 2, 2, 1),
(7, 20, 20, 20, 1, 1, 1),
(8, 10, 10, 10, 1, 1, 1),
(9, 10, 10, 10, 1, 1, 1),
(10, 20, 20, 20, 3, 1, 1),
(11, 8, 5, 0, 1, 1, 1),
(12, 10, 10, 10, 1, 1, 1),
(13, 10, 10, 10, 1, 1, 1),
(14, 10, 10, 10, 2, 1, 1),
(15, 20, 20, 20, 1, 1, 1),
(16, 10, 10, 10, 1, 1, 1),
(17, 10, 20, 15, 1, 1, 1),
(18, 10, 10, 10, 1, 1, 1),
(19, 10, 10, 10, 1, 1, 1),
(20, 10, 10, 10, 1, 1, 1),
(21, 10, 10, 10, 1, 1, 1),
(22, 10, 10, 10, 1, 1, 1),
(23, 20, 20, 20, 1, 1, 1),
(24, 20, 20, 20, 1, 1, 1),
(25, 20, 20, 20, 1, 1, 1),
(26, 20, 20, 20, 1, 1, 1),
(27, 10, 10, 10, 1, 1, 1),
(28, 10, 10, 10, 1, 1, 1),
(29, 10, 10, 10, 1, 1, 1),
(30, 10, 10, 10, 1, 1, 1),
(31, 10, 10, 10, 1, 1, 1),
(32, 12, 16, 14, 1, 2, 1),
(33, 16, 18, 17, 2, 1, 1),
(34, 12, 12, 0, 2, 1, 1),
(35, 2, 3, 0, 1, 1, 1),
(36, 10, 10, 10, 1, 1, 6),
(37, 20, 20, 20, 2, 1, 6),
(38, 10, 6, 8, 3, 1, 6),
(39, 10, 10, 10, 1, 1, 6),
(40, 15, 16, 16, 1, 1, 6),
(41, 20, 20, 20, 1, 1, 6),
(42, 20, 20, 20, 1, 1, 9),
(43, 30, 30, 30, 3, 2, 9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `nivel` int(11) DEFAULT NULL,
  `reader` tinyint(1) DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `notification`
--

INSERT INTO `notification` (`id`, `idUser`, `nivel`, `reader`, `content`) VALUES
(1, 1, 1, 0, 'Olá mundo ! '),
(2, 1, 1, 0, 'Nova nota '),
(3, 3, NULL, 1, 'Foi lançada a tua nota de Matemática'),
(4, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(5, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(6, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(7, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(8, 1, NULL, 0, 'Foi lançada a tua nota de Língua Português '),
(9, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(10, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(11, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(12, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(13, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(14, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(15, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(16, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(17, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(18, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(19, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(20, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(21, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(22, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(23, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(24, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(25, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(26, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(27, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(28, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(29, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(30, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(31, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(32, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(33, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(34, 1, NULL, 0, 'Foi lançada a tua nota de Língua Português '),
(35, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(36, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(37, 1, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(38, 6, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(39, 6, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(40, 6, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(41, 6, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(42, 6, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(43, 6, NULL, 0, 'Foi lançada a tua nota de Matemática'),
(44, 6, NULL, 0, 'A tua nota foi actualizada Matemática'),
(45, 6, NULL, 0, 'A tua nota do 1º foi actualizada Matemática'),
(46, 1, NULL, 1, 'A tua nota do 2º trimestre foi actualizada Língua Português '),
(47, 1, NULL, 1, 'A tua nota do 1º trimestre foi actualizada Matemática'),
(48, 6, NULL, 0, 'A tua nota do 1º trimestre foi actualizada Matemática'),
(49, 3, NULL, 1, 'A tua nota do 1º trimestre foi actualizada Matemática'),
(50, 9, NULL, 1, 'Foi lançada a tua nota de Matemática'),
(51, 9, NULL, 1, 'A tua nota do 1º trimestre foi actualizada Matemática'),
(52, 9, NULL, 1, 'Foi lançada a tua nota de Língua Português '),
(53, 9, NULL, 1, 'A tua nota do 3º trimestre foi actualizada Língua Português ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `reclamacao`
--

CREATE TABLE `reclamacao` (
  `id` int(12) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idCurso` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `reader` bit(1) NOT NULL,
  `datatimes` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `reclamacao`
--

INSERT INTO `reclamacao` (`id`, `idUser`, `idCurso`, `title`, `content`, `reader`, `datatimes`) VALUES
(1, 8, 5, 'ok', 'ok', b'0', '2021-03-31 14:49:13'),
(2, 8, 5, 'ok', 'ok', b'0', '2021-03-31 14:52:50'),
(3, 9, 4, 'Agora sim', 'Agora sim', b'0', '2021-03-31 14:56:33'),
(4, 9, 4, 'Café', 'Pato', b'0', '2021-03-31 14:56:48'),
(5, 9, 4, 'Pato', 'PAto', b'0', '2021-03-31 14:57:01'),
(6, 9, 4, 'Olá mundo ', 'Olá mundo ', b'0', '2021-03-31 15:07:02'),
(7, 9, 4, 'Nova', 'Nova1', b'0', '2021-03-31 15:12:32'),
(8, 9, 4, 'Nova', 'Nova1', b'0', '2021-03-31 15:12:51'),
(9, 9, 4, 'Carlos', 'Carlos', b'0', '2021-03-31 15:14:05'),
(10, 9, 4, 'pota2', 'pota2', b'0', '2021-03-31 15:15:47'),
(11, 9, 4, ' reclamação', ' reclamação2', b'0', '2021-03-31 15:17:00'),
(12, 9, 4, ' reclamação', ' reclamação2132435', b'0', '2021-03-31 15:18:04');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('44Dg5coBIQxL201f5T6NyP9kTz8F-SpA', 1618399504, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-04-14T11:25:04.227Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"isLoggedIn\":true,\"user\":{\"id\":6,\"nome\":\"Ariana Grande\",\"bi\":\"1019850ARI\",\"idCurso\":1,\"photoAvatar\":\"1618257868779_13747.jpg\",\"photoBi\":\"1618257868856_19751.png\",\"nivelSession\":3,\"palavraPasse\":\"1019850ARI\"}}'),
('BcIrTCX5LaGNubDw8rdbYw9Anyg5UREc', 1618403513, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-04-14T12:31:53.186Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"isLoggedIn\":true,\"user\":{\"id\":3,\"nome\":\"Hamilton Silva\",\"bi\":\"1020700HS1\",\"numero\":\"12\",\"classe\":10,\"sala\":\"14\",\"turno\":\"Manha \",\"palavraPasse\":\"1020700HS1\",\"photoBi\":\"1608954256569_11926.jpg\",\"photoAvatar\":\"1608954256540_14189.jpg\",\"idCurso\":1,\"idTurma\":1,\"nivelSession\":1}}'),
('T2FbjaOyerp7Ia02j0qqX7txN7AD5ano', 1618346085, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-04-13T20:34:45.079Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"isLoggedIn\":true,\"user\":{\"id\":6,\"nome\":\"simao jose mateus\",\"bi\":\"simaold\",\"numero\":\"12\",\"classe\":10,\"sala\":\"1\",\"turno\":\"Manha\",\"palavraPasse\":\"simaold\",\"photoBi\":\"1609770936710_17073.jpg\",\"photoAvatar\":\"1609770936555_17598.jpg\",\"idCurso\":1,\"idTurma\":1,\"nivelSession\":1}}'),
('YiFFgYc5KhCxhxE3SaZ5l1wXtZZJFxme', 1618322948, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-04-13T14:09:08.225Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"isLoggedIn\":true,\"user\":{\"id\":2,\"nome\":\"Hamilton Silva\",\"bi\":\"1020700HS\",\"numero\":\"1020700\",\"classe\":11,\"sala\":\"12\",\"turno\":\"Manha \",\"palavraPasse\":\"massango\",\"photoBi\":\"1608699126841_15094.jpg\",\"photoAvatar\":\"1608953411839_11772.jpg\",\"idCurso\":2,\"idTurma\":1,\"nivelSession\":1}}'),
('bTpyKhsXdylwIMvxO-fElpcsnyJp9Euk', 1618324709, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-04-13T14:38:29.164Z\",\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"isLoggedIn\":true,\"user\":{\"id\":6,\"nome\":\"simao jose mateus\",\"bi\":\"simaold\",\"numero\":\"12\",\"classe\":10,\"sala\":\"1\",\"turno\":\"Manha\",\"palavraPasse\":\"simaold\",\"photoBi\":\"1609770936710_17073.jpg\",\"photoAvatar\":\"1609770936555_17598.jpg\",\"idCurso\":1,\"idTurma\":1,\"nivelSession\":1}}');

-- --------------------------------------------------------

--
-- Estrutura da tabela `solicitartroca`
--

CREATE TABLE `solicitartroca` (
  `id` int(12) NOT NULL,
  `idUser` int(11) NOT NULL,
  `interessado` int(11) DEFAULT NULL,
  `idCurso` int(11) NOT NULL,
  `periodo` varchar(255) NOT NULL,
  `resposta` varchar(255) DEFAULT NULL,
  `datatimes` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `solicitartroca`
--

INSERT INTO `solicitartroca` (`id`, `idUser`, `interessado`, `idCurso`, `periodo`, `resposta`, `datatimes`) VALUES
(3, 1, 1, 4, 'Manha', 'Reunião dia 20', '2021-04-13 12:59:41'),
(4, 5, NULL, 5, 'Manha', NULL, '2021-04-13 13:01:49'),
(5, 3, NULL, 1, 'Manha', NULL, '2021-04-13 13:09:33'),
(6, 3, NULL, 1, 'Noite', NULL, '2021-04-13 13:12:24');

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

CREATE TABLE `turma` (
  `id` int(11) NOT NULL,
  `idCurso` int(11) NOT NULL,
  `sala` varchar(20) DEFAULT NULL,
  `nome` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `turma`
--

INSERT INTO `turma` (`id`, `idCurso`, `sala`, `nome`) VALUES
(1, 2, '12', 'A'),
(2, 2, '13', 'B'),
(3, 1, '15', 'A'),
(4, 1, '16', 'B');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkAlunoturma` (`idTurma`),
  ADD KEY `fkAlunoCurso` (`idCurso`);

--
-- Índices para tabela `colaborador`
--
ALTER TABLE `colaborador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkColaboradorCoordeenador` (`idCoordenador`);

--
-- Índices para tabela `coordenador`
--
ALTER TABLE `coordenador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkCoordenadorCurso` (`idCurso`);

--
-- Índices para tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `cursodisciplina`
--
ALTER TABLE `cursodisciplina`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkNotaALuno` (`idAluno`),
  ADD KEY `fkNotaDisciplina` (`idDisciplina`);

--
-- Índices para tabela `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkalunonotification` (`idUser`);

--
-- Índices para tabela `reclamacao`
--
ALTER TABLE `reclamacao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reclamacaoCurso` (`idCurso`),
  ADD KEY `reclamacaoUser` (`idUser`);

--
-- Índices para tabela `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Índices para tabela `solicitartroca`
--
ALTER TABLE `solicitartroca`
  ADD PRIMARY KEY (`id`),
  ADD KEY `solicitarUser` (`idUser`),
  ADD KEY `solicitarInteressado` (`interessado`),
  ADD KEY `solicitarCurso` (`idCurso`);

--
-- Índices para tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkTurmaCurso` (`idCurso`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `colaborador`
--
ALTER TABLE `colaborador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `coordenador`
--
ALTER TABLE `coordenador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `cursodisciplina`
--
ALTER TABLE `cursodisciplina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `nota`
--
ALTER TABLE `nota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de tabela `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de tabela `reclamacao`
--
ALTER TABLE `reclamacao`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `solicitartroca`
--
ALTER TABLE `solicitartroca`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `turma`
--
ALTER TABLE `turma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aluno`
--
ALTER TABLE `aluno`
  ADD CONSTRAINT `fkAlunoCurso` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`id`),
  ADD CONSTRAINT `fkAlunoturma` FOREIGN KEY (`idTurma`) REFERENCES `turma` (`id`);

--
-- Limitadores para a tabela `colaborador`
--
ALTER TABLE `colaborador`
  ADD CONSTRAINT `fkColaboradorCoordeenador` FOREIGN KEY (`idCoordenador`) REFERENCES `coordenador` (`id`);

--
-- Limitadores para a tabela `coordenador`
--
ALTER TABLE `coordenador`
  ADD CONSTRAINT `fkCoordenadorCurso` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`id`);

--
-- Limitadores para a tabela `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `fkNotaALuno` FOREIGN KEY (`idAluno`) REFERENCES `aluno` (`id`),
  ADD CONSTRAINT `fkNotaDisciplina` FOREIGN KEY (`idDisciplina`) REFERENCES `disciplina` (`id`);

--
-- Limitadores para a tabela `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `fkalunonotification` FOREIGN KEY (`idUser`) REFERENCES `aluno` (`id`);

--
-- Limitadores para a tabela `reclamacao`
--
ALTER TABLE `reclamacao`
  ADD CONSTRAINT `reclamacaoCurso` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`id`),
  ADD CONSTRAINT `reclamacaoUser` FOREIGN KEY (`idUser`) REFERENCES `aluno` (`id`);

--
-- Limitadores para a tabela `solicitartroca`
--
ALTER TABLE `solicitartroca`
  ADD CONSTRAINT `solicitarCurso` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`id`),
  ADD CONSTRAINT `solicitarInteressado` FOREIGN KEY (`interessado`) REFERENCES `aluno` (`id`),
  ADD CONSTRAINT `solicitarUser` FOREIGN KEY (`idUser`) REFERENCES `aluno` (`id`);

--
-- Limitadores para a tabela `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `fkTurmaCurso` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
