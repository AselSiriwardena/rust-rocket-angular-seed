CREATE TABLE users
(
    id         SERIAL PRIMARY KEY,
    username   VARCHAR NOT NULL,
    password   VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL
)