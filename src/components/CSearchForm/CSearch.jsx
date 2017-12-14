import React, {Component} from 'react';

// import tokenService from '../../'


class CSearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name : ''
      }
    }
    
    handleSubmit(e){
      e.preventDefault()
      console.log('submiiting');
      fetch('/api/characters', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',

        }),
        body: JSON.stringify({test: 'hello'})     
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
   
   
    render() {
      return (
        <div>
        <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)} >
        <div className="form-group">
        <div className="col-sm-12">
          <input type="name" className="form-control" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
          <div className="col-sm-12 text-center">
              <button className="btn btn-default">Search</button>&nbsp;&nbsp;
            </div>
        </div>
        </div>
      </form>
      </div>
      );
    };
  
  }
  
  export default CSearchForm;

  
  
  
  
