import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// Route templates
import Home from "./components/routes/Home/Home";
import Search from "./components/routes/Search/Search";
import Order from "./components/routes/Order/Order";
import NotFound from "./components/routes/NotFound/NotFound";

// Blocks
import Header from "./components/blocks/Header/Header";
import Footer from "./components/blocks/Footer/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <main className="page-main">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/filter" component={Search} exact />
            <Route path="/order" component={Order} exact />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;
