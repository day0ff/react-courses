import {GET_USERS, REMOVE_USER} from '../actions/userActions';

const DEFAULT = 'DEFAULT';

const INIT_STATE = {
  users: []
};

const userReducer = (state = INIT_STATE, action) => {

  const literalSwitch = {

    [GET_USERS]: (users) => {
      return {
        ...state,
        users: [...users]
      };
    },

    [REMOVE_USER]: () => {
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.userId)
      };
    },

    [DEFAULT]: () => {
      return state;
    }

  };

  return (literalSwitch[action.type] || literalSwitch['DEFAULT'])();

};

export default userReducer;
