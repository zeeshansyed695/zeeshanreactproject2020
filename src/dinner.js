import React,{useReducer} from 'react';
import menufinder from './countreducer';
import countreducer from './countreducer';


export default  function Dinner (props){
    let [state,dispatch] = useReducer(menufinder,'daal mash')
    
    return (
    <div>
        
        <h1> sunday dinner menu is {props.sundaydinner}</h1>
        <h1>value of state is {state}</h1>
        <h1> saturday dinner menu is <button onClick={()=>dispatch('saturday')}>click me</button></h1>
        <h1> monday dinner menu is {props.mondaydinner}</h1>
        <h1> tuesday dinner menu is {props.tuesdaydinner}</h1>
        <h1> wednesday dinner menu is {props.weddinner}</h1>
        <h1> thrusday dinner menu is {props.thrdinner}</h1>
        <h1> friday dinner menu is {props.fridinner}</h1>
    </div>
    );
}