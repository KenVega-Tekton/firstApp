import React, { Component } from "react";
import axios from "axios";

import OrderCard from "./OrderCard";

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }

  getOrders() {
    axios.get("/api/order").then(response => {
      this.setState({
        orders: response.data
      });
      console.log(response);
    });
  }

  componentWillMount() {
    this.getOrders();
  }

  renderOrders(orderState) {
    if (this.state.orders) {
      return (
        <div>
          {this.state.orders.map((order, id) => {
            if (order.state === orderState) {
              order.createdAt = new Date(order.createdAt).toDateString();
              return (
                <div key={id}>
                  <OrderCard order={order} id={id} />
                </div>
              );
            } else {
              return <div key={id /* para evitar warning */} />;
            }
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <h3 className="text-center">Orders comanded:</h3>
            {this.renderOrders("comanda")}
            <h3 className="text-center mt-2">Orders in process:</h3>
            {this.renderOrders("in process")}
            <h3 className="text-center mt-2">Orders Done:</h3>
            {this.renderOrders("done")}
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
