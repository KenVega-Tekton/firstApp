import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import AddOrder from "./Add-order";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/add-order" component={AddOrder} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
