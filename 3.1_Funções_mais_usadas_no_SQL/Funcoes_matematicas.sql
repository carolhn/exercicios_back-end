SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- DIVISÃO DIV E MOD__________________________________________________________________________
-- 1)Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de ‘Par ou Ímpar’, onde ela pode dizer ‘Par’ ou ‘Ímpar’.
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- 2)Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT 220 DIV 12;

-- 3)Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));


-- ARREDONDANDO VALORES _________________________________________________________________________________
-- ROUND Se for maior que 0.5 arredonda para CIMA se não para BAIXO
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11

-- CEIL - Sempre arredonda para cima
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.2); -- 11

-- FLOOR - Sempre arredonda para BAIXO
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.2); -- 10


-- EXPONENCIAÇÃO E RAIZ QUADRADA __________________________________________________________________________
-- POW – Elevando um numero para a raiz quadrada
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

-- SQRT – encontrando a raiz quadrada do numero
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4


-- Gerando valores aleatórios __________________________________________________________________________

-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));
-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))


-- PARA FIXAR _________________________________________________________________________________________
-- 1)Monte uma query que gere um valor entre 15 e 20.
SELECT ROUND(15 + (RAND() * 5));

-- 2)Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5); -- '15.75160'

-- 3)Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494); -- 39

-- 4)Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);
