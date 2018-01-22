let dishesAvailable = [
  {
    dishName: "hola",
    quantity: 1,
    dishPrice: 7
  },
  {
    dishName: "hola2",
    quantity: 1,
    dishPrice: 8
  },
  {
    dishName: "hola3",
    quantity: 1,
    dishPrice: 9
  }
];

let priceDishFound = dishesAvailable.find(dish => {
  if (dish.dishName === "hola23") {
    console.log("entro");
    return dish.dishPrice;
  } else {
    return false;
  }
});

console.log("priceDishFound: ", priceDishFound);
