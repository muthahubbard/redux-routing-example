import React from 'react';
import { Link } from 'react-router';


export const User = ({user, setName, seoName}) => (
  <div>
    <h1>Hello - {user.name}</h1>
    <button onClick={ () => setName('ajsjaisjisjia')}>Do something</button>
  
    <Link to='/seoname1'>Link 1</Link>
    <Link to='/seoname2'>Link 2</Link>

    <p>Show some data based on URL</p>

    <h4>{seoName}</h4>

  </div>
);