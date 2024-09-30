
import React from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import routes from './Route';

function App() {
  return (
   <React.Suspense fallback={<div>Loading ...</div>}>
    <div className='App'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
         <div class="container-fluid">
        </div>
        <NavLink to="/" className="navbar-brand">
          navbar
        </NavLink>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/Product" className="nav-link">Product</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/Register" className="nav-link">Home</NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

        </div>
      </nav>
      </div>
    




<div className='main'>
  <Route>
    {
      routes.map((route, i) => {
    const {path, Component } =  route;
    return <Route key={i} path={path} element={<Component />} />;
      })}
  </Route>
 </div>

   </React.Suspense>
  );
}

export default App;
