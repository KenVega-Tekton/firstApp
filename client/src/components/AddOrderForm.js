import React, { Component } from "react";
//import AddOrderDetail from "./AddOrderDetail";
import AddOrderDetail3 from "./AddOrderDetail3";

class AddOrderForm extends Component {
  render() {
    return (
      <form method="post" action="/api/order">
        <div className="form-group">
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            id="clientName"
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

        <AddOrderDetail3 />

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AddOrderForm;
