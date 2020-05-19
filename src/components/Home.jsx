import React from 'react';
import {connect} from 'react-redux';
import Question from './Question';

class Home extends React.Component {
  
  state={
    showAnswered:false
  }

  toggleQuestions = (vt)=>{
    const {showAnswered}=this.state;
    if(showAnswered!==vt){
      this.setState({
        showAnswered:!showAnswered
      })
    }
  }

  render() {
    const {showAnswered}=this.state;
    let {questions, users, authUser}=this.props;
    const answered = users[authUser].answers;
    if(showAnswered){
      questions = questions.filter((q)=>{
        let matched = false;
        Object.keys(answered).forEach((a)=>{
          if(a===q.id){
            matched=true;
            return true;
          }
        });
        return matched;
      });
    }else{
      questions = questions.filter((q)=>{
        let matched = true;
        Object.keys(answered).forEach((a)=>{
          if(a===q.id){
            matched=false;
            return true;
          }
        });
        return matched;
      });

    }
    
    return (
      <div>
        <div className='toggle-questions'>
          <ul type='none' className='toggle-button'>
            <li style={{backgroundColor:!showAnswered &&'rgb(33, 95, 182)'}}
             onClick={()=>this.toggleQuestions(false)}>Unanswered</li>
            <li style={{backgroundColor:showAnswered &&'rgb(33, 95, 182)'}}
            onClick={()=>this.toggleQuestions(true)}>Answered</li>
          </ul>
        </div>
          <ul type='none'>
          {
              questions.map((question)=>
              (<li key={question.id}>
                <Question question={question} allowAnswer={false} />
                </li>))
          }
          </ul>
          
      </div>
    )
  }
}

function mapStateToProps({questions, authUser, users}){
  return {
      questions:Object.keys(questions).map(key => questions[key])
      .sort((a, b)=> b.timestamp - a.timestamp),
      authUser, users,

  }
}

export default connect(mapStateToProps)(Home);
