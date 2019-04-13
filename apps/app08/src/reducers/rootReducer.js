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

    'ADD_NOTE': () => {
      const maxId = Math.max(...state.notes.map(note => note.id));
      return {
        ...state,
        notes: [...state.notes, {
          id: maxId + 1,
          note: action.note
        }]
      };
    },

    'DEFAULT': () => {
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
