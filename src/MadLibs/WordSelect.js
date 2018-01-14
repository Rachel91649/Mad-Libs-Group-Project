import React from 'react';

const WordSelect = ({nouns, verbs, adjs, onChange}) => (

  <div>
    <select id="noun1" onChage={onChange}>
      {nouns.map(noun => (
        <option name="noun1" value={noun}>{noun}</option>
      ))} 
    </select>
    <select id="verb" onChage={onChange}>
      {verbs.map(verb =>(
        <option value={verb}>{verb}</option>
      ))}
    </select>
    <select id="noun2" onChage={onChange}>
      {nouns.map(noun => (
        <option value={noun}>{noun}</option>
      ))} 
    </select>
    <select id="adj" onChage={onChange}>
      {adjs.map(adj => (
        <option value={adj}>{adj}</option>
      ))}
    </select>

    <button id="generate">Generate</button>
  </div>
)

export default WordSelect;