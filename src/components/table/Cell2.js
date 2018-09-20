import React from "react";


const Cell = (props) => {

  return(
    
    <td contentEditable='true' >
      {props.nasdaq.toFixed(2)}
    </td>

  )
}

export default Cell;