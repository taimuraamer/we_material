var age = 100;

// if (age >= 1 && age < 20) {
//     console.log('Adolesent');
// }
// if (age >= 20 && age <= 60) {
//     console.log('Adulthood');
// }
// if (age > 60) {
//     console.log('Old Age');
// }

// var a = 10;
// if (a > 2)
//     console.log('Yes');
// else if (a > 3)
//     console.log("No")
// else if (a > 5)
//     console.log("True")
// else
//     console.log('else part')

// var ch = window.prompt('Enter a character');

// switch (ch) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log('Vowel');
//         break;
//     default:
//         console.log('Consonenet')
// }

// var a = 10;

// if (a > 10) {
//     console.log(10);
// }
// else {
//     console.log(30)
// }

// test = (a > 10 ? 20 : 30);

// console.log(test);

// a = a + 1;

// for (i = 0; i <= 20; i += 1) {
//     if (i % 2 != 0)
//         console.log(i);
// }

// list = [30, 50, 60, 80, 40, 60, 90, 100]

// for (i = 0; i < list.length; i++) {
//     console.log(list[i])
// }

// for (index in list) {
//     console.log(list[index])
// }

// a = 90;

// while (a <= 100) {
//     console.log(a)
//     a++;
// }

// i = 100;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// i = 10;

// do {
//     console.log(i)
//     i++;
// }
// while (i <= 20);

// functions 

// function print() // definition
// {
//     console.log("THis is a line from function")
// }


// print(); // call

// function add(a, b) {
//     return a + b;
// }

// console.log(add(10,100))
// console.log(add(120,100))
// console.log(add(90,100))
// console.log(add(60,100))

// function hello(name="Guest")
// {

//     // (!name ? console.log("Hello Guest") : console.log("Hello " + name))
//     console.log("Hello " + name)
    
// }

// hello("Abdul Wadood")

// function printSequence(start, end, jump=1) {
//     for(var i=start; i<=end; i = i + jump)
//     {
//         console.log(i);
//     }
// }

// printSequence(1,10);


// Arrays

function printArray(array) {
    
for(var i=0;i<array.length;i++)
{
    console.log(array[i])
}
}

var age = [20,23,24,26,29,30,32,33];
var names = ["Faizan", "Naeem", "Zafar", "Amjad", "Salahuddin"];
var names2 = ["Abdullah", "Abdul Wadood"]

var address = ["Hayatabad, Peshawar", "Alharam, Khyber Agency", "Kohat, Khadi Zai"];

// for(var i=0;i<age.length;i++)
// {
//     console.log(age[i])
// }

// names.push("Farooq");
// names.pop()
// delete names[0]

// names.shift();
// names.unshift("Test");

// var fullNames = names.concat(names2);

// var test = names.toString(); // array to string

// var names3 = test.split(",") // string to array

// age.sort();

// var newNames = names.slice(0,2);

// names.push("Test");

// names.splice(0,3,"Mansoor", "Test2", "Test3")

// var n = names.lastIndexOf("Naeem")

// if(n<0)
//     console.log("Not found.")
// else if(n >= 0)
//     console.log("Found on index " + n);
// printArray(names);


names.join("*")


// array functions
// foreach

// array.foreach()
// {

// }
// array.push();
// array.pop();
// array.shift();
// array.unshift();
// array.concat();
// array.foreach();
// array.toString();
// delete keyword;
// array.splice();
// array.slice();


