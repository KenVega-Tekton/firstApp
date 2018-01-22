import React, { Component } from "react";
import axios from "axios";

class AddOrderDetail2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishesAvailable: [],
      numberDishes: 0,
      dishesSelected: [],
      totalOwed: 10
    };
  }

  getDishes() {
    axios.get("/api/dish").then(response => {
      this.setState({
        dishesAvailable: response.data
      });
      console.log(response);
    });
  }

  componentWillMount() {
    this.getDishes();
  }

  changeNumberDishes(event) {
    console.log("cambio el numero de platos");
    console.log(event.target.value);
    this.setState({
      numberDishes: event.target.value
    });
    // el numero de platos cambia el length del arreglo de platos escogidos
    // los platos escogidos definen el precio total
  }

  renderDetails() {
    return (
      <div>
        <hr />

        {this.state.dishesSelected.map(dish => {
          return <div>Hola</div>;
        })}

        <datalist id="dishesAvailable">
          {this.state.dishesAvailable
            ? this.state.dishesAvailable.map(dish => (
                <option value={dish.dishName} key={dish._id} />
              ))
            : null}
        </datalist>
        <hr />
      </div>
    );
  }

  render() {
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
              onChange={event => this.changeNumberDishes(event)}
              required
            />
          </div>
        </div>

        {this.renderDetails()}

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
              value={this.state.totalOwed}
              readOnly
              required
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddOrderDetail2;
