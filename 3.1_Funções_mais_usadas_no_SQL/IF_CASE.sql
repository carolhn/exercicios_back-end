SELECT * FROM sakila.film;

SELECT title, IF(rental_rate > 0.99, 'Isso é Caro', 'ISSO É BARATO') FROM sakila.film;

SELECT title, rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'BARATO_AAAA'
        WHEN rental_rate = 2.99 THEN 'TA NA MEDIA'
        WHEN rental_rate = 4.99 THEN 'CARO'
	ELSE rental_rate = 'Não classificado'
END AS VALOR
FROM sakila.film
LIMIT 10;

-- 1)Usando o IF na tabela sakila.film, exiba o id do filme, o título e uma coluna extra chamada ‘conheço o filme?’, em que deve-se
-- avaliar se o nome do filme é ‘ACE GOLDFINGER‘. Caso seja, exiba “Já assisti a esse filme”. Caso contrário, 
-- exiba “Não conheço o filme”. Não esqueça de usar um alias para renomear a coluna da condicional.
SELECT
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;


-- 2)Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating) e uma coluna extra que vamos chamar de ‘público-alvo’ em que colocaremos a classificação do filme de acordo com as seguintes siglas:
SELECT 
	title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'pg-13' THEN 'Não recomendado para menores de 13 anos'
		WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
END AS 'publico-alvo'
FROM sakila.film;


