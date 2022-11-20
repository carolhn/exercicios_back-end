SELECT * FROM sakila.actor;
SELECT COUNT(*) FROM sakila.actor; -- 200
SELECT COUNT(first_name) FROM sakila.actor; -- 200
SELECT COUNT(DISTINCT first_name) FROM sakila.actor; -- 128

SELECT * FROM sakila.address;
SELECT COUNT(*) FROM sakila.address; -- 603
SELECT COUNT(address2) FROM sakila.address; -- 599
SELECT COUNT(district) FROM sakila.address; -- 603
SELECT COUNT(district) FROM sakila.address WHERE district = 'Alberta'; -- 2
SELECT COUNT(address2) FROM sakila.address WHERE address2 = ''; -- 599

SELECT * FROM sakila.staff;
SELECT COUNT(password) FROM sakila.staff; -- 1
SELECT COUNT(*) FROM sakila.staff; -- 2
SELECT COUNT(email) FROM sakila.staff; -- 2

