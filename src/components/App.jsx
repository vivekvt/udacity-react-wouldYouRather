import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import Nav from './Nav';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import {unsetAuthUser} from '../actions/authUser';
import Login from './Login';

class App extends React.Component {

  logoutUser=()=>{
    this.props.dispatch(unsetAuthUser(null));
  }

  render() {
    return (
      <Router>
      <React.Fragment>
      <LoadingBar />
      <div className='container'>
        {this.props.loading === true 
        ? <React.Fragment>
          <Route exact path='/login' component={Login} />
        <Redirect to='/login' />
        </React.Fragment>
        : 
        <div>
          <Nav logoutUser={this.logoutUser} name={this.props.loading === false && this.props.user.name}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/question/:id' component={QuestionPage} />
          <Route exact path='/new' component={NewQuestion} />
        </div>
        }
      </div>
      </React.Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authUser, users}){
  const user = users[authUser];
  return {
    loading: authUser===null,
    user,
  }
}


export default connect(mapStateToProps)(App);
