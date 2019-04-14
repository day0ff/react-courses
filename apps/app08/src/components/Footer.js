import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {removeNote} from '../actions/noteActions';

class Footer extends PureComponent {

  handleDelete = (id) => {
    this.props.removeNote(id);
  };

  render() {
    return (
      <footer>
        <h2>List of notes:</h2>
        <ol>
          {
            this.props.notes
              .map(note => (
                <li key={note.id}>{note.note}
                  <button onClick={()=>this.handleDelete(note.id)}>&ndash;</button>
                </li>))
          }
        </ol>
      </footer>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeNote: (noteId) => {
      dispatch(removeNote(noteId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
// export default connect((state) => ({notes: state.notes}), {removeNote})(Footer);
