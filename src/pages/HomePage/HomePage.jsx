import React from 'react'
import {Link} from 'react-router-dom';
import './HomePage.css';

const Home = (props) => {
    return(
        <div className='home-page'>
    
           <Link className='home-link' to="/">Home</Link>
           &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <Link className='character-search' to="/search">Character Search</Link>
           <div className='background'>
           <h4 className='title1'> VGC Search</h4>
           </div>
           <div>
            <p className='home-text'>Search for your favorite Video Game Characters!</p>
               </div>
        </div>
    )
}

export default Home