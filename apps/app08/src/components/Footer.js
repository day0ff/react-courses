import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Footer extends PureComponent {

  render() {
    return (
      <footer>
        <h2>List of notes:</h2>
        <ol>
          {
            this.props.notes.map(note =>
              (<li key={note.id}>{note.note}
                <button>&ndash;</button>
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

export default connect(mapStateToProps)(Footer);
// export default connect((state) => ({notes: state.notes}))(Footer);
