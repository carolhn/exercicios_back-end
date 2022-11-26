-- FUNÇÕES DE AGREGAÇÃO/ AVG, MIN, MAX, CUM, COUNT
SELECT * FROM sakila.film;

-- 1)A média de duração dos filmes e dê o nome da coluna de ‘Média de Duração’;
SELECT AVG(replacement_cost) AS 'Média de Duração' FROM sakila.film;

-- 2)A duração mínima dos filmes como ‘Duração Mínima’;
SELECT MIN(replacement_cost) AS 'Minumo de Duração' FROM sakila.film;

-- 3)A duração máxima dos filmes como ‘Duração Máxima’;
SELECT MAX(replacement_cost) AS 'Maximo de Duração' FROM sakila.film;

-- 4)A soma de todas as durações como ‘Tempo de Exibição Total’;
SELECT SUM(replacement_cost) AS 'Tempo de Duração total' FROM sakila.film;

-- 5 quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’.
SELECT COUNT(replacement_cost) AS'Filmes Registrados' FROM sakila.film;

