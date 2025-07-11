import React from 'react';

import './App.css';

import JsxExpression from './components/JsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';

function App() {
  return (
    <div className="App">
      <JsxExpression/>
      <hr />
      <h2 className='alert alert-success'>Component</h2>
      <FuncComp/>
      <FuncComp name="Đạt" company="Lâm Viết"/>
      <FuncComp1 name='dat' company='dat'></FuncComp1>
    </div>
  );
}

export default App;
