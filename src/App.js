import React, { useState} from "react";
import Pictures from "./images.js";
import Score from "./score.js";

import "./styles/style.css";
import silva from "./images/andresilva.png";
import bernardo from "./images/bernardo.png";
import bruno from "./images/bruno.png";
import cancelo from "./images/cancelo.png";
import cr7 from "./images/cr7.png";
import danilo from "./images/danilo.png";
import lopes from "./images/lopes.png";
import mendes from "./images/mendes.png";
import moutinho from "./images/moutinho.png";
import palhinha from "./images/palhinha.png";
import renato from "./images/renato.png";
import semedo from "./images/semedo.png";

var uniqid = require("uniqid");

function App() {
  const [game, setGame] = useState({
    pictures: [
      { id: uniqid(), pic: silva },
      { id: uniqid(), pic: bernardo },
      { id: uniqid(), pic: bruno },
      { id: uniqid(), pic: cancelo },
      { id: uniqid(), pic: cr7 },
      { id: uniqid(), pic: danilo },
      { id: uniqid(), pic: lopes },
      { id: uniqid(), pic: mendes },
      { id: uniqid(), pic: moutinho },
      { id: uniqid(), pic: palhinha },
      { id: uniqid(), pic: renato },
      { id: uniqid(), pic: semedo }],
    clickedPics: [],
    currentScore: 0,
    highScore: 0,
  });

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }


    const clickHandler = (e) => {
      const stateCopy = { ...game };
      shuffle(stateCopy.pictures)

      

      if (!stateCopy.clickedPics.includes(e.target.id)) {
        stateCopy.currentScore = stateCopy.currentScore + 1;
        
        stateCopy.clickedPics.push(e.target.id);

        if (game.highScore <= game.currentScore) {
          stateCopy.highScore = stateCopy.currentScore;

          
          
        }
      } else {
        stateCopy.currentScore = 0;
        stateCopy.clickedPics = [];
        
      }

      setGame(stateCopy);
      console.log(game.clickedPics);
    };
   

  return (
    <div id="App">
      <div className="header">
  <h1>Portuguese National Team card-guessing game<Score current={game.currentScore} high={game.highScore} /></h1>
</div>
      <div id="imgContainer">
        {game.pictures.map((itm) => {
          return <Pictures id={itm.id} img={itm.pic} handler={clickHandler}/>;
        })}
      </div>
      
    </div>
  );
}

export default App;
