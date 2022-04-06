import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header/header";
import Skills from "./components/skills/skills";
// import Shopping from "./components/shopping/shopping";
import Login from "./components/login/login";
// import Contact from "./components/contact/contact";

// import Testing from "./components/testing";

function App() {
  return (
    <div className="App">
      <Navbar />     
      <Header />
      <Skills />
      {/* <Shopping /> */}
      <Login />
      {/* <Contact /> */}
      {/* <Testing /> */}
    </div>
  );
}

export default App;
