CREATE TABLE customers (
                       id SERIAL PRIMARY KEY,
                       username VARCHAR NOT NULL,
                       password VARCHAR NOT NULL,
                       first_name VARCHAR NOT NULL,
                       last_name VARCHAR NOT NULL
)