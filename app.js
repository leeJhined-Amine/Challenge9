//Challenge1-returning a new array of the even numbers and then their average
const array1 = [1,2,3,4,5,6,7,8,9,10];
evenNumbers = array1.filter(evenNum);
console.log("Tha even numbers from the array are: ", evenNumbers);
const even = evenNumbers.reduce(Average);
console.log(even/2)
function evenNum(element){
    return element%2 === 0;
}
function Average(accumulator, element){
    return accumulator + element;
}

// Challenge2-returning the longest word in array
let array = ['hi','hello','whatsup','goodbye','seeya','GoodMorning'];
let longwoord = array.reduce(longestWord)
function longestWord(accumulator, word){
    return word.length > accumulator.length ? word : accumulator;
}
console.log(longwoord);

//Challenge3-returning the average number of pages
let Books = [
    {
        title:'book1',
        pages:300,
        author:'author1',
    },
    {
        title:'book2',
        pages:250,
        author:'author2'
    },
    {
        title:'book3',
        pages:350,
        author:'author3',
    }
]
let totalpages = 0;
let arrayPages = Books.map(Book => {return Book.pages});
let numPages = arrayPages.reduce(averagePages);
function averagePages(accum, element3){
    return accum + element3;
}
console.log(numPages/arrayPages.length);

//Started putting the function directly inside the built functions (didn't know i could do that)

//Challenge4-returning how many times a word is repeated in an array
const inputArray = ["hello", "world", "hello"];
function countFrequency(stringsArray) {
    const frequencyObject = stringsArray.reduce((acc, currentString) => {
        if (acc.hasOwnProperty(currentString)) {
            acc[currentString]++;
        } else {
            acc[currentString] = 1;
        }
        return acc;
    }, {});
  
    return frequencyObject;
  } 
const result = countFrequency(inputArray);
console.log(result);
  
//Challenge5- returns how many people are in each city
let People = [
    {
        name:'Alice',
        age: 30,
        city: 'new york',
    },
    {
        name:'Bob',
        age:40,
        city: 'Chicago',
    },
    {
        name:'Charlie',
        age:50,
        city:'new york'
    }
]
function countPeopleByCity(peopleArray) {
    const cityCount = peopleArray.reduce((acc, person) => {
        const city = person.city;
        if (acc.hasOwnProperty(city)) {
            acc[city]++;
        }
        else{
            acc[city] = 1;
        }
        return acc;
    }, {});
  
    return cityCount;
}
console.log(countPeopleByCity(People));