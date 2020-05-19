import React from 'react';
import {connect} from 'react-redux';
import {handleAddQuestion} from '../actions/shared';
import {Redirect} from 'react-router-dom';

class NewQuestion extends React.Component {
    state={
        optionOne:'',
        optionTwo:'',
        toHome:false,
    }
    handleChange=(e)=>{
        const {value, name} = e.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const{ optionOne, optionTwo } = this.state;
        const {dispatch}=this.props;
        if(optionOne!=='' && optionTwo!==''){
        dispatch(handleAddQuestion(optionOne, optionTwo));
        this.setState({
            optionOne:'',
            optionTwo:'',
            toHome:true,
        });
        }
        
    }

  render() {
      const {optionOne, optionTwo, toHome}=this.state;
      if(toHome === true){
        return <Redirect to='/' />
        }
    return (
      <div className='question-card'>
          <div className='question-card-header'>
            <div style={{textAlign:'center'}}><h1>Would you rather?</h1></div>
            </div>
            <form onSubmit={this.handleSubmit}>
            <div className='question-card-body'>
            <input onChange={this.handleChange} className='new-question-input' 
                type='text' placeholder='Option 1' name='optionOne'
                value={optionOne} required/>
            <input onChange={this.handleChange} className='new-question-input' 
                type='text' placeholder='Option 2' name='optionTwo'
                value={optionTwo} required/>
                <div className='clear-float'></div>
            </div>
            <div className='question-card-footer' style={{textAlign:"center"}}>
                <button type='submit' className='new-question-card-answer'>SUBMIT</button>
          </div>
          </form>
      </div>
    )
  }
}

export default connect()(NewQuestion);
