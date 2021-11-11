import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>T-RAP Landlord/Tenant Watch List</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Running List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Person
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
