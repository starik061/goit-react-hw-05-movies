import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayoutHeader = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayoutHeader;
