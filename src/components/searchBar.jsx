
import React, { useState } from 'react';
import './searchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchValue);
  };

  return (
    <div className='search-container'>
    <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' className='google-logo' alt='google logo'/>
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button className="search-button" type="submit">Search</button>
      <br />
      <br />
      <button className="lucky-button" type="submit">I'm Feeling Lucky</button>
  
      <button className="language" type="submit">Language</button>
    </form>
  </div>
  );

}

export default SearchBar;