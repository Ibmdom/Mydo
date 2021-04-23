import React from 'react';
import './search-panel.css'

const SearchPanel = (props) => {
  const searchText = 'Type here to search';
    return (
    // <div>
      <input className="search-input"
        onChange={(e) => props.findIt(e.target.value)}
        placeholder={searchText} />

    // </div>
    )
};

export default SearchPanel;