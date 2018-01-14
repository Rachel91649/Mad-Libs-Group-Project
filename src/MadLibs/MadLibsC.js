import React from 'react';
import { Link } from 'react-router-dom';

const MadLibsC = ({ noun1, noun2, verbs, adj }) => (
  <div>
    <h1> A Sweet and Sour Past </h1>

    <h2>The Story That Starts Sour And Ends Sweet ! </h2>

    <p> Sometimes, you don't only need to use your {noun1} to know how to {verbs}
      {" "}a thing but you need your {noun2} to see if it's  {adj} </p>

  </div>
)

export default MadLibsC;