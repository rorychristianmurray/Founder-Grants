// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createAuth0Client from "@auth0/auth0-spa-js";

// Objects
import GrantList from "./components/grants/GrantList";
import NavBar from "./components/Navbar";
import SubmitForm from "./components/SubmitForm";
import { useAuth0 } from "./react-auth0-wrapper";


// Stylings
import "./App.scss";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/Theme";
import Home from "./views/Home";

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <div>Welcome to Grantly</div> */}
          <Route path="/" component={NavBar} />
          <Route path="/grants" component={GrantList} />
          <Route exact path="/" component={Home} />
          <Route path="/form" component={SubmitForm} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
