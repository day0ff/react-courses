const ADD_NOTE = 'ADD_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';

const addNote = note => ({
  type: ADD_NOTE,
  note
});

const removeNote = noteId => ({
  type: REMOVE_NOTE,
  noteId
});


export {
  ADD_NOTE,
  addNote,
  REMOVE_NOTE,
  removeNote
};
