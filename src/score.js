import React from "react";



function Score(props) { 


    
     return (
       <div id="scoreContainer">
         <div className="score">Score: {props.current}</div>
         <div className="score">High-score: {props.high}</div>
        </div>
        
       
     );
   }


   export default Score;


 