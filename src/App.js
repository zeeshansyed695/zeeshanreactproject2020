import React from 'react';
import './App.css';
import { ContextProvider } from './context';
import Child from './Child.js'

function App() {

  return (
    <ContextProvider>
      <Child />
    </ContextProvider>
  );
}

export default App;