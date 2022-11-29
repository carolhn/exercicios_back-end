SELECT * FROM sakila.city;

-- juntar duas tabelas em uma só
SELECT city.city, city.country_id, country.country 
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;

-- juntando tabelas
SELECT * FROM sakila.language;
SELECT * FROM sakila.film;

-- exemplo 2 - juntando tabelas
SELECT film.title, film.language_id, linguagem.name
FROM sakila.film AS film
INNER JOIN sakila.language AS linguagem
ON film.language_id = linguagem.language_id;

-- exem-plo 3 - juntando tabelas
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- PARA FIXAR:

-- 1)Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.actor;

SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f 
ON a.actor_id = f.actor_id;

-- 2)Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT * FROM sakila.address;
SELECT * FROM sakila.staff;

SELECT name.first_name, name.last_name, ender.address
FROM sakila.staff AS name
INNER JOIN sakila.address AS ender
ON name.address_id = ender.address_id;

-- 3)Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id,
    a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- 4)Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT
    c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a 
ON c.address_id = a.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';

-- 5)Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.
SELECT * FROM sakila.customer;
SELECT * FROM sakila.rental;

SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS `quant filmes alugados`
FROM sakila.customer AS c
INNER JOIN sakila.rental AS r
ON r.customer_id = c.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

-- 6)Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM sakila.staff;
SELECT * FROM sakila.payment;

SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM sakila.staff AS stf
INNER JOIN sakila.payment pay
ON stf.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;

-- 7)Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT
    a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM
    sakila.actor AS a
INNER JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id;



