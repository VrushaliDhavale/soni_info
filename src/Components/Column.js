import React from "react";
import '../App.css';
const Column =(props)=>{   
       
            return (
                <div class="information">
           <div className="col-md-6">
               <div className="info">
              <img src= {props.img}/>
              </div>
         </div> 
         </div>      
            )    
}


export default Column;