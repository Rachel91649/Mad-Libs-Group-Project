import React from "react";



class MadLibs extends React.Component {
  constructor() {
    super();
    //State is going to hold the words the user selects
    this.state = {
      nouns: [],
      verbs: [],
      adj: []
    };
  }


  //componentDidMount
  //This will get the words from API calls

  //user selects words from dropdown boxes
  //selected words update the appropriate state
  const Selections = () => (
    return (
      <div>
        <select id="noun1">
          <option></option>
        </select>
        <select id="verb">
          <option></option>
        </select>
        <select id="noun2">
          <option></option>
        </select>
        <select id="adj">
          <option></option>
        </select>
      </div>
    )
  )

  //handle wordSelect

  //handleGenerateMadlib
  //This is a button that will generate the madLib with chosen words(held in state)
  //and render the completed madlib to the page


  render() {
    return (
      <div>
        <h1>madLibsC component rendered here</h1>
      </div>
    );
  }

}