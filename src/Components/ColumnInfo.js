import React from "react";
const ColumnInfo =(props)=>{
            return (
              <div className="col-md-6">
                <div className="data">

              <h3> {props.data.title}</h3> 
                <div> {props.data.content}</div>  
                 </div>
                 </div>
                         )
           
}


export default ColumnInfo;