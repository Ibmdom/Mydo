import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddList from '../add-list';


import './app.css';

class App extends Component  {
   maxId = 1;

   state = {
    todoData: [
      this.createTodoItem('React Learn'),
      this.createTodoItem('Learn English'),
      this.createTodoItem('Build Awesome App'),
      this.createTodoItem('Drink Milk'),
      this.createTodoItem('Drink Coffe'),
   ], 
   textFind: '',
   filter: 'all'   // All, Active, Done
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  onDelete = (idi) => {
    this.setState(({todoData})=>{
      return {todoData : todoData.filter((item) => item.id !== idi)};
    })
  }

  addNewItem = (text) => {
    this.setState(({todoData})=>{
      const newArr = todoData.map(item => item);
      newArr.push(this.createTodoItem(text))
      return {todoData : newArr};
    })  
  }

  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
     return {todoData : this.toggleProperty(todoData, id, 'important')};
    })  
  }

  onToggleDone = (id) => {
    this.setState(({todoData})=>{
      return {todoData : this.toggleProperty(todoData, id, 'done')};
    })      
  }

  toggleProperty(arr, id, item) {
    return arr.map((el) => {
      if (el.id === id) el[item] = !el[item];
        return el;
    });
  }  

  findElem(arr, text) {
    if (text === '') {
      return arr;
    }
    return arr.filter(el=> el.label.toUpperCase().includes(text.toUpperCase()));
  }
  
  filterElem(arr, filter) {
    switch (filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter((e)=>!e.done);
      case 'done':
        return arr.filter((e)=>e.done);
      default:  
        return arr;
    }
  }

  changeTextFind = (textFind) => {
   this.setState({textFind}) 
  }  

  setFilter = (filter) => {
    this.setState({filter})
  }

  render () {
    const {todoData, textFind, filter} = this.state;
    const visibleDo = this.filterElem(this.findElem(todoData, textFind), filter);
    const stod = [
      todoData.length-todoData.filter((el)=>el.done).length,
      todoData.filter((el)=>el.done).length
    ];
  

  return (
    <div className="todo-app">
    <AppHeader stodo = {stod} /> 
    < div className="top-panel d-flex">
       <SearchPanel findIt = {this.changeTextFind }/>
       <ItemStatusFilter filter = {filter} setFilter = {this.setFilter}/>
    </div>
    <TodoList
       todos = {visibleDo}
       onDeleted = { this.onDelete }
       onToggleImportant = {this.onToggleImportant}
       onToggleDone = {this.onToggleDone}
       />
    <AddList addlist = {this.addNewItem} />   
  </div>
  )}
};

export default App;
