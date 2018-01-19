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
    let items = [];

    return (
      <div>
        <div className="form-group row mt-3">
          <label htmlFor="numberDishes" className="col-8 col-form-label">
            Number of dishes:
          </label>
          <div className="col-4">
            <input
              type="number"
              min="1"
              className="form-control"
              value={this.state.numberDishes}
              onChange={this.onNumberDishesChange}
              required
            />
          </div>
        </div>

        <hr />

        {items}

        <datalist id="dishesAvailable">
          {this.state.dishes
            ? this.state.dishes.map(dish => (
                <option value={dish.dishName} key={dish._id} />
              ))
            : null}
        </datalist>

        <hr />

        <div className="form-group row">
          <label htmlFor="totalOwed" className="col-8 col-form-label">
            Total Owed:
          </label>
          <div className="col-4">
            <input
              type="number"
              className="form-control"
              id="totalOwed"
              name="totalOwed"
              defaultValue="0"
              readOnly
              required
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddOrderDetail;
