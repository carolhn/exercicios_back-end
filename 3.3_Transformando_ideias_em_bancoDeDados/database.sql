CREATE DATABASE IF NOT EXISTS biblioteca;

-- CREATE SCHEMA biblioteca // pode ser feito dessa forma tambem;

CREATE TABLE categorias(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE autores(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(100)
);

CREATE TABLE livros(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    quantidade INT,
    data_publicacao DATE,
    autor_id INT,
    categoria_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores (id),
	FOREIGN KEY (categoria_id) REFERENCES categorias (id)
);

CREATE TABLE clientes(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(100),
    cep VARCHAR(100),
    data_nascimento DATE,
);

CREATE TABLE IF NOT EXISTS aluguel(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    data_aluguel DATE NOT NULL,
    data_devolucao DATE NOT NULL,
    preco DECIMAL(10,2),
    alugado TINYINT,
    cliente_id INT NOT NULL,
    livro_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes (id),
	FOREIGN KEY (livro_id) REFERENCES livros (id)
);
