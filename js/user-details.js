/* const findAccount=(value)=>{
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
        },
  ]
} */
const getAccountNumber = document.getElementById('accountNumber');
// const form = document.getElementById("form")
const btn = document.getElementById("button");
const cardCont = document.getElementById("cardCont");
const search = document.getElementById("search")
const viewAccountDetailsBtn=document.getElementById("viewDetails");
const userDetails = [
    {
        firstName: "Emmanuel",
        lastName: "Ighalo",
        email: "ighaloemmanuel3@gmail.com",
        accountNumber: "2078938389",
        dob: "12/3/2001",
        password: "222222",
    },
    {
        firstName: "Ola",
        lastName: "Tofunmi",
        email: "Olafunmi77@gmail.com",
        accountNumber: "894975858",
        dob: "23/7/2003",
        password: "jejj44",
    },
    {
        firstName: "Segun",
        lastName: "Makinde",
        email: "iseggz2@gmail.com",
        accountNumber: "758457757",
        dob: "1/4/1995",
        password: "212dd",
    },
    {
        firstName: "Rotimi",
        lastName: "Amaechi",
        email: "irotimiamaechi@gmail.com",
        accountNumber: "290030033",
        dob: "30/12/1897",
        password: "roti223",
    },
    {
        firstName: "Jumoke",
        lastName: "Bisi",
        email: "jumokebisi990@gmail.com",
        accountNumber: "678003883",
        dob: "12/3/2001",
        password: "222222",
    },
    {
        firstName: "Ukoh",
        lastName: "Ebiserem",
        email: "Ukohebi@gmail.com",
        accountNumber: "8969696996",
        dob: "1/6/1995",
        password: "22fbjhjjh",
    },
    {
        firstName: "Festus",
        lastName: "Okoahia",
        email: "festusokoahia33@gmail.com",
        accountNumber: "2078938389",
        dob: "6/5/2000",
        password: "222vfgt2",
    },
    {
        firstName: "Isaiah",
        lastName: "Osariemen",
        email: "ice33@gmail.com",
        accountNumber: "2078938389",
        dob: "1/1/2002",
        password: "2222rrg",

        },
]
function findAccountNumber(accountNumber) {
    const findDetails = userDetails.find(account => account.accountNumber === accountNumber);
    console.log(findDetails)
    if (findDetails) {
        cardCont.innerHTML = `
        <div>
         <h2 class="card-title">Account Details</h2>
            <b>FIRSTNAME:${findDetails.firstName}<br><br>
            LASTNAME:${findDetails.lastName}<br><br>
            ACCOUNT-NUMBER:${findDetails.accountNumber}<br><br>
        </div> `
    }
    else{
        alert("record not found")
    }
}
userDetails.map((items) =>{
    cardCont.innerHTML +=`
    <div class="card-body" style="width: 200px;">
            <h5 class="card-title">USER</h5>
            <p class="card-text"><b>FIRST-NAME</b>:${items.firstName}</p>
            <p class="card-text"><b>LAST-NAME</b>:${items.lastName}</p>
          
          </div>
    `
})



btn.addEventListener("click" , (e) => {
    e.preventDefault();
    findAccountNumber(search.value);
})
console.log(viewAccountDetailsBtn)
/* viewAccountDetailsBtn.addEventListener("click" , (e) =>{
    e.preventDefault();
    userDetails.map((items) => {
        cardCont.innerHTML += `
            <p>${items.accountNumber}</p>
            <p>${items.email}</p>
        `
    })
})  */



    