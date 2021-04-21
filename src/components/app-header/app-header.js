import React from 'react';
import './app-hearder.css';

const AppHeader = ({stodo}) => {
  // {toDo, done}
   const [toDo, done] = stodo;
return (
  <div className="app-header d-flex">
     <h1>Mydo List</h1>
     <h2>{toDo} more to do, {done} done</h2>
   </div> 
)};

export default AppHeader;