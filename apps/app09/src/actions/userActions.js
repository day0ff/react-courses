const GET_USERS = 'GET_USERS';
const REMOVE_USER = 'REMOVE_USER';

const getUsers = users => ({
  type: GET_USERS,
  users
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});

const loadUsers = () => dispatch => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((result) => dispatch({
      type: 'GET_USERS',
      users: result
    }))
};


export {
  GET_USERS,
  getUsers,
  loadUsers,
  REMOVE_USER,
  removeUser
};
