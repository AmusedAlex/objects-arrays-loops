/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let aVariable = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("Exercise 2");

const student = {
  firstname: "Alexander",
  lastName: "Spomer",
  eMail: "Alex.spomer74@gmail.com",
  age: 30,
};

console.log("Student: ", student);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\nExercise 3");

student.drivingLicense = true;
console.log("Student: ", student);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log("\nExercise 4");
delete student.age;
console.log("Student: ", student);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("\nExercise 5");
const student2 = {
  firstname: "Tony",
  lastName: "Montana",
  eMail: "toni@montana.com",
};

console.log(
  "Email student and student2 is different?",
  student.eMail !== student2.eMail
);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
console.log("\nExercise 6");
let totalShoppingCart = 70;
let shippingFee = 10;
let totalCost;

totalCost =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + shippingFee;

console.log("Total costs are: ", totalCost);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log("\nExercise 7");
let discount = 0.2;
let totalShoppingCartAfterDiscount =
  totalShoppingCart - totalShoppingCart * discount;

totalCost =
  totalShoppingCartAfterDiscount > 50
    ? totalShoppingCartAfterDiscount
    : totalShoppingCartAfterDiscount + shippingFee;

console.log("Total costs with 20% discount are: ", totalCost);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
console.log("\nExercise 8");
const car1 = {
  brand: "Mercedes-Benz",
  model: "S-Class",
  plate: "HG ST 11",
};

const car2 = Object.assign({}, car1);
const car3 = Object.assign({}, car1);
const car4 = Object.assign({}, car1);
const car5 = Object.assign({}, car1);

car2.plate = "HG ST 22";
car3.plate = "HG ST 33";
car4.plate = "HG ST 44";
car5.plate = "HG ST 55";

console.log("Car1 =", car1);
console.log("Car2 =", car2);
console.log("Car3 =", car3);
console.log("Car4 =", car4);
console.log("Car5 =", car5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log("\nExercise 9");
const carsForRent = [car1, car2, car3, car4, car5];

console.log("Cars for rent", carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
console.log("\nExercise 10");
carsForRent.splice(0, 1);
carsForRent.pop();

console.log("Amount of cars available = ", carsForRent.length);
console.log("Cars for rent now", carsForRent);
/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("\nExercise 11");

console.log("Car variable type = ", typeof car1);
console.log("License plate variable type = ", typeof car1.plate);
console.log("Brand variable type = ", typeof car1.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
console.log("\nExercise 12");
const carsForSale = [];
carsForSale.push(
  (car6 = Object.assign({}, car1)),
  (car7 = Object.assign({}, car1)),
  (car8 = Object.assign({}, car1))
);

car6.plate = "HG ST 66";
car7.plate = "HG ST 77";
car8.plate = "HG ST 88";

const totalCars = carsForRent.length + carsForSale.length;

console.log("Total cars avaiable = ", totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log("\nExercise 13");
console.log("Cars avaiable in carsForSale:");
for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}
