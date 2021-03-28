import React ,{useReducer, useState} from 'react';

export default function App (){
const[count,setcount] = useState(0);
const [namne,setname] = useState('zeeshan');

return(
<div>
  <h1>Hello {} you click the counter {count} times</h1>
<h2>this is counter {count}</h2>

<button onClick = {()=> setcount(count+1)}>Counter click me</button>
<h2>this is counter {namne}</h2>
<button onClick = {()=> setname('Zeeshan shah')}>Nmae changer</button>

</div>

);






}
