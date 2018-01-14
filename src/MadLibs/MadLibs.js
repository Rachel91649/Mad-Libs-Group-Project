import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import MadLibsAPI from "./MadLibsAPI"
import WordSelect from "./WordSelect";
import MadLibsC from "./MadLibsC";

class MadLibs extends React.Component {
  constructor() {
    super();
    //State is going to hold the words the user selects
    this.state = {
      noun1: "",
      noun2: "",
      verbs: "",
      adj: "",
      show1: ""
    };
  }


  //handleGenerateMadlib
  //This is a button that will generate the madLib with chosen words(held in state)
  //and render the completed madlib to the page

  //renderMadLibsC
  renderMadLibsC = () => {
    const { noun1, noun2, verbs, adj } = this.state;
    if (noun1 !== "" && noun2 !== "" && verbs !== "" && adj !== "") {
      return (
        <MadLibsC
          noun1={noun1}
          noun2={noun2}
          verbs={verbs}
          adj={adj}
        />
      )
    }
  }

  //handle wordSelect
  handleWordSelect = e => {
    let noun1 = document.getElementById('noun1').value;
    let noun2 = document.getElementById('noun2').value;
    let verb = document.getElementById('verbs').value;
    let adj = document.getElementById('adj').value;

    this.setState({
      noun1: noun1,
      noun2: noun2,
      verbs: verb,
      adj: adj
    });
  }

  //renderWordSelect
  renderWordSelect = () => {
    const renderMadLibsC = this.renderMadLibsC()
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
          onClick={this.handleWordSelect}
        />

      </div>
    );

  }



  //Main Component Render
  render() {
    const { noun1, noun2, verbs, adj } = this.state;
    return (
      <div>
        <Route exact path="/madlibs" render={this.renderWordSelect} />


        <p>
          {noun1 !== "" && noun2 !== "" && verbs !== "" && adj !== "" ? <MadLibsC
            noun1={noun1}
            noun2={noun2}
            verbs={verbs}
            adj={adj}

          /> : <div></div>}</p>
      </div>

    );
  }

}

export default MadLibs;
