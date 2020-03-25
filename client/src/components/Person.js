import React from 'react';
import {MyContext} from './Context';

const Person = props => (
  <MyContext.Consumer>
    {(context) => (
      <>
        <p>Age: {context.state.age}</p>
        <p>Name: {context.state.name}</p>
        <button onClick={context.growYearOlder}>birthday</button>
      </>
    )}
  </MyContext.Consumer>
)

export default Person;
