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
   
    // fetch("/api/characters")
    // .then(data => data.json())
    // .then(data => this.setState({character: data}))
  }


  render() {
    return (
      <div className="App">
       <header className='header-footer'> 
       </header>
       <Router>
         {/* <NavBar user={props.user} handleLogout={props.handleLogout}/> */}
         <Switch>
        <Route exact path='/' render={() => 
          <HomePage
          user={this.state.user}
          handleLogout={this.handleLogout}
          />
      }/>
      <Route exact path='/search' render={(props) => 
          <CSearch 
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
