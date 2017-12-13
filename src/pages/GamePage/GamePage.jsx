import React from 'react';
import {Link} from 'react-router-dom';
import './GamePage.css';
import NavBar from '../../components/NavBar/NavBar';


const GamePage = (props) => {
    return (
        <div className="GamePage-game">
                <NavBar user={props.user} handleLogout={props.handleLogout} />
           <Link className='home-link' to="/">Home</Link>
           &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <Link className='game-search' to="/gamesearch">Game Search</Link><br/>
           <h1> Character Search</h1>

        </div>
    )
}

export default GamePage;