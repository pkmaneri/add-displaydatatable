import React,{ useState } from "react";
 function Calculator(){
     var [state1,setNum1]= useState(0)
     var [state2,setNum2]=useState(0)

     function num1(e:any){
         setNum1(parseInt(e.target.value));

     }
     function num2(e:any){
         setNum2(parseInt(e.target.value));

     }
     return(
         <div>
             <input type="text" onChange={num1} value={state1}></input>
             <input type="text" onChange={num2} value={state2}></input>
             <strong >add= {state1+state2} </strong>
             <strong >sub= {state1-state2} </strong>
             <strong >mul= {state1*state2} </strong>
             <strong >div= {state1/state2} </strong>
         </div> 
     )
 };
 export default Calculator;