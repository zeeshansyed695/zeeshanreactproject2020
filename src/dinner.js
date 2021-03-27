import React from 'react';

export default  function Dinner (props){
    return (
    <div>
        <h1> saturday dinner menu is {props.saturdaydinner}</h1>
        <h1> sunday dinner menu is {props.sundaydinner}</h1>
        <h1> monday dinner menu is {props.mondaydinner}</h1>
        <h1> tuesday dinner menu is {props.tuesdaydinner}</h1>
        <h1> wednesday dinner menu is {props.weddinner}</h1>
        <h1> thrusday dinner menu is {props.thrdinner}</h1>
        <h1> friday dinner menu is {props.fridinner}</h1>
    </div>
    );
}