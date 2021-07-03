import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ErrorMessage from "./pages/Error";
// import Nav from "./component/Nav";
// import About from "./pages/About";
// import Project from "./pages/Project";
// import Footer from "./component/Footer";

function App() {
  return (
    <div className="font">
      <div className="flex flex-col min-h-screen">
        <Router basename={process.env.PUBLIC_URL}>
          <div className=" flex-1 flex-col content-center justify-center">
            {/* <Nav /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/jetyee" component={Home} />
              {/* <Route path="/about" component={About} />
            <Route path="/project" component={Project} /> */}
              <Route path="/404" component={ErrorMessage} />
              <Redirect to="/404" />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
