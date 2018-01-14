import React from 'react';

const WordSelect = ({ nouns, verbs, adjs, onChange, renderMadLibsC, onClick }) => (

  <div>
    <select id="noun1">
      {nouns.map(noun => (
        <option name="noun1" value={noun}>{noun}</option>
      ))}
    </select>
    {" "}
    <select id="verbs">
      {verbs.map(verb => (
        <option name="verbs" value={verb}>{verb}</option>
      ))}
    </select>
    {" "}
    <select id="noun2">
      {nouns.map(noun => (
        <option name="noun2" value={noun}>{noun}</option>
      ))}
    </select>
    {" "}
    <select id="adj">
      {adjs.map(adj => (
        <option name="adj" value={adj}>{adj}</option>
      ))}
    </select>
    {" "}

    <button onClick={onClick} id="generate">Generate</button>
    {}
  </div>
)

export default WordSelect;
