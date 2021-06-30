import React,{Component}from "react";
import Column from './Column';
import ColumnInfo from "./ColumnInfo";

class Row extends Component{
    constructor(props){
        super(props)  
    }
    render(){
    
            return (
                <div className="style">
                <div className="container">
              <div className="row">
                  <Column img={this.props.data.url} />
                  <ColumnInfo data={this.props.data}/>
              
               </div>
               </div>
               </div>
             
            )
    }
}


export default Row;