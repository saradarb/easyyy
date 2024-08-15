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
//const arob = (text7) => {
//  return text7.splice();
//}

//const arobb = arob({namee : "sam", home : "myhome" });
//console.log(arobb); // chack this again after watching video 17

//18.  write a function that adds default value of "unknown" to the object if the name key is not present or if the value of the name key is empty, undefined or null

const emtyy = (text8) => {
    if (text8 === "" || text8 === undefined || text8 === null) {
        console.log("unknown");
    } else {
        console.log(text8);
    }
}

emtyy("")
emtyy(undefined)
emtyy(null)
emtyy("hope")



//19.  Create a function that takes a number as an argument, increments the number by +1 and returns the result.
const incrmenn = (numb5) => {
    //return  numb5++; // why it isn't working 
    return numb5 + 1;
}

const inc = incrmenn(10);
console.log(inc)

//20.  Create a function that takes a number as an argument, multiplies the number by +3 and returns the result.

const multii = (numb6) => {
    //return  numb5++; // why it isn't working 
    return numb6 * 3;
}

const moool = multii(5);
console.log(moool)



//21.  Create a function that takes an array containing only numbers and return the first element.

const arrrray = [7, 2, 3, 4, 5, 6]

const arrfun = (arrrray1) => {
    return arrrray1[0];

} 

const aarr = arrfun(arrrray);
console.log(aarr)


//22. You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
 const basketball = (goals) => {
    if (goals === '2-pointers') {
        return goals + 2;
    } else if (goals === '3-pointers') {
        return goals + 3;
    }
 }

 const  finalGoals =  basketball('2-pointers' + '2-pointers' + '2-pointers');// i dont know how to count it
 console.log(finalGoals)

 //23.  Write a function that takes two numbers, return true if the sum of both numbers is less than 30. Otherwise return false.
const newSum = (numb8, numb9) => {
    if (numb8 + numb9 < 30 ) {
        return true;
    } else {
        return false;
    }
}

const resultt1 = newSum (5, 20)
console.log(resultt1)

//24.  Create a function that returns true when num1 is equal to num2; otherwise return false.
const compaar = (num1, num2) => {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

const resultt2 = compaar (20, 20)
console.log(resultt2)

//25.  Create a function that will handle simple math expressions. The input is an expression in the form of a string. Examples calculator("23+4") ➞ 27 calculator("45-15") ➞ 30 calculator("13+2-5*2") ➞ 5 calculator("49/7*2-3") ➞ 11",
const resultt3 = (num5, num6) => {
  let someNeww = 0;

    return Number(num5 + num6); 
} 

const express1 = resultt3("10", 7,8);
console.log(express1)// this isn't correct, maybe we can try a for loop that can go thought all the prices

//26.  Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
const howTall = (string1, string2) => {
    if (string1.length === string2.length) {
        return true;
    } else {
        return false;
    }
}

const resultt4 = howTall("hello", "Chinaa");
console.log(resultt4)


//27.  Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
/*const div1 = (num7) => {
    if (num7 / 5 ===  whole number){ // i need to change the whole number part, everything else looks correct.
        return true;
    } else {
        return false;
    }
} 

const resultt5 = div1(30, 5);
console.log(resultt5) */

//28.  A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks."

const canDrink = (customer) => {
    if (customer >= 18) {
        return "The customer can drink";
    } else {
        return "The customer Can't drink";
    }
} 

const resultt6 = canDrink(18);
console.log(resultt6)


//29.  Given a string, return true if its length is even or false if the length is odd.
const lenghtEvenOdd = (string3) => {
    if (string3.length % 2 === 0 ) {
        return true;
    } else {
        return false; 
    }
}

const resultt7 = lenghtEvenOdd("helloo");
console.log(resultt7)


//30.  Create a function that accepts an array and returns the last item in the array.
const lastItem = (lastArray) => {
    return lastArray.pop();
}

const resultt8 = lastItem([1, 2, 3, 4, 5, 6, 7]);
console.log(resultt8)


//31.  Create a function that takes a word and returns the new word without including the first character.
const firstChar = (string4) => {
    return string4.slice(1, string4.length-1) ;
}

const resultt9 = firstChar("hello");
console.log(resultt9)


//32.  Given two arguments, return an array which contains these two arguments. Examples makePair(1, 2) ➞ [1, 2] makePair(51, 21) ➞ [51, 21] makePair(512124, 215) ➞ [512124, 215]", code: ""
//i need to watch video 17 to solve this 


// 33.  Create a function that takes an array of numbers or letters and returns a string. Examples arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456" arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef" arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
//i need to watch video 17 or 18 to solve this  


//34.  Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function. Examples helloName("Gerald") ➞ "Hello Gerald!" helloName("Tiffany") ➞ "Hello Tiffany!" helloName("Ed") ➞ "Hello Ed!"
const helloName = (someName) => {
    return `Hello ${someName}!`;
}

const resulttt1 = helloName("Sara");
console.log(resulttt1)

//35.  A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
/* const carFive = (passengers) => {
    if ( passengers / 5 === "whole number") { // i stil don't know how to explain the whole number
        return passengers / 5;
    } else {
        return (passengers / 5) +1 
    }
} */

//36.  Write a function that prints all the odd numbers less than 100
const print100 = () => {
 
    for (let i = 1; i < 101; i+=2) {
    console.log(i)
   }
}

print100()

//37.  Write a function that takes in two parameters and calculates the sum of numbers between the two paramenters
/*const sumBetTwo = (numm1, numm2) => {
    for (let i = numm1; i <= numm2; i++){ //this is all the numbers between numm1 and numm2  
 /// i need to return the sum here
    }
} */

//38.  Write a function that takes an array of objects with keys name, age and email and remove any object that does not have an email


