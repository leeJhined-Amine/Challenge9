//Challenge1
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

// Challenge2
let array = ['hi','hello','whatsup','goodbye','seeya','GoodMorning'];
let longwoord = array.reduce(longestWord)
function longestWord(accumulator, word){
    return word.length > accumulator.length ? word : accumulator;
}
console.log(longwoord);

//Challenge3
