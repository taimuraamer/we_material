const students = [
  {
    name: "Dwight",
    dept: "Computer Science",
    start: 2012,
    end: 2016,
    gpa: 3.2,
  },
  {
    name: "Kelly",
    dept: "Psychology",
    start: 2010,
    end: 2012,
    gpa: 3.3,
  },
  {
    name: "Rayn",
    dept: "Computer Science",
    start: 2011,
    end: 2013,
    gpa: 2.7,
  },
  {
    name: "Michal",
    dept: "Political Science",
    start: 2018,
    end: 2022,
    gpa: 2.5,
  },
  {
    name: "Andy",
    dept: "Physics",
    start: 2016,
    end: 2020,
    gpa: 2.2,
  },
  {
    name: "Jim",
    dept: "Physics",
    start: 2017,
    end: 2021,
    gpa: 3.0,
  },
  {
    name: "Pam",
    dept: "Political Science",
    start: 2011,
    end: 2013,
    gpa: 3.1,
  },
];

const ages = [33, 12, 54, 5, 18, 17, 13, 61, 25, 32, 44, 16, 15, 64, 34];

// back ticks

// console.log("The first name is " + students[0].name + " and department is " + students[0].dept)

// console.log(`The first name is ${students[3].name} and department is ${students[3].dept}`)

// arrow funcitons

// function print() {
//     console.log(`This is a line`)
// }

// const print = () => console.log('This is a line')
// print();

// const sayHello = name => console.log(`Hello ${name}`)
// sayHello("Basit")

// function product (num1, num2)
// {
//     return num1 * num2;
// }

// const product = (num1, num2) => num1 * num2;
// console.log(product(10, 20));

// // default arguments
// function sayHello(name="Guest") {
//     console.log(`Hello ${name}`)
// }

// sayHello()

// const sayHello = (name="Guest") => console.log(`Hello ${name}`);
// sayHello()

// Higher level Array methods

// for(let i=0;i<ages.length;i++)
// {
//     console.log(ages[i])
// }

// ages.forEach((age) => {
//     if(age <= 16)
//     console.log(age)
// })

// students.forEach((student) => {
//     if(student.start >= 2016)
//         console.log(student.name)
// })

// function test(hello)

// function hello(name) {
//     console.log(name);
// }

// students.forEach(student => {
//     console.log(student.name)
// })

// filter
// let ages16 = [];
// for(let i=0;i<ages.length;i++)
// {
//     if(ages[i] >= 16)
//     {
//         ages16.push(ages[i]);
//     }
// }
// console.log(ages16)

// const agelt16 = ages.filter((age) => {
//     if(age <= 16)
//         return true;
// })

// console.log(agelt16)

// const ages16 = ages.filter((age) => age >= 16 ? true : false)
// const ages16 = ages.filter((age) => age >= 16)
// console.log(ages16)

// const csStudents = students
//   .filter((student) => student.dept === "Computer Science")
//   .forEach((student) => console.log(student.name));

// const  ages16 = ages.filter(function(age) {
//     if(age >= 16)
//     {
//         return true;
//     }
// });
// console.log(ages16)

// const ages16 = ages.filter(age => age >= 16);
// console.log(ages16)

// const csStudents = students.filter( student => student.dept === 'Physics');
// console.log(csStudents);

// const after2013 = students.filter(item => (item.start >= 2012 && item.end <= 2016));
// console.log(after2013)

// const agesTimesTwo = ages.map((age) => age * 2)
// console.log(agesTimesTwo)

// const newGPA = students
//                     .map((student) => student.gpa * 2)
//                     .map((student) => student.gpa * 3)

// console.log(newGPA)

// map
// const name = students.map(function (item) {
//     return item.name;
// });
// console.log(name);

// const names = students.map(item => item.name);
// console.log(names);

// const agesSqrt = ages.map(age => Math.sqrt(age));

// console.log(agesSqrt);
// const newAges = ages
//                     .map(age => age * 2)
//                     .map(age => age * 3);

// console.log(newAges);

// sort

// const sortedAges = ages.sort((num1, num2) => {
//   return num2 - num1;
// })

// console.log(sortedAges)

// const gpa = students.map((student) => {
//   return student.gpa 
// }).sort((s1, s2) => {
//   return s2 - s1;
// })

// console.log(gpa)

// const sorted = students.sort(function (c1, c2) {
//     if(c1.start > c2.start)
//     {
//         return 1;
//     }
//     else
//         return -1;
// });

// console.log(sorted);

// const sorted = students.sort( (c1, c2) => (c1.start > c2.start) ? 1 : -1)
// console.log(sorted);

// const sorted = ages.sort();
// console.log(sorted);

// const sorted = ages.sort((a,b) => a - b);
// console.log(sorted);

// reduce

// let sum = 0;
// for(let i=0;i<ages.length;i++)
// {
//   sum = sum + ages[i];
// }

// console.log(sum);

// const init = 0;
// const sumAges = ages.reduce((sum, age) => {
//   return sum += age;
// },init)

// console.log(sumAges)

// const sumGPA = students.reduce((sum, student) => {
//   return sum += student.gpa
// },0)

// console.log(sumGPA);

// ageSum = 0;
// for(let i=0;i<ages.length;i++)
// {
//     ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);
// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// const startSum = students.reduce(function(total, students) {
//     return total + students.start
// }, 0);

// console.log(startSum);

// combination
// const combine = ages
//                     .map(age => age * 2)
//                     .filter(age => age >= 40)
//                     .sort((a, b) => a - b)
//                     .reduce((total, ages) => total+ages,0)

// console.log(combine)

// concatination
// var arr1 = [1,2,4,5,6];
// var arr2 = [45,6,6,7,7,8];

// var arr3 = arr1.concat(arr2);

// console.log(arr3);

// const s1 = "This is line one. "
// const s2 = "This is line two."

// const s3 = s1.concat(s2);

// console.log(s3)

// const a1 = [12,34,45,5,65]
// const a2 = [12,34,45,5,65]


// const result = a1[0] * a2[3];

// console.log(result)

// spread
// combine elements of two arrays.
// var subjects = ['Web Designing', 'Database', 'OOP'];
// var subjects2 = ['Data Structure', 'Algorithms', ...subjects, 'Data Science']

// console.log(subjects2);

// passing elemtents of array as argurments functions
// function add(a, b, c)
// {
//     console.log(a+b+c)
// }

// var args = [0,1,2,4];

// add(...args);

// as REST operator (ellipsis in Java)

// function multiply(multiplier, ...args)
// {
//     return args.map(element => multiplier * element);
// }
// var arr = multiply(2,3,4,5);
// console.log(arr);


// function sum(arr) {
//   return arr.reduce((total, arr) => total+=arr,0)
// }

// arr = [2,3,45,65,6]

// const total = sum(...arr);

// console.log(total)


// function sum(arr)
// {

// }

// arr = [2,3,5,65]

// sum(...arr)