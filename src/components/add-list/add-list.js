import React, {Component} from 'react';
import './add-list.css';

export default class AddList extends Component {
// = ({addlist}) => {
state = { label:'' }



changeInput = (e)=> {
  this.setState({
    label: e.target.value
  })
}

submitForm = (e) => {
  e.preventDefault();
  this.props.addlist(this.state.label);
  this.setState({
    label: ''
  })
}

render () {  

  return (
    <form className='item-add-form d-flex'
      onSubmit={this.submitForm}
      >
      <input type="text" 
        className='form-control'  
        onChange={ this.changeInput }
        placeholder = 'What needs to be done'
        value = {this.state.label}
      ></input>
      <button className='btn btn-outline-secondary'
      // type="button" 
      // onClick={() => addlist(document.getElementById('myinput').value)}
      >AddItem</button>
    </form>   )
  }  
}

