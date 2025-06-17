CREATE TABLE person (
    id          SERIAL          PRIMARY KEY,
    name        VARCHAR(255)    NOT NULL,
    surname     VARCHAR(255)    NOT NULL,
    middle_name VARCHAR(255),
    age         INT             NOT NULL
);

CREATE TABLE posts (
    id          SERIAL          PRIMARY KEY,
    title       VARCHAR(255)    NOT NULL,
    content     VARCHAR(4096)   NOT NULL,
    image_path  NVARCHAR(255),
    person      INT             NOT NULL,
    
    FOREIGN KEY (person) REFERENCES person (id) ON DELETE CASCADE;
);

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