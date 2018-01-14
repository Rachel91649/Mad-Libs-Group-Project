import React from 'react';
import { Link } from 'react-router-dom';

const MadLibsC = ({ noun1, verb, noun2, adjective }) => (
  <div>
    <h1> A Sweet and Sour Past </h1>

    <h2>The Story That Starts Sour And Ends Sweet ! </h2>

    <p> `Sometimes, you don't only need to use your ${noun1} to know how to ${verb}
      a thing but you need your ${noun2} to see if it's ${adjective}` </p>

  </div>
)

export default MadLibsC;