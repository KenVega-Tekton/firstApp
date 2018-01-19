import React, { Component } from "react";
import AddOrderDetail from "./Add-order-detail";

class AddOrder extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card card-body">
              <h3 className="text-center">Add Order</h3>
              <form method="post" action="/api/order">
                <div className="form-group">
                  <label htmlFor="clientName">Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentType"
                    id="inlineRadio1"
                    value="card"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Card
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentType"
                    id="inlineRadio2"
                    value="cash"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Cash
                  </label>
                </div>

                <AddOrderDetail />

                <div className="text-center">
                  <button type="submit" className="btn btn-primary ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOrder;
