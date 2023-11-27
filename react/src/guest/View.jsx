import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom';

const View = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="login">About</Link>
        </li>
        <li>
          <Link to="Buku">Contact</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </div>
  );
}

export default View;