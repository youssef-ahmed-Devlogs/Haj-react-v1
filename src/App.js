import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import { AppState } from "./context/AppContext";
import Haj from "./pages/Haj";

const App = () => {
  return (
    <AppState>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/haj" exact component={Haj} />
          <Route render={() => <h1>Not Found 404</h1>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppState>
  );
};

export default App;
