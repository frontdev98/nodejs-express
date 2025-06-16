CREATE TABLE agent (
    id          SERIAL          PRIMARY KEY,
    name        VARCHAR(255)    NOT NULL,
    version     VARCHAR(255)    NOT NULL UNIQUE
);

CREATE TABLE os (
    id          SERIAL          PRIMARY KEY,
    name        VARCHAR(255)    NOT NULL,
    version     VARCHAR(255)    NOT NULL UNIQUE
);

CREATE TABLE device (
    id          SERIAL          PRIMARY KEY,
    name        VARCHAR(255)    NOT NULL,
    version     VARCHAR(255)    NOT NULL UNIQUE
);

CREATE TABLE connection (
    id          SERIAL          PRIMARY KEY,
    ip          VARCHAR(255)    NOT NULL,
    date        TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    agent       INT,
    os          INT,
    device      INT,

    FOREIGN KEY (agent) REFERENCES agent (id),
    FOREIGN KEY (os) REFERENCES os (id),
    FOREIGN KEY (device) REFERENCES device (id)
);