DROP DATABASE IF EXISTS test_db;    

CREATE DATABASE test_db;    

\c test_db;        

CREATE TABLE message(
id SERIAL PRIMARY KEY,
value varchar(50),
);    
insert into message(value)
values "Teste teste!!";