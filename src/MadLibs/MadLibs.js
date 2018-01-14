import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import MadLibsAPI from "./MadLibsAPI"
import WordSelect from "./WordSelect";


class MadLibs extends React.Component {
  constructor() {
    super();
    //State is going to hold the words the user selects
    this.state = {
      noun1: "",
      noun2: "",
      verbs: "",
      adj: ""
    };
  }






  //componentDidMount
  //This will get the words from API calls

  //user selects words from dropdown boxes
  //selected words update the appropriate state
  

  //handle wordSelect
  
=======
 

  //handleGenerateMadlib
    //This is a button that will generate the madLib with chosen words(held in state)
    //and render the completed madlib to the page

  //renderMadLibsC

  //handle wordSelect
  handleWordSelect = e => {
    this.setState({
      noun1: e.target.value
    });
  }

  //renderWordSelect
  renderWordSelect = () => {

    const nouns = MadLibsAPI.getListNoun();
    const verbs = MadLibsAPI.getListVerb();
    const adjs = MadLibsAPI.getListAdjective();
    // console.log(nouns);
    return (
      <div>
      <WordSelect
        nouns={nouns}
        verbs={verbs}
        adjs={adjs}
        onChange={this.handleWordSelect}
      />
      
      </div>
    );

  }

  
  
  //Main Component Render
  render() {
    const { noun1 } = this.state;
    return (
      <div>
        <Route exact path="/madlibs" render={this.renderWordSelect}/>
        
        <h1>madLibsC component rendered here {noun1}</h1>
      </div>
    );
  }

}

export default MadLibs;