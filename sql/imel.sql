-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 02-Jan-2021 às 12:39
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imel`
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
(1, 'Hamilton Silva', 'ertyuio2345678', '12', 10, '12', 'Manha ', 'carlos', '1608325956179_14365.jpg', '1608325956121_14245.jpg', 2, 1, 1),
(2, 'Hamilton Silva', '1020700HS', '1020700', 11, '12', 'Manha ', 'massango', '1608699126841_15094.jpg', '1608953411839_11772.jpg', 2, 1, 1),
(3, 'Hamilton Silva', '1020700HS1', '12', 10, '14', 'Manha ', '1020700HS1', '1608954256569_11926.jpg', '1608954256540_14189.jpg', 1, 1, 1),
(5, 'Julio Silva', '1020700JS', '14', 10, '13', 'Manha ', 'massango', '1609251070991_10570.jpg', '1609252120192_10677.jpg', 2, 1, 1);

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
(1, 'Marcio Massango', NULL, 2, 1, '1609148236725_17775.jpg', '1609148236781_12550.jpg', 2, ''),
(2, 'Marcio Massango', '2020200HS', 1, 1, '1609148314239_15255.jpg', '1609148314285_12753.jpg', 2, '2020200HS');

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
(1, 'Carlos Cordenador', '1020700CC', 4, '1020700CS', '1020700CS', 3, '1020700CS');

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('wZAcDkBuX_CkPcUlD3aRg05uAzIyGYDa', 1609671860, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-01-03T11:04:19.768Z\",\"httpOnly\":true,\"path\":\"/\"}}'),
('y8GdhMlms-RDRzeFYkguk0EAss1-zkWL', 1609344196, '{\"cookie\":{\"originalMaxAge\":86399996,\"expires\":\"2020-12-30T16:03:16.496Z\",\"httpOnly\":true,\"path\":\"/\"},\"isLoggedIn\":true,\"user\":{\"id\":2,\"nome\":\"Marcio Massango\",\"bi\":\"2020200HS\",\"idCurso\":1,\"idCoordenador\":1,\"photoAvatar\":\"1609148314239_15255.jpg\",\"photoBi\":\"1609148314285_12753.jpg\",\"nivelSession\":2,\"palavraPasse\":\"2020200HS\"}}');

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
-- Indexes for dumped tables
--

--
-- Indexes for table `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkAlunoturma` (`idTurma`),
  ADD KEY `fkAlunoCurso` (`idCurso`);

--
-- Indexes for table `colaborador`
--
ALTER TABLE `colaborador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkColaboradorCoordeenador` (`idCoordenador`);

--
-- Indexes for table `coordenador`
--
ALTER TABLE `coordenador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkCoordenadorCurso` (`idCurso`);

--
-- Indexes for table `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cursodisciplina`
--
ALTER TABLE `cursodisciplina`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkNotaALuno` (`idAluno`),
  ADD KEY `fkNotaDisciplina` (`idDisciplina`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fkTurmaCurso` (`idCurso`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aluno`
--
ALTER TABLE `aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `colaborador`
--
ALTER TABLE `colaborador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `coordenador`
--
ALTER TABLE `coordenador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cursodisciplina`
--
ALTER TABLE `cursodisciplina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nota`
--
ALTER TABLE `nota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `turma`
--
ALTER TABLE `turma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
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
-- Limitadores para a tabela `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `fkTurmaCurso` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
