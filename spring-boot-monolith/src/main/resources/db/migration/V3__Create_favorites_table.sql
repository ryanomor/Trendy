create table TASKS (
    ID SERIAL PRIMARY KEY,
    USER_NAME VARCHAR,
    TASK VARCHAR(100) NOT NULL,
    COMPLETED INTEGER
);