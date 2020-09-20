import React,{useState} from 'react';
import './Room.css'
function Room(){
    //const res=useState(137);
   // const isLit=res[0];
    //const setLit=res[1];
    var [isLit,Setlit]=useState(false);
    var [age,setage]=useState(15)
    function updateLit(){
        Setlit(!isLit)
    }
    //className={"room "+(isLit?"lit":"dark")
    return <div className={`room ${isLit?'lit':'dark'}`}> 
        this room is = {isLit? 'Lighted':"Not Lighted"}
        <br></br>
        Age = {age}
        <br></br>
        <button onClick={updateLit}>Toggle Light </button>
        <button onClick={()=>{
            setage(++age);
        }}>Age Increase </button>
    </div>
}

export default Room;