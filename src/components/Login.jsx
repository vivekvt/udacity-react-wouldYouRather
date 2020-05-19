import React from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import { withRouter} from 'react-router-dom';

class Login extends React.Component {
state = {
    id:''
}

handleChange=(e)=>{
const id = e.target.value;
this.setState({id});
}

loginUser=(e)=>{
    e.preventDefault();
    const {id}=this.state;
    if(id!==''){
        this.props.dispatch(handleInitialData(id));
        this.props.history.push(`/`);
    }else{
        alert('Please Select User')
    }
    
  }

  render() {
    return (<div className='login-div'>
        <h1>Would You Rather ?</h1>
            <form onSubmit={this.loginUser}>
                <select onChange={this.handleChange} value={this.state.id}>
                    <option value=''>Select User</option>
                    <option value='vivekvt'>vivekvt</option>
                    <option value='tylermcginnis'>tylermcginnis</option>
                    <option value='sarahedo'>sarahedo</option>
                    <option value='johndoe'>johndoe</option>
                </select><br/>
                <button type='submit'>Login</button>
            </form>
        </div>)
  }
}


export default withRouter(connect()(Login));
