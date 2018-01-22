import React, { Component } from "react";
import axios from "axios";

class AddOrderDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishesAvailable: [],
      numberDishes: 1,
      dishesSelected: []
    };

    axios
      .get("/api/dish")
      .then(response => {
        console.log(response);
        this.setState({
          dishesAvailable: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.onSelectingDish = this.onSelectingDish.bind(this);
    this.updatingPrice = this.updatingPrice.bind(this);
  }

  onSelectingDish(event) {
    //tomar el valor del input, si es de un texto que está en datalist. agregarlo al estado con una llave
    let id = event.target.id.slice(8);
    id = parseInt(id, 10);
    let dummyArray = [];

    let element = document.getElementById(`dishPrice${id}`);

    this.state.dishesSelected.map((dishSelected, index) => {
      // si ya existe objeto con ese id, se borra antes de guardar el nuevo
      if (dishSelected.dishId === id) {
        dummyArray = this.state.dishesSelected;
        dummyArray.splice(index, 1);
        this.setState({
          dishesSelected: dummyArray
        });

        element.value = null;
      }
      return 1; // evita el warning
    });

    this.state.dishesAvailable.map(dish => {
      if (dish.dishName === event.target.value) {
        dummyArray = this.state.dishesSelected;
        dummyArray.push({
          dishId: id,
          dishName: dish.dishName,
          dishPrice: dish.dishPrice
        });

        this.setState(
          {
            dishesSelected: dummyArray
          },
          this.updatingPrice(id, dish.dishPrice, dish._id)
        );
      }
      return 1; // evita el warning
    });
  }

  updatingPrice(id, dishPrice, idDishDB) {
    ////////el precio total solo debe basarse en los platos escogidos. y estos deben actualizarse en base al UI
    /// si solo se actualiza el precio cuando se agrega un plato entonces habra problemas cuando el comensal quiera cambiar de opinion de plato

    // actualizar el valor a traves del DOM del precio del plato
    document.getElementById(`dishPrice${id}`).value = dishPrice;

    // actualizar el valor del precio total
    let totalOwed = 0;

    this.state.dishesSelected.map(dish => {
      totalOwed += dish.dishPrice;
      return 1;
    });

    document.getElementById("totalOwed").value = totalOwed;

    //console.log(idDishDB);

    document.getElementById(`dishIdDB${id}`).value = idDishDB;
  }

  render() {
    let items = [],
      dishNameId = "",
      dishPriceId = "",
      dishIdDB = "";

    for (let i = 0; i < this.state.numberDishes; i++) {
      dishNameId = `dishName${i}`;
      dishPriceId = `dishPrice${i}`;
      dishIdDB = `dishIdDB${i}`;

      items.push(
        <div className="form-row" key={i}>
          <div className="form-group col-8">
            <label htmlFor={dishNameId}>Dish number {i + 1}</label>
            <input
              type="text"
              className="form-control input-name-dishes"
              id={dishNameId}
              list="dishesAvailable"
              onChange={this.onSelectingDish}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor={dishPriceId}>Price</label>
            <input
              type="number"
              className="form-control"
              id={dishPriceId}
              readOnly
              required
            />
          </div>
          <input hidden id={dishIdDB} name={dishIdDB} />
        </div>
      );
    }

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
              onChange={event => {
                this.setState({
                  numberDishes: event.target.value
                });
                // deberias realizar update al precio. o al menos el precio deberia tener un componente que reciba como props el precio que se recalcula cada que cambia el numero de platos
              }}
              required
            />
          </div>
        </div>

        <hr />

        {items}

        <datalist id="dishesAvailable">
          {this.state.dishesAvailable
            ? this.state.dishesAvailable.map(dish => (
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
