//1.  Write a JavaScript function that prints "Hello, World!" to the console.
function one() {
    console.log("Hello, World!");
}
one()

//2.  Write a function that takes two numbers as arguments and returns their sum.
const two = (a,b) => {
    return a + b;
  }

const sum = two(1,3)
console.log(sum)

//3.  Write a function that takes a number as input and returns "Even" if it's even and "Odd" if it's odd.
const evenAndOdd = (num) => {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
evenAndOdd (4)

//4.  Write a function that checks if a given string is a palindrome (reads the same backward as forward).
//I don't know how

//5.  Write a function that returns the length of an array.
const llength = (array) => {
    return array.length;
}

const llength1 = llength([1, 2, 3, 4]);
console.log(llength1)

//6.  Write a function that generates a random number between a given minimum and maximum value.
//we can use a loop 
const randoom = (numb1) => {
   // const maxx = math.max(numb1);
    //const minn = math.min(numb1); i don't know how to use these
    return Math.random(numb1); // i was not able to put the maximum and  minimum
}

const randd = randoom();
console.log(randd)


//7.  Write a function that rounds a number to a specified number of decimal places.
// i don't know how to get the place
const decimal = (numb2) => {
    return Math.round(numb2);
}

const somedec = decimal(12.3333456); // i don't know how to get the place
console.log(somedec)


// 8.  Write a function that calculates the square root of a given number.
const squaa = (numb3) => {
    return Math.sqrt(numb3);
}

const squaar = squaa(9);
console.log(squaar)


//9.  Write a function that calculates the sum of the digits of a positive integer.
const newsum = (c,d) =>{
    const newsumm = parseInt(c + d);
    return newsumm;
}

const newsumm1 = parseInt(5,5);
console.log(newsumm1); // i dont know what i did wrong, keeps on saying (NAN)





