import React from 'react'
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const GameSearchPage = (props) => {
    return(
        <div>
           <NavBar user={props.user} handleLogout={props.handleLogout} />
           <Link className='home-link' to="/">Home</Link>
           &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <Link className='character-search' to="/search">Character Search</Link> <br/>
           <h1> Game Search </h1>
    

        </div>
    )
}

export default GameSearchPage