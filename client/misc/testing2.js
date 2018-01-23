let dishesAvailable = [
  {
    dishName: "hola",
    quantity: 1,
    dishPrice: 7
  },
  {
    dishName: "hola2",
    quantity: 2,
    dishPrice: 8
  },
  {
    dishName: "hola3",
    quantity: 1,
    dishPrice: 9
  }
];

let newArray = dishesAvailable.map((dish, index) => {
  let miniNewArray = [];
  for (let i = 0; i < dish.quantity; i++) {
    miniNewArray.push({ dishName: dish.dishName, dishPrice: dish.dishPrice });
  }
  console.log("miniNewArray: ", miniNewArray);

  // no lo termine
});

console.log("priceDishFound: ", priceDishFound);
