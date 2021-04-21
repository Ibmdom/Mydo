import React, {Component} from 'react';


export default class ItemStatusFilter extends Component {
  state = {
    filter: 'All'
  }
  classButton(elem, filter, activFilt) {
    // console.log(elem, filter );
   if (elem===filter) {
    return  ('btn btn-info');
   } else {
     return ('btn btn-outline-secondary');
   } 
  }

  onChangeButton = (e) => {
    const filter = e.target.outerText;
    this.setState({filter});
    this.props.activFilt(filter);

  }

  
  render () {
    const allButton = ['All', 'Active', 'Done'];
    const {filter} = this.state;
    let visibleButton = allButton.map(
      elem => <button type="button" 
      key = {elem} 
      className={this.classButton(elem, filter)}
      onClick = {this.onChangeButton} >{elem}</button>);
  
    return (
       <div className="btn-group">
        {visibleButton} 
      </div>
      )
  }
};