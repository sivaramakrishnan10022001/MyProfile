import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Skills from "./components/skills/skills";
// import Shopping from "./components/shopping/shopping";
import Shopping from "./components/shopping/testing/test/shopping";
import Login from "./components/login/login";
import Contact from "./components/contact/contact";

// import Testing from "./components/testing";

// import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Switch >
//             <Route exact path="/" component />
//           </Switch>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Shopping />
      <Login />
      <Contact />
      {/* <Testing /> */}
    </div>
  );
}

export default App;
