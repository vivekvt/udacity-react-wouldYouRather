import React from 'react';
import {connect} from 'react-redux';
import AnswerQuestion from './AnswerQuestion';

class QuestionPage extends React.Component {

  render() {
    const {id} =this.props.match.params;
    return (
      <div>
          {
        id !== undefined && <AnswerQuestion id={id}/>
          }
      </div>
    )
  }
}

export default connect()(QuestionPage);
