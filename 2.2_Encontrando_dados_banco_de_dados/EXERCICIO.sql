-- Agora é a sua vez! Vamos juntar tudo isso na prática usando a tabela sakila.film:
SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

-- Para os exercícios a seguir, vamos usar a tabela sakila.actor:
SELECT * FROM sakila.actor; -- 200 LINHAS
SELECT COUNT(DISTINCT last_name) FROM sakila.actor; -- 121 LINHAS
SELECT * FROM sakila.actor ORDER BY last_name, first_name DESC;

-- Usando a tabela language:
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

-- Usando a tabela film:
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film 
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
