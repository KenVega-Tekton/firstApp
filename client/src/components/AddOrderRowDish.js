import React, { Component } from "react";

class AddOrderRowDish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oneDish: {
        dishName: "",
        dishPrice: 0
      }
    };

    this.checkingDishName = this.checkingDishName.bind(this);
  }

  checkingDishName(event) {
    console.log(event.target.value);
    this.props.dishesAvailable.find(dish => {
      if (dish.dishName === event.target.value) {
        console.log("si existe este plato : ", dish);

        this.setState({
          oneDish: {
            dishName: event.target.value,
            dishPrice: dish.dishPrice
          }
        });
        return true;
      } else {
        this.setState({
          oneDish: {
            dishName: event.target.value,
            dishPrice: 0
          }
        });
        return false;
      }
    });
  }
  render() {
    return (
      <div className="form-row">
        <div className="form-group col-7">
          <label>Dish 1 -> (S/. {this.state.oneDish.dishPrice})</label>
          <input
            type="text"
            className="form-control input-name-dishes"
            list="dishesAvailable"
            required
            autoComplete="off"
            onChange={this.checkingDishName}
            value={this.state.oneDish.dishName}
          />
        </div>
        <div className="form-group col-3">
          <label>Quantity</label>
          <input
            type="number"
            className="form-control"
            defaultValue="1"
            min="1"
            required
          />
        </div>

        <div className="form-group col-2">
          <label>¿Ok?</label>
          <button
            onClick={this.props.deleteRowDish}
            className="btn btn-danger btn-block"
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    );
  }
}

export default AddOrderRowDish;
