import React from 'react';

const allButton = [
  {key: 'all', label:'All'},
  {key: 'active', label: 'Active'},
  {key: 'done', label: 'Done'}
];

  function classButton(key, filter) {
    console.log(key, filter );
   if (key === filter) {
    return  ('btn btn-info');
   } else {
     return ('btn btn-outline-secondary');
   } 
  }
  
function ItemStatusFilter (props) {
  const {filter, setFilter} = props;
  let visibleButton = allButton.map(
    ({key, label}) => <button type="button" 
    key = {key} 
    className={classButton(key, filter)}
    onClick = {() => setFilter(key)} 
    >{label}</button>
  );
  
  return (
    <div className="btn-group">
    {visibleButton} 
    </div>
    )
};

export default ItemStatusFilter;