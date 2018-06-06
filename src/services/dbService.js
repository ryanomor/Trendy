import axios from "axios";

const createUser = user => {
    return axios.post(`http://localhost:8080/users`, user);
};

const addFave = song => {
    return axios.post(`http://localhost:8080/faves`, song);
};

const updateUser = user => {
    axios.patch(`http://localhost:8080/users/${user.id}`, user);
};

const getUsers = user => {
    return axios.get(`http://localhost:8080/users`);
};

const getUserById = user => {
    return axios.get(`http://localhost:8080/users/${user.id}`);
};

const getUserByEmail = user => {
    return axios.get(`http://localhost:8080/users/login/${user.email}`);
};

const getUsersFriends = user => {
    return axios.get(`http://localhost:8080/friends/${user.id}`);
};

const getFriendById = (friendship) => {
    return axios.get(`http://localhost:8080/users/${friendship.friendId}`);
};

const getUsersFavorites = user => {
    return axios.get(`http://localhost:8080/faves/${user.id}`);
};

const deleteUsersFriend = friend => {
    return axios.delete(`http://localhost:8080/friends/${friend.id}`); // ID of relation, not the actual friend or user id
};

const deleteFavorite = favorite => {
    return axios.delete(`http://localhost:8080/faves/${favorite.id}`); // ID of favorite object in db
};

export default {
    addFave,
    createUser,
    updateUser,
    getUsers,
    getUserById,
    getUserByEmail,
    getUsersFriends,
    getUsersFavorites,
    deleteFavorite,
    deleteUsersFriend
}