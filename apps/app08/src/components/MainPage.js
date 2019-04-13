import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

const INIT_STATE = {note: ''};

class MainPage extends PureComponent {

  constructor() {
    super();
    this.state = {...INIT_STATE};
  }

  handleChange = (event) => {
    this.setState({note: event.target.value});
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.addNote(this.state.note);
    this.setState({...INIT_STATE});
  };

  render() {
    return (
      <article>
        <input type="text" value={this.state.note} onChange={this.handleChange}
               placeholder="Type new note."/>
        <button onClick={this.handleClick}>Add</button>
      </article>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {
      dispatch({type: 'ADD_NOTE', note});
    }
  };
};


export default connect(null, mapDispatchToProps)(MainPage);
// export default connect(null, {addNote})(MainPage);
