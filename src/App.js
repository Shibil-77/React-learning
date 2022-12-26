import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Sample from './Component/Sample';


function App() {
  return (
    <div>
    <Router>
        <Route component={Sample}  path='/about'/>
    </Router>
    </div>
  );
}

export default App;
