CREATE TABLE cakes(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC NOT NULL,
    image VARCHAR(200) NOT NULL,
    description TEXT 
);

CREATE TABLE clients(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address VARCHAR(200) NOT NULL,
    phone VARCHAR(11) NOT NULL
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    "clientId" INTEGER NOT NULL REFERENCES clients(id),
    "cakeId" INTEGER NOT NULL REFERENCES cakes(id),
    quantity INTEGER NOT NULL,
    "createdAt" TIMESTAMP,
    "totalPrice" NUMERIC
);