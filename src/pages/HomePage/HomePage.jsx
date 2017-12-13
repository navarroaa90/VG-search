import React from 'react'
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const Home = (props) => {
    return(
        <div>
           <NavBar user={props.user} handleLogout={props.handleLogout} />
           <Link className='home-link' to="/">Home</Link>
           &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <Link className='character-search' to="/search">Character Search</Link>
           &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <Link className='game-search' to="/gamesearch">Game Search</Link>
        </div>
    )
}

export default Home