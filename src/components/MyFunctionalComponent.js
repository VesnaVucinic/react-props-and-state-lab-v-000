import React from 'react';

// props is {name: "Howard"}
const MyFunctionalComponent = props => {
  
  return (
    <div>
    <h1>I'm a functional component! My name is {props.props.name} </h1>
  </div>
  )
}


export default MyFunctionalComponent
