import React, { Component } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';


class Nav extends Component {
    render () {
      return (
         <nav>
           <ul className="nav-links">
             <Link to="/home">
              <li> Home </li>
             </Link>
             <Link to="/employee">
              <li> Employee </li>
             </Link>
             <Link to="/redux">
              <li> Redux </li>
             </Link>
           </ul>
         </nav>
      )
    }
  }

  export default Nav