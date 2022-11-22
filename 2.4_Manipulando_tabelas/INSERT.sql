-- 1)Insira um novo funcionário na tabela sakila.staff.
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');
    
-- 2) Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Jeff', 'Bezos', 2, 'jeffbezos@gmail.com', 1, 1, 'jeffb', 'ImTheChamp'),
    ('Sekiro', 'Okami', 2, 'sekirowolf@gmail.com', 1, 1, 'okami', 'SekiroTheSamurai');
SELECT * FROM sakila.staff;

-- 3) Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor(first_name, last_name)  -- inserindo dentro da tabela actor
SELECT first_name, last_name FROM sakila.customer   -- pegando os dados firs e last da tabela customer_list
ORDER BY customer_id  -- ordenando pelo id
LIMIT 5;  -- limitando 5 pessoas para enviar para tavela actor

SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;

-- 4)Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');

SELECT * FROM sakila.category;
-- 5) Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

SELECT * FROM sakila.store;





