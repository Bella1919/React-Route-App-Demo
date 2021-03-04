import React, { Component } from "react";
import {Route,Switch,Redirect} from 'react-router-dom';
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {/* path means URL address */}
          <Switch>
            {/* Route to tell react what component should be render bass on URL */}
            {/* For Route always put the spcific one on top of the normal one */}
            <Route path="/products/:id" component={ProductDetails} />
            {/* If we want pass props to component we need replace 'component' to render arrow function. */}
            <Route path="/products" render={(props)=><Products sortBy="newest"{...props} />} />
            {/* Use the '?' means optional. Otherwise after change URL it will be go to home page */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            {/* Sometime you want to move your resource from one URL to another URL. we can use the Redirect to achive that. */}
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            {/* First way to use 'exact'. After we pass 'exact' the path will be working only exact like "/" */}
            {/* <Route path="/" exact component={Home} /> */}
            {/* Second way to use switch. If one of path match, the other one will be ignore. */}
            <Route path="/" exact component={Home} />
            {/* Redirect means non of top can match the URL, so Redirect link with the not-found one. */}
            {/* Redirect need to work with Route NotFound component */}
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
