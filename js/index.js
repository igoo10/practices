// console.log(2+2);
// no1=2
// no2=2
// console.log(no1+no2);
// console.log(5+5);
// console.log(5*5);
// console.log(5**3);
// console.log(28/10);

//  let no1=5
//  let no2=6
// console.log(no1+no2);

// let x= 5;
// let y=--x;
// console.log(`x=${x} and y=${y}`);

// let x1=5;
// let y1=x--;
// console.log(`x1=${x1} and y1=${y1}`);
// var num
// var num2=5
// num2--
// var sum = num + num2
// console.log(sum);

// Save this as daysOfWeek.js
let  day = 3;
let dayName;

switch (day) {
    case 0:
        dayName = 'Sunday';
        break;
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
        break;
}

console.log(`Today is ${dayName}`);




function evaluateGrade(score) {
    switch (true) {
        case (score >= 70):
            console.log('Excellent!');
            break;
        case (score >= 60):
            console.log('You got B');
            break;
        case (score >= 50):
            console.log('You got C');
            break;
        case (score >= 45):
            console.log('You got D');
            break;
        case (score < 45):
            console.log('You failed!');
            break;
        default:
            console.log('Invalid Grade!');
            break;
    }
}
evaluateGrade(62)

//WHILE LOOP EXAMPLES//
// Example 1: Counting from 1 to 5
// let count = 1;

// while (count <= 5) {
//     console.log(count);
//     count++;
// }

// Example 2: Printing even numbers between 1 and 10
// let number = 2;

// while (number <= 10) {
//     console.log(number);
//     number += 2;
// }

// var days=['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// console.log(days);

// days.push('cookday');
// console.log(days);

// days.unshift('salday');
// console.log(days);

// days.pop();
// console.log(days);

// days.shift();
// console.log(days);

// delete days[1];
// console.log(days);

//DO WHILE LOOP//
let counter = 1;
do {
    console.log(counter);
    counter++;
} while (counter <= 5);

//FOR LOOP//
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log("Sum:", sum);

// let registrationDetails={
//     firstName:'Emmanuel',
//     lastName:'Ighalo',
//     email:'ighaloemmanuel3@gmail.com',
//     nationality:'nigeria',
//     state:'edo',
// }
// console.log(registrationDetails);

var studentDetails = new Object()
studentDetails.firstname = document.getElementById("firstname").value
studentDetails.lastname = document.getElementById("lastname").value
studentDetails.country = document.getElementById("country").value
studentDetails.dob = document.getElementById("dob").value
studentDetails.address = document.getElementById("address").value
studentDetails.phonenumber = document.getElementById("phonenumber").value
studentDetails.stateoforigin = document.getElementById("stateoforigin").value
studentDetails.password = document.getElementById("password").value
studentDetails.firstname = document.getElementById("hackerspace").value
console.log(studentDetails)

const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const country = document.getElementById('country');
    const dateofBirth = document.getElementById('dob');
    const address = document.getElementById('address');
    const phoneNumber = document.getElementById('phonenumber');
    const stateOfOrigin = document.getElementById('stateoforigin');
    const userPassword = document.getElementById('password');
    const userHackerspace = document.getElementById('hackerspace')
    const btn = document.getElementById("btn");
    btn.addEventListener("click" , function(e){
        e.preventDefault()
        const userDetails={
            "first-name":firstname.value,
            "last-name":lastname.value,
            "country":country.value,
            "dob":dob.value,
            "address":address.value,
            "phone-number":phonenumber.value,
            "stateoforigin":stateoforigin.value,
            "password":password.value,
            "hacker-space":hackerspace.value,
        }
        console.log(userDetails)
    }
)

let passMark=50;
let result=(passMark>=50)?"You passed":"You failed";
console.log(result);
function multiplication(){return 5*5};
const multiplicationA=()=>{ return 5*4};

console.log(multiplication)



const findAccount=(value)=>{
    const userDetails=[
        { 
          firstName:"Emmanuel",
          lastName:"Ighalo",
          email:"ighaloemmanuel3@gmail.com",
          accountNumber:"2078938389",
          dob:"12/3/2001",
          password:"222222",
        },
        { 
          firstName:"Ola",
          lastName:"Tofunmi",
          email:"Olafunmi77@gmail.com",
          accountNumber:"894975858",
          dob:"23/7/2003",
          password:"jejj44",
        },
        { 
          firstName:"Segun",
          lastName:"Makinde",
          email:"iseggz2@gmail.com",
          accountNumber:"758457757",
          dob:"1/4/1995",
          password:"212dd",
        },
        { 
          firstName:"Rotimi",
          lastName:"Amaechi",
          email:"irotimiamaechi@gmail.com",
          accountNumber:"290030033",
          dob:"30/12/1897",
          password:"roti223",
        },
        { 
          firstName:"Jumoke",
          lastName:"Bisi",
          email:"jumokebisi990@gmail.com",
          accountNumber:"678003883",
          dob:"12/3/2001",
          password:"222222",
        },
        { 
          firstName:"Ukoh",
          lastName:"Ebiserem",
          email:"Ukohebi@gmail.com",
          accountNumber:"8969696996",
          dob:"1/6/1995",
          password:"22fbjhjjh",
        },
        { 
          firstName:"Festus",
          lastName:"Okoahia",
          email:"festusokoahia33@gmail.com",
          accountNumber:"2078938389",
          dob:"6/5/2000",
          password:"222vfgt2",
        },
        { 
          firstName:"Isaiah",
          lastName:"Osariemen",
          email:"ice33@gmail.com",
          accountNumber:"2078938389",
          dob:"1/1/2002",
          password:"2222rrg",
        }
  ]
  const accountRetrieval= userDetails.find(item=> item.firstName.includes(value));
  if(!accountRetrieval){
    console.log("record not found")
    return
  }
  console.log(accountRetrieval)

}
findAccount("car")


function additionOfNumbers(){
    var result=2+2
    // console.log(result);
    return result
}
additionOfNumbers();

function subtractionOfNumbers(){
    var result=3-2
    // console.log(result);
    return result
}
subtractionOfNumbers();

export {additionOfNumbers};
export {subtractionOfNumbers};