const Namechanger = ()=>{
    const [namne,setname] = useState('Zeeshan');
   
  
    }
    return(
      <div>
      <h2>this is counter {namne}</h2>
      
      <button onClick = {()=> setname('Zeeshan shah')}>Nmae changer</button>
      </div>
      
      );  
  }