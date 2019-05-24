import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// Route templates
import Home from "./components/routes/Home/Home";
import Filter from "./components/routes/Filter/Filter";
import Order from "./components/routes/Order/Order";
import Transparency from "./components/routes/Transparency/Transparency";
import NotFound from "./components/routes/NotFound/NotFound";
import Dashboard from "./components/routes/Dashboard/Dashboard";

// Blocks
import Header from "./components/blocks/Header/Header";
import Footer from "./components/blocks/Footer/Footer";
import BetaBanner from "./components/elements/BetaBanner/BetaBanner";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <BetaBanner />
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/filter" component={Filter} exact />
          <Route path="/order" component={Order} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;
