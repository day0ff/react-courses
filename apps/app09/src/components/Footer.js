import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {removeUser} from '../actions/userActions';

class Footer extends PureComponent {

  handleDelete = (id) => {
    this.props.removeUser(id);
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
    removeUser: (userId) => {
      dispatch(removeUser(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
