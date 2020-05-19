import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Question extends React.Component {

  render() {
    const {user, question, } =this.props;
    return (
      <div className='question-card'>
          <div className='question-card-header'>
            <div className='question-card-image'>
            <img alt={user.name} src={`${user.avatarURL}`} />
            </div>
            <div className='question-card-author'>
            <p>{user.name}<br></br><small>@{user.id}</small></p>
            </div>
            <div className='clear-float'></div>
            <div>Would you rather?</div>
            </div>
            <div className='question-card-body'>
            <div className='question-card-option'>{question.optionOne.text}</div>
                  <div className='question-card-option'>{question.optionTwo.text}</div>
                  <div className='clear-float'></div>
              </div>
          <div className='question-card-footer'>
              <Link to={`/question/${question.id}`}>
              <div className='question-card-answer'>View Poll</div>
              </Link>
          </div>
      </div>
    )
  }
}

function mapStateToProps({authUser, users}, {question}){
    const user = users[question.author];
    return {
        authUser,
        question,
        user,
    }
}

export default connect(mapStateToProps)(Question);
