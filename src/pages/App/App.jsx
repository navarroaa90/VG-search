import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import GamePage from '../GamePage/GamePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage';
import GameSearchPage from '../GameSearchPage/GameSearchPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Character: []
    }
  }

  /*----- callback methods --------*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

/*---- Lifecycle Methods ----*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
       <header className='header-footer'> VG Search</header>
       <Router>
         <Switch>
        <Route exact path='/' render={() => 
          <HomePage
          user={this.state.user}
          handleLogout={this.handleLogout}
          />
      }/>
      <Route exact path='/search' render={() => 
          <GamePage
          user={this.state.user}
          handleLogout={this.handleLogout}
          />
      }/>
      <Route exact path='/gamesearch' render={() => 
          <GameSearchPage
          user={this.state.user}
          handleLogout={this.handleLogout}
          />
      }/>
      <Route exact path='/signup' render={(props) => 
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
