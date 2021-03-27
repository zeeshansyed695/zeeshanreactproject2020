import React from 'react';
import Dinner from './dinner.js';
import './App.css'

function Breakfast (props){
  return(
    <div>
      <h1>
        This is breakfast menu  {props.breakfast}
        <hr></hr>
        This is breakfast menu  {props.breakfastsunday}
      </h1>
    </div>

  );
  
}


export default function App(){
return(
  <div>
    <Dinner saturdaydinner = 'Daal mash' sundaydinner = 'sabziplao' mondaydinner = 'lobia' tuesdaydinner = 'sabzi' weddinner = 'biryani' thrdinner = 'mutton' fridinner = 'daal'/>
    <Breakfast breakfast = 'aalo wala pratha' breakfastsunday = 'Chiken wala pratha'/>
  </div>
);
}


