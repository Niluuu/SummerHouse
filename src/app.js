import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./components/nav"
import Index from "./pages/Index"
import Details from "./pages/Details"
import Profile from "./pages/Profile"
import Register from "./pages/Register"

import NotFound from "./pages/NotFound"
import Footer from "./components/footer"
import Filter from "./pages/Filter"


function App () {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/detail(/:id)" component={Details} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/:type" component={Filter} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
