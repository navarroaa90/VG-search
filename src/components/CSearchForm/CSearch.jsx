import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CSearch.css'
import {Card, Row, Col} from 'react-materialize';

class CSearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name : [],
        image: '',
        deck: []
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
          deck: res[0].deck,
          games: res[0].games
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
           <Link className='home-link' to="/">Home</Link>
                <h3 className='search-title'> Character Search</h3>
        
        <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)} >
        <div>
        <div className="searchfield ">
          <input className="searchbar" placeholder="Discover A Character Here!" ref='name'  />
          <div className="col-sm-12 text-center">
              <button className="btn btn-default">Search</button>&nbsp;&nbsp;
            </div>
        </div>
        </div>
      </form>
          <Row>
            <Col m={4}></Col>
            <Col m={4}>
          <Card>
          <img className="card-img-top"src={this.state.image}/>
          <p className="card-title">{this.state.name}</p>
          <p className="card-text">{this.state.deck}</p>
         </Card>
         </Col>
         <Col m={4}></Col>
         </Row>
        </div>
      );
    };
  
  }
   export default CSearchForm;

  
  
 
  
