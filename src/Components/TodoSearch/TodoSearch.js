import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext/Context';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

    return (
      <div className='TodoSearch'>
        <input type='text' className='TodoSearch__holder' 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        placeholder="Search..." />
      </div>
    );
  }

export { TodoSearch };