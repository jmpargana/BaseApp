import React from 'react';
import axios from 'axios';

const API = 'http://localhost:3001/';
const QUERY = '';

export const MyContext = React.createContext();

// The Context Provider contains a global state that
// can be called from any child node in the DOM tree
//
// it initiates data with any required fetched data
// from an URI or database
//
// It can contain multiple global variables
// or functions to manipulate the state
//
// it all gets passed down with the context value
// by wrapping the consumer component with:
//
// <MyContext.Consumer>
//  {(context) => (
//    <!-- Example -->
//    <>
//      <p>Name: {context.state.name}</p>
//      <p>Age: {context.state.age}</p>
//      <button onClick={context.growYearOlder}>birthday</button>
//    </>
//  )}
// </MyContext.Consumer>
//
// on the render function
class MyProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name: 'Joao',
      age: 26,
    };
  }

  componentDidMount() {
    axios
      .get(API + QUERY, {})
      .then(res =>
        this.setState({
          data: res.data,
        }),
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growYearOlder: () => this.setState({
            age: this.state.age + 1
          }),
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
