import React, {Component} from 'react';
import GamePage from '../../pages/GamePage/GamePage'
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';



class CSearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name : [],
        image: '',
        deck: [],
        description: []
      }
    }
    
    handleSubmit(e){
      e.preventDefault()
      const formData = {
        search: this.refs.name.value
      }
      console.log('submitting', formData.search);
      fetch('/api/characters', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',

        }),
        body: JSON.stringify({name: formData.search})     
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          name: res[0].name,
          image: res[0].image.medium_url,
          deck: res[0].deck
        })
        console.log(this.state.image)
      })
      this.refs.name.value = ''
      // .catch(err => console.log(err))  
    }

    // handleChange(field, e) {
    //   this.setState({
    //     // Using ES2015 Computed Property Names
    //     [field]: e.target.value
    //   });
    // }
   
   
    render() {
      return (
        <div>
                   <NavBar />
           <Link className='home-link' to="/">Home</Link>
           &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <Link className='game-search' to="/gamesearch">Game Search</Link><br/>
                <h1> Character Search</h1>
        
        <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)} >
        <div className="form-group">
        <div className="col-sm-12">
          <input type="name" className="form-control" placeholder="name" ref='name'  />
          <div className="col-sm-12 text-center">
              <button className="btn btn-default">Search</button>&nbsp;&nbsp;
            </div>
        </div>
        </div>
      </form>
      <div>
          {/* <ul>
              {this.state.name ? this.state.name.map((character, idx) => {
                  return <li key={idx} >{character}</li>
              }): <h1>Loading</h1>}
          </ul> */}
          <h1>{this.state.name}</h1>
          <h2>{this.state.deck}</h2>
          <img src={this.state.image}/>
          <body>{this.state.description}</body>
          </div>
     
      </div>
      );
    };
  
  }
  
  export default CSearchForm;

  
  
  // onChange={(e) => this.handleChange('name', e)}
  
