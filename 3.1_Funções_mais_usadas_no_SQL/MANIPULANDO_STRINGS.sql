SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;

SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
-- 'FOO DINOSAUR'

SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
-- 'ACADEMY'

SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
-- 'DINOSAUR'

SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
-- 16

SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
-- 'EM'


SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;
-- 'EMY DINOSAUR'

SELECT UCASE('Oi, eu sou uma string');
-- r: 'OI, EU SOU UMA STRING'

SELECT LCASE('Oi, eu sou uma string');
-- r: 'oi, eu sou uma string'

SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
-- r:'Oi, eu sou uma cadeia de caracteres'

SELECT LEFT('Oi, eu sou uma string', 3);
-- r: Oi,

SELECT RIGHT('Oi, eu sou uma string', 6);
-- r: string

SELECT CHAR_LENGTH('Oi, eu sou uma string');
-- r: 21

SELECT SUBSTRING('Oi, eu sou uma string', 8, 3);
-- sou	(8= qual caractere devo pegar de inicio, 3 = qunatidade de caractere apos)

SELECT SUBSTRING('Oi, eu sou uma string', 5);
-- 'eu sou uma string'


-- ____________________________________EXERCICIOSSS _________________________________________________________________

-- 1)Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');

-- 2)Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo?', 'Google?');

-- 3)Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT CHAR_LENGTH('Uma frase qualquer');

-- 4)extraia e retorne apenas a palavra “JavaScript” da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 12, 11);

-- 5)Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');



