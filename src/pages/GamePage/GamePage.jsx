import React from 'react';
import {Link} from 'react-router-dom';
import './GamePage.css';
import NavBar from '../../components/NavBar/NavBar';

const GamePage = (props) => {
    return (
        <div className="GamePage-game">
              <NavBar user={props.user} handleLogout={props.handleLogout} />

        </div>
    )
}

export default GamePage;