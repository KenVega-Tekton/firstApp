import React, { Component } from "react";
import OrderDish from "./OrderDish";

class OrderCard extends Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header d-flex">
          <div className="mr-auto">
            ClientName : <strong>{this.props.order.clientName}</strong>
          </div>
          <div className="ml-auto">Today at : {this.props.order.createdAt}</div>
        </div>

        <div className="card-body ">
          <div className="row">
            <div className="col">
              <button className="btn btn-warning">Mark as: In process</button>
            </div>
            <div className="col">
              <button className="btn btn-success">Mark as: Completed</button>
            </div>
            <div className="col">
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target={"#collapseExample" + this.props.id}
                aria-expanded="false"
                aria-controls={"collapseExample" + this.props.id}
              >
                Expand
              </button>
            </div>
          </div>

          <div className="collapse mt-2" id={"collapseExample" + this.props.id}>
            <table className="table table-striped table-sm table-bordered mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Dish Name</th>
                  <th scope="col">Dish Price</th>
                </tr>
              </thead>
              <tbody>
                {this.props.order.orderDetails.map((orderDetail, id2) => {
                  return (
                    <OrderDish
                      key={id2}
                      id={id2}
                      dishName={orderDetail.dishName}
                      dishPrice={orderDetail.dishPrice}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-footer d-flex">
          <div className="mr-auto">
            Payment : <strong>{this.props.order.paymentType}</strong>
          </div>
          <div className="ml-auto">
            Total : <strong>{this.props.order.total}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderCard;
