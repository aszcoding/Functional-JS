//Assign a function to a variable
let greeting = "Banana";

/*Without greeting, this is a pure function, with greeting, it is impure bc if we modify the greeting variable, the output will change.
The input is the argument to the topic function; aka: t. the variable 'greeting' is the side effect*/

const topic = (t) => `${greeting} You are learning ${t}`;

display(topic("first class functions"));


//Pass a function as an argument
const numbers = [1, 2, 3, 4];
const multiplyTwo = (number) => number * 2;

const timesTwo = numbers.map(multiplyTwo)

display(timesTwo)

//Return a function from another function

const firstClassFunction = () => () => display("Hi! I'm a function returned from another function")

let displayFunction = firstClassFunction();
displayFunction();

//Closure example, authorName has access to the variable name, which was defined earlier in the welcomeAuthor function
//The outer function returns the inner function

//Outer function
const welcomeAuthor = () => {
  let name = "Ashley";

  //Inner function
  const authorName = () => `Welcome ${name}`
  
  //Return inner function
  return authorName;
};


display(welcomeAuthor()())

//Track # of clicks on a button
const updateClickCounter = () => {
  //count is a private variable that can be accessed only by addClicks
  let count = 0;

  const addClicks = () => count++

  return addClicks;
}

const counterResults = updateClickCounter();

display(counterResults())
display(counterResults())
display(counterResults())
display(counterResults())
display(counterResults())

//Composition
//takes in 2 functions as parameters and composes a and b, the output of b will be forwarded as the input to a
const compose = (a, b) => s => (a(b(s)));

const getAge = user => user.age;
const isAllowedAge = age => age >= 21;

const user = { name: "Sage", age: 3}

const userAllowedToDrink = compose(isAllowedAge, getAge)
//Compose flow is from right to left; getAge happens first, then the check to see if they're allowed to drink happens

// display(userAllowedToDrink(user));


//Map
const initialNumbers = [1, 2, 3, 4, 5];

const addTwo = (number) => number + 2;

const newNumbers = initialNumbers.map(addTwo);
// display(newNumbers)

//Filter

const isOdd = (number => number % 2)

const oddNumbers = initialNumbers.filter(isOdd);
// display(oddNumbers)

//Flat
const nestedArray = [1, 2, 3, 4, [5, 6]];
// display(nestedArray.flat());

//if there are multiple levels of nesting, you can specify how deep you want it to flatten by feeding a number to the .flat()
//If you want it to flatten the whole array no matter what, you can feed infinity to .flat()

//Reduce
// const multiply = initialNumbers.reduce(
//   (accumulator, currentValue) => accumulator * currentValue
// );

// display(multiply);

//Higher Order Functions

const add = (n1, n2) => n1+n2;
const subtract = (n1, n2) => n1-n2;
const multiply = (n1, n2) => n1*n2;

//Higher order fx
const compute = (mathOperation, initialValue, values) => {
  let total = initialValue;

  values.forEach((value) => {
    total = mathOperation(total, value);
  })

  return total;
} 

display(compute(add, 0, [5, 2]));

//Curry function to add numbers
//Instead of taking all arguments at once, takes the first one, returns a new function, takes 2nd one, returns a second function, etc.
const total = (a) => (b) => (c) => a+b+c;

