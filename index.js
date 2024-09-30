//Part 1: Thinking Functionally
/**reverseString2 is the clearest and simplest */
/**Take an array of numbers and return the sum. */
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }
/**Take an array of numbers and return the average. */
function averageArray(arr) {
    if (arr.length === 0) return 0;
    return sumArray(arr) / arr.length;
  }
/**Take an array of strings and return the longest string. */
function longestString(arr) {
    return arr.reduce((longest, str) => str.length > longest.length ? str : longest, "");
  }
/**Take an array of strings, and a number and return an array of the strings that are longer than the given number.  */
function stringsLongerThan(arr, length) {
    return arr.filter(str => str.length > length);
  }
/**Take a number, n, and print every number between 1 and n without using loops. Use recursion. */
function printNumbers(n) {
    if (n > 0) {
      printNumbers(n - 1);
      console.log(n);
    }
  }


//Part 2: Thinking Methodically
/**Sort the array by age. */
const sortedByAge = people.sort((a, b) => a.age - b.age);
/**Filter the array to remove entries with an age greater than 50. */
const underFifty = people.filter(person => person.age <= 50);
/**Map the array to change the “occupation” key to “job” and increment every age by 1. */
const updatedPeople = people.map(person => ({
    ...person,
    job: person.occupation,
    age: parseInt(person.age) + 1,
    occupation: undefined // removing occupation
  }));
  /**Map the array to change the “occupation” key to “job” and increment every age by 1. */
  const sumOfAges = people.reduce((total, person) => total + parseInt(person.age), 0);
  const averageAge = sumOfAges / people.length;


//Part 3: Thinking Critically
/**Take an object and increment its age field. */
function incrementAge(obj) {
    if (!obj.age) obj.age = 0;
    obj.age++;
    obj.updated_at = new Date();
  }
/**take an object, make a copy, and increment the age */
function incrementAgeCopy(obj) {
    const copy = { ...obj, age: (obj.age || 0) + 1, updated_at: new Date() };
    return copy;
  }