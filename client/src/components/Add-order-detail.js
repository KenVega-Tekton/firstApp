import React, { Component } from "react";
import axios from "axios";

class AddOrderDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    axios
      .get("/dishApi/getDishes")
      .then(orders => {
        console.log(orders);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <div>Hola</div>;
  }
}

export default AddOrderDetail;
