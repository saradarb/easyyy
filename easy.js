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

//10.  Write a function that counts the number of vowels (a, e, i, o, u) in a string.

let somthingg = "hello";

const counting = () => {
    for (let i = 0; i < somthingg.length; i++) {
        console.log(somthingg[i]);
      }
}
counting (somthingg)


//11.  Write a function that returns the length of a given string.
const newLength = (stringg) => {
    return stringg.length;
}

const striggLengthh = newLength("sarahhh");
console.log(striggLengthh)


//12.  Write a function that converts a string to uppercase.

const uppeer = (text1) => {
    return text1.toUpperCase();
}

const text2 = uppeer("some text here");
console.log(text2)


//13.  Write a function that checks if a given string contains a specific 

const checkks = (text3) => {
    return text3.indexOf("hello");
}
const cheking = checkks("world there hello");
console.log(cheking)


//14.  Write a function that replaces all occurrences of a substring with another substring within a given string.
const replacer = (text4) =>{
    if (text4 === "hello") {
        return text4.replace("hi");
    } else {
        return text4;
    }   
}

const replacerr = replacer("hello");
console.log(replacerr) //this did't work, it's not replacing anything

//15.  Write a function that removes all whitespace from a given string.
const whitee = (textx5) => {
    return textx5.trim()
}

const whitte = whitee("    this is a text      ")
console.log(whitte)
console.log("    this is a text      ")

//16.  Create a function that takes an array of numbers and filters out negative numbers

const numbers = [1, -1, 2, -2, 3, -3]

//const filterr = numbers.filter((numberss) => numbers[i] < 0);
//console.log(filterr);
    // i need to put somthing here but i dont know how to use the filter




// 17.  Write a function that takes an object as an argument and returns an array of all the keys present in the object
const arob = (text7) => {
  return text7.splice();
}

const arobb = arob({namee : "sam", home : "myhome" });
console.log(arobb);





