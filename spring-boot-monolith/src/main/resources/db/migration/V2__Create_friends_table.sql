create table FRIENDS (
    ID SERIAL PRIMARY KEY,
    FRIEND_ID INTEGER, FOREIGN KEY(FRIEND_ID) REFERENCES USERS(id),
    USER_ID INTEGER, FOREIGN KEY(USER_ID) REFERENCES USERS(id)
);