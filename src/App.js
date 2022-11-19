import React from "react";
import PrintScores from "./ScoreSummary";
import "./App.css";
// const {scores} = require("./scores");
// import allCountryScores from "./highscore/scores.js";
function App() {
  // const scores = allCountryScores;
  return (
    <div className="ext-div">
      <div>
        <h1 className="header">High Score Per Country</h1>
        <PrintScores />
      </div>
    </div>
  );
}
export default App;