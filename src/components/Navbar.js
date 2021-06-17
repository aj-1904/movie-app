import React from 'react';
import { render } from 'react-dom';
import { data } from '../data'

class Navbar extends React.Component {

    render() {
        return (
            <div className="nav">
              <div className="search-container">
                <input placeholder="Search a Movie..."/>
                <button id="search-btn">Search</button>
              </div>
            </div>
          );
    }
  
}

export default Navbar;
