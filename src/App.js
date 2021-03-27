import React from 'react';
import ReactDom from 'react-dom';

class Car extends React.Component{
  constructor(){
    super();
    this.state = {color:'red'} 
  }
  render(){
    return <div>
          <h1>THis is my car </h1>
          <h2>Car color is {this.props.brand}</h2>
          
          </div> 
  }
}
class Garage extends React.Component{
  render(){
    return <h2>This is my garage of cars and jeep collection</h2>
  }
}
class Jeep extends React.Component{
  render(){
    return <div>
      <Car brand = "blue" />
     <h1>I am ajeep on rally which color is not {this.props.brand} </h1>
     <Garage />
     
     </div>
  }
}
ReactDom.render(<Jeep brand = "blue" />,document.getElementById('root'));
export default Jeep;
