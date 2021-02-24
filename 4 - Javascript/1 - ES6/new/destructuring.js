// object destructuring : // const {name: firstName = "Testing", age} = person;
// array destructuring  : // const [, city, state='test'] = address
// function argument destructoring fun({a, b}) => a + b

// const person = {
//     name: "Tufail",
//     id: 1234,
//     age: 10,
//     location: {
//         village: 'Tehkal',
//         mohlla: 'Haji Khail',
//         tehsil: 'Peshawar'
//     }
// }

// const {name: myName = "Guest", id: rollno, age=10, location} = person;

// // console.log(`My name is ${name} and my age is ${age} 
// // and my tehsil is ${location.tehsil}`)

// const address = ["Tehkal", "Haji Khael", "Peshawar", "Charsadda"]

// const [, mohalla, , city2] = address;


// const sum = ({name="Guest", age=18} = {}) => {
// console.log('age:' + age)
// console.log('Name:' + name)
// };

// sum()

const person = {
    name: "Tufail",
    id: 1234,
    age: 10,
    location: {
        village: 'Tehkal',
        mohlla: 'Haji Khail',
        tehsil: 'Peshawar'
    }
}



function printData({ age, id }) {
    console.log(age)
    console.log(id)
}



printData(person)