import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage';
// import GameSearchPage from '../GameSearchPage/GameSearchPage';
import CSearch from '../../components/CSearchForm/CSearch'
class App extends Component {
  constructor() {
    super();
    this.state = {
      Character: null
    }

  }

  /*----- callback methods --------*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignup = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*---- Lifecycle Methods ----*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
  }


  render() {
    console.log('app getuser =', userService.getUser())
    return (
      <div className="App">
        <header className='header-footer'>
        </header>

        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path='/' render={() =>
            <HomePage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />
          <Route exact path='/search' render={(props) => (
            !userService.getUser() ?
              <Redirect to='/' />
              :
              <CSearch
                user={this.state.user}
                handleLogout={this.handleLogout}
              />

          )} />
          {/* <Route exact path='/gamesearch' render={() => 
          <GameSearchPage
          user={this.state.user}
          handleLogout={this.handleLogout}
          />
      }/> */}
          <Route exact path='/signup' render={(props) => (
            userService.getUser() ?
              <Redirect to='/' />
              :
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
          )} />
          <Route exact path='/login' render={(props) => (
            userService.getUser() ?
              <Redirect to='/' />
              :
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
          )} />
        </Switch>

      </div>
    );
  }
}

export default App;
