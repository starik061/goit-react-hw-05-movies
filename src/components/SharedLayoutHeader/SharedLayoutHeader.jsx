import React, { Suspense } from 'react';
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayoutHeader;
