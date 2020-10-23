import React from 'react';
import Login from './LoginComponent/LoginComponent'
import SignupComponent from './LoginComponent/SignupComponent'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import FinComponent from './FinancialComponents/FinComponent'



function App() {
  return (
    <Router>
      <div className="App"> 
      <Switch>
        <Route  path="/" exact component={Login}/>
        <Route  path="/signup" exact component={SignupComponent}/>
        <Route  path="/app" exact component={FinComponent}/>
      </Switch>

     </div>
    </Router>
  );
}

export default App;
