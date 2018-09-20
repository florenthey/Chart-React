import React, { Component } from "react";


class Cell extends Component{

  state = {
    stockValue:{}
  }
  
  

  render(){
  
    return(

      <td contentEditable='true'>
        {this.props.cac40.toFixed(2)}
      </td>
    )
  }
}

export default Cell;