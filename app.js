// //Challenge1
// const array1 = [1,2,3,4,5,6,7,8,9,10];
// evenNumbers = array1.filter(evenNum);
// console.log("Tha even numbers from the array are: ", evenNumbers);
// const even = evenNumbers.reduce(Average);
// console.log(even/2)
// function evenNum(element){
//     return element%2 === 0;
// }
// function Average(accumulator, element){
//     return accumulator + element;
// }

// // Challenge2
// let array = ['hi','hello','whatsup','goodbye','seeya','GoodMorning'];
// let longwoord = array.reduce(longestWord)
// function longestWord(accumulator, word){
//     return word.length > accumulator.length ? word : accumulator;
// }
// console.log(longwoord);

//Challenge3
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
const arrayPages = Books.map(book=>book.pages);
const numPages = arrayPages.reduce(averagePages);
function averagePages(book){
    
    const average = numPages/arrayPages.length;
    return average;
}
const averageBooks=averagePages(Books);
console.log(averageBooks);
