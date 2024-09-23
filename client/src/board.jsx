import { useState } from "react";
import Square from "./square";


function Board(){
  const [squares,setSquare]=useState([Array(9).fill(null)]);
  const squareClick=(index)=>{
  
    let nextsquare=squares.slice();
    nextsquare[index]="x"
    setSquare(nextsquare)
  }

    return(
        <>
        <div className="row_board">
            <Square value={squares[0]} onSquareClick={()=>{
                squareClick(0)
            }}/>
            <Square value={squares[1]} onSquareClick={()=>{
                squareClick(1)
            }} />
            <Square value={squares[2]} onSquareClick={()=>{
                squareClick(2)
            }}/>
        </div>
        <div className="row_board">
        <Square value={squares[3]} />
            <Square value={squares[4]} />
            <Square value={squares[5]} />
        </div>
        <div className="row_board">
        <Square value={squares[6]} />
            <Square value={squares[7]}/>
            <Square value={squares[8]} />
        </div>
        </>
    )
}
export default Board;