import React from 'react';
import {connect} from 'react-redux';
import {handleAnswerQuestion} from '../actions/shared';

class AnswerQuestion extends React.Component {
    state={
        answer:'',
    }

    calculateVote=(question, user)=>{
        const votesOne = question.optionOne.votes;
        const votesTwo = question.optionTwo.votes;
        const totalVote = votesOne.length+votesTwo.length;
        let tempAnswer=false;
        if(user.answers[question.id] !== undefined){
            tempAnswer=true;
        }
       let votesOneP;
       let votesTwoP;
    
        if(votesOne.length===0 && votesTwo.length>0){
            votesTwoP=100;
        }else{
            votesTwoP=(votesTwo.length / totalVote)*100;
        }
    
        if(votesTwo.length===0 && votesOne.length>0){
            votesOneP=100;
         }else{
            votesOneP=(votesOne.length / totalVote)*100;
         }
    
         return{
            votesOneP:{
            percentage:votesOneP,
            numberOfVote:votesOne.length,},
            votesTwoP:{
                percentage:votesTwoP,
                numberOfVote:votesTwo.length,},
                answered:tempAnswer
            }
    
    }

    handleChange=(e)=>{
        const value = e.target.value;
        this.setState({
            answer:value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const{ answer } = this.state;
        const {dispatch, question, user}= this.props;
        dispatch(handleAnswerQuestion({
            authUser:user.id,
            id:question.id,
            answer:answer,
          }));
    }


  render() {
    const {  author, user, question, } =this.props;
    const {answered, votesOneP, votesTwoP} = this.calculateVote(question, user);
    return (
      <div className='question-card'>
          <div className='question-card-header'>
            <div className='question-card-image'>
            <img alt={author.name} src={`${author.avatarURL}`} />
            </div>
            <div className='question-card-author'>
            <p>{author.name}<br></br><small>@{author.id}</small></p>
            </div>
            <div className='clear-float'></div>
            <div>Would you rather?</div>
            </div>
            {!answered
            ?
            <div className='question-card-body'>
            <form onSubmit={this.handleSubmit}>
            <div className='question-card-option'>
            <input onChange={this.handleChange} type="radio" id="optionOne" name="option" value="optionOne" required/>
            <label for="optionOne">{question.optionOne.text}</label>
            </div>
            <div className='question-card-option'>
            <input onChange={this.handleChange} type="radio" id="optionTwo" name="option" value="optionTwo" required/>
            <label for="optionTwo">{question.optionTwo.text}</label></div>
            <div className='clear-float'></div>
            <div className='question-card-footer' style={{textAlign:"center"}}>
                <button type='submit' className='new-question-card-answer'>SUBMIT</button>
            </div>
            </form>
            </div>

            :<div className='question-card-body'>
            <div className='question-card-option'>
             <div>Would you rather {question.optionOne.text}?</div>   
            <div className='poll-outer'>
            <div className='poll-inner' style={{width:`${votesOneP.percentage}%`}}>{votesOneP.percentage.toFixed(2)}%</div>
            </div>
            <div>{votesOneP.numberOfVote} out of {votesOneP.numberOfVote + votesTwoP.numberOfVote}</div>
                </div>
                  <div className='question-card-option'>
                  <div>Would you rather {question.optionTwo.text}?</div>   
            <div className='poll-outer'>
            <div className='poll-inner' style={{width:`${votesTwoP.percentage}%`}}>{votesTwoP.percentage.toFixed(2)}%</div>
            </div>
            <div>{votesTwoP.numberOfVote} out of {votesOneP.numberOfVote + votesTwoP.numberOfVote}</div>
                    </div>
            <div className='clear-float'></div>
            </div>}
      </div>
    )
  }
}

function mapStateToProps({authUser, users, questions}, {id}){
    const question = questions[id];
    const user = users[authUser];
    const author = users[question.author];

    return {
        author,
        question,
        user,
    }
}

export default connect(mapStateToProps)(AnswerQuestion);
