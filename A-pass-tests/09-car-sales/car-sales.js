function sales(carsSold) {
  let total = {};
  carsSold.forEach((element) => {
    if (element.make !== total[element.make]) {
      total[element.make] = 0;
    }
  });
  carsSold.forEach((element) => (total[element.make] += element.price));
  return total;
}
let carsSold = [
  { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
  { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
  { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
  { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
  { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
  { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
  { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
];

console.log(sales(carsSold));
module.exports = sales;
