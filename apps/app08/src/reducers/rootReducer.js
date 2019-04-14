import {ADD_NOTE, REMOVE_NOTE} from '../actions/noteActions';

const DEFAULT = 'DEFAULT';

const INIT_STATE = {
  notes: [
    {
      id: 1,
      note: 'First Note.'
    },
    {
      id: 2,
      note: 'Hello World!'
    }
  ]
};

const rootReducer = (state = INIT_STATE, action) => {

  const literalSwitch = {

    [ADD_NOTE]: () => {
      const maxId = Math.max(...state.notes.map(note => note.id), 0);
      return {
        ...state,
        notes: [...state.notes, {
          id: maxId + 1,
          note: action.note
        }]
      };
    },

    [REMOVE_NOTE]: () => {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.noteId)
      };
    },

    [DEFAULT]: () => {
      return state;
    }

  };

  return (literalSwitch[action.type] || literalSwitch['DEFAULT'])();

  // switch (action.type) {
  //   case 'ADD_NOTE':
  //     const maxId = Math.max(...state.notes.map(note=>note.id));
  //     return {
  //       ...state,
  //       notes: [...state.notes, {id:maxId + 1, note:action.note}]
  //     };
  //   default:
  //     return state;
  // }

};

export default rootReducer;
