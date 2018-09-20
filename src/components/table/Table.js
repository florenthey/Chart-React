import React from 'react';
import Cell from './Cell'
import Cell2 from './Cell2'


const Table = (props) => {

  return(

    <div>
      <table>
       <tbody>
         <tr>

           <th>CAC40</th>
             {props.stateData.map( item => 
               <Cell key={item.index}
                     //time={item.timestamp}
                     cac40={item.stocks.CAC40}
                     />
             )}
          </tr>

          <tr>
            <th>NASDAQ</th>
             {props.stateData.map( item => 
                <Cell2 key={item.index}
                      //time={item.timestamp}
                      nasdaq={item.stocks.NASDAQ}
                      />
              )}
          </tr>

       </tbody>
      </table>
    </div>

    )
}

export default Table;