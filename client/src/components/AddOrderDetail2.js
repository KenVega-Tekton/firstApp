import React, { Component } from "react";
import axios from "axios";

class AddOrderDetail2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishesAvailable: [],
      numberDishes: 1,
      dishesSelected: [
        {
          dishName: "",
          dishPrice: 0
        }
      ],
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
    // cuando cambias de valor ese numero, tienes que ver si sube o baja y cuanto baja
    // dependiendo de cuanto suba o baje tienes que agregar o quitar la misma cantidad de elementos al estado
    if (event.target.value > 0) {
      let difference = this.state.numberDishes - event.target.value;

      // si la diferencia es negativa, es que está subiendo el numero de platos
      // si la diferencia es positiva, es que está bajando el numero de platos
      // si la diferencia es cero, en realidad no deberia pasar nada

      let fooArray = this.state.dishesSelected;

      if (difference > 0) {
        for (let i = 0; i < difference; i++) {
          fooArray.pop();
        }
        this.setState({
          dishesSelected: fooArray
        });
      } else if (difference < 0) {
        difference = difference * -1;

        let fooArray2 = [];

        for (let i = 0; i < difference; i++) {
          fooArray2.push({
            dishName: "",
            dishPrice: 0
          });
        }

        fooArray = [...fooArray, ...fooArray2];
        this.setState({
          dishesSelected: fooArray
        });
      }

      this.setState({
        numberDishes: event.target.value
      });
    }
  }

  onSelectingDish(event) {
    // cuando cambias el texto de un plato debes chequear si ese plato esta en tu lista
    // si lo esta, entonces debes poner su respectivo precio al costado
    // si no lo es, asegurate de borrar su precio o volverlo cero
  }

  renderDetails() {
    //let dishes = [];

    return (
      <div>
        <hr />

        {this.state.dishesSelected.map((dish, id) => {
          return (
            <div className="form-row" key={id}>
              <div className="form-group col-8">
                <label htmlFor={`dishName${id}`}>Dish number {id + 1}</label>
                <input
                  type="text"
                  className="form-control input-name-dishes"
                  id={`dishName${id}`}
                  list="dishesAvailable"
                  onChange={this.onSelectingDish}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group col-4">
                <label htmlFor={`dishPrice${id}`}>Price</label>
                <input
                  type="number"
                  className="form-control"
                  id={`dishPrice${id}`}
                  readOnly
                  required
                  value={dish.dishPrice}
                />
              </div>
            </div>
          );
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
