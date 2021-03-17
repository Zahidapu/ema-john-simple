import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from "./component/Review/Review";
import Inventory from "./component/Inventory/Inventory";
import Notfound from "./component/Notfound/Notfound";
import ProductDetails from "./component/ProductDetails/ProductDetails";



function App() {
  
  return (
    <div >
    <Header></Header>
    <Router>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
            <Review></Review>
        
        </Route>
        <Route path="/inventory">
            <Inventory></Inventory>
        
        </Route>
        <Route exact path="/">
            <Shop></Shop>
        
        </Route>
        <Route path="/product/:productKey">
        <ProductDetails></ProductDetails>
        
        
        </Route>

        <Route  path="*">
        <Notfound></Notfound>
        
        </Route>
      
      
      </Switch>
    
    </Router>
      
     
      
      
     
      
      
     
      
    </div>
  );
}

export default App;
