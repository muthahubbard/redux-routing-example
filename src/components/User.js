import React from 'react';

export const User = ({user, setName}) => (
  <div>
    <h1>Hello - {user.name}</h1>
    <button onClick={ () => setName('ajsjaisjisjia')}>Do something</button>
  </div>
);