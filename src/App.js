
import React, { Component } from 'react';
import { Switch, Route ,BrowserRouter} from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/navbar/Navbar'





class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path ="/navbar" component ={Navbar}
       />
       
       

      </Switch>
      </BrowserRouter>
    );
  }
}
export default App;


















// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// import Login from './lib/components/container/Login';
// import Dashboard from './lib/components/container/Dashboard';



//  class App extends React.Component {
//     render() {
//       return(
//         <>
//            {/* <Login />
//            <Dashboard /> */}
//            <BrowserRouter>
//         <Switch>
//           <Route path="/" component={Login} />
//           <Route  path ='Dashboard' component={Dashboard}/>
//            </Switch>
//       </BrowserRouter>
//         </>
//       )
//     }
//   }


//   export default App;




