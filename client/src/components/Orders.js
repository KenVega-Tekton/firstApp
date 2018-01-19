import React, { Component } from "react";

class Orders extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h3 className="text-center">Orders comanded:</h3>

            <div className="card">
              <div className="card-header d-flex">
                <div className="mr-auto">
                  ClientName : <strong>John Doe</strong>
                </div>
                <div className="ml-auto">Today at : 12</div>
              </div>
              <div className="card-body">
                <table className="table table-striped table-sm table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Dish Name</th>
                      <th scope="col">Dish Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Arroz con pollo</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Arroz chaufa</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Causa rellena</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>

                <div className="row">
                  <div className="col">
                    <button className="btn btn-warning">
                      Mark as: In process
                    </button>
                  </div>
                  <div className="col">
                    <button className="btn btn-success">
                      Mark as: Completed
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex">
                <div className="mr-auto">
                  Payment : <strong>Card</strong>
                </div>
                <div className="ml-auto">
                  Total : <strong>29</strong>
                </div>
              </div>
            </div>

            <h3 className="text-center mt-2">Orders in process:</h3>

            <div className="card">
              <div className="card-header d-flex">
                <div className="mr-auto">
                  Order 2 - ClientName : <strong>John Doe</strong>
                </div>
                <div className="ml-auto">Today at : 12</div>
              </div>
              <div className="card-body">
                <p>Hola</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;
