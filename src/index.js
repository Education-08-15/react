import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
// (
//   <div>
//     <h1>Hello</h1>
//     <h1>Hello</h1>
//   </div>
// );

// return React.createElement(
//   'h1',
//   { className: 'title' },
//   'Hello World',
//   React.createElement('div', 'h1', 'Hey'),
// );

// [<h1>Hello</h1>, <h2>Hello World</h2>]

//ReactDOM.render takes the component we made as a first argument and the location to place it as an second argument which is in index.html
ReactDOM.render(<App />, document.getElementById('root'));
