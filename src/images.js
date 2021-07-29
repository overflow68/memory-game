import React from "react";



function Pictures(props) { 
    
     return (
       
         
         <img id={props.id} alt="" className="gamePic" src={props.img} onClick={props.handler} />
        
        
       
     );
   }


   export default Pictures;













