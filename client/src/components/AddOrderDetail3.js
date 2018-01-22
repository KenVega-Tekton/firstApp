import React, { Component } from "react";
import axios from "axios";
import AddOrderRowDish from "./AddOrderRowDish";

class AddOrderDetail3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishesAvailable: [],
      dishRowSelected: [
        {
          dishName: "",
          quantity: 1,
          dishPrice: 0
        }
      ],
      numberDishes: 58327,
      totalOwed: 100
    };

    this.addRowDish = this.addRowDish.bind(this);
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

  addRowDish(event) {
    event.preventDefault();

    this.setState({
      dishRowSelected: [
        ...this.state.dishRowSelected,
        { dishName: "", dishPrice: 0 }
      ]
    });
    // el arreglo de objetos renderiza automaticamente el numero de filas
  }

  deleteRowDish(event) {
    event.preventDefault();
    console.log(
      "el componente hijo ha invocado a la funcion que le paso el padre"
    );
  }

  renderDetails() {
    return (
      <div>
        {this.state.dishRowSelected.map((dish, id) => {
          return (
            <AddOrderRowDish
              dish={dish}
              key={id}
              id={id}
              deleteRowDish={this.deleteRowDish}
              dishesAvailable={
                this.state.dishesAvailable ? this.state.dishesAvailable : null
              }
            />
          );
        })}

        <datalist id="dishesAvailable">
          {this.state.dishesAvailable
            ? this.state.dishesAvailable.map(dish => (
                <option value={dish.dishName} key={dish._id} />
              ))
            : null}
        </datalist>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="form-group form-row mt-3">
          <label htmlFor="numberDishes" className="col-7 col-form-label">
            Number of dishes:
          </label>
          <div className="col-3">
            <input
              type="number"
              min="1"
              className="form-control"
              value={this.state.numberDishes}
              readOnly
              required
            />
          </div>
          <div className="col-2">
            <button
              onClick={this.addRowDish}
              className="btn btn-success btn-block"
            >
              <i className="fa fa-plus-circle" />
            </button>
          </div>
        </div>

        <hr />

        {this.renderDetails()}

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

export default AddOrderDetail3;
