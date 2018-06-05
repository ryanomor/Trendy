import axios from "axios";

export const createUser = (user) => {
    axios.post(`http://localhost:8080/users/`, user);
};

export const addFave = (song) => {
    return axios.post(`http://localhost:8080/faves`, song);
};

export const updateUser = (user) => {
    axios.patch(`http://localhost:8080/users/${user.id}`, user);
};

export const getUsers = (user) => {
    return axios.get(`http://localhost:8080/users`);
};

export const getUserById = (user) => {
    return axios.get(`http://localhost:8080/users/${user.id}`);
};

export const getUserByEmail = (user) => {
    return axios.get(`http://localhost:8080/users/login/${user.email}`);
};

export const getUsersFriends = (user) => {
    return axios.get(`http://localhost:8080/friends/${user.id}`);
};

export const getFriendById = (friendship) => {
    return axios.get(`http://localhost:8080/users/${friendship.friendId}`);
};

export const getUsersFavorites = (user) => {
    return axios.get(`http://localhost:8080/faves/${user.id}`);
};

export const deleteUsersFriend = (friend) => {
    return axios.delete(`http://localhost:8080/faves/${friend.id}`); // ID of relation, not the actual friend or user id
};