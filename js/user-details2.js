

const accountDetailsHolder=[
    { 
      firstName:"Emmanuel",
      lastName:"Ighalo",
      email:"ighaloemmanuel3@gmail.com",
      accountNumber:"2078938389",
      dob:"12/3/2001",
      amount:"55000000$",
      password:"222222",
    },
    { 
      firstName:"Ola",
      lastName:"Tofunmi",
      email:"Olafunmi77@gmail.com",
      accountNumber:"8949758582",
      dob:"23/7/2003",
      amount:"75000000$",
      password:"jejj44",
    },
    { 
      firstName:"Segun",
      lastName:"Makinde",
      email:"iseggz2@gmail.com",
      accountNumber:"7584577575",
      dob:"1/4/1995",
      amount:"20$",
      password:"212dd",
    },
    { 
      firstName:"Rotimi",
      lastName:"Amaechi",
      email:"irotimiamaechi@gmail.com",
      accountNumber:"2900300336",
      dob:"30/12/1897",
      amount:"50000000$",
      password:"roti223",
    },
    { 
      firstName:"Jumoke",
      lastName:"Bisi",
      email:"jumokebisi990@gmail.com",
      accountNumber:"6780038837",
      dob:"12/3/2001",
      amount:"150000000$",
      password:"222222",
    },
    { 
      firstName:"Ukoh",
      lastName:"Ebiserem",
      email:"Ukohebi@gmail.com",
      accountNumber:"8969696996",
      dob:"1/6/1995",
      amount:"10050000$",
      password:"22fbjhjjh",
    },
    { 
      firstName:"Festus",
      lastName:"Okoahia",
      email:"festusokoahia33@gmail.com",
      accountNumber:"2078938389",
      amount:"150000$",
      dob:"6/5/2000",
      password:"222vfgt2",
    },
    { 
      firstName:"Isaiah",
      lastName:"Osariemen",
      email:"ice33@gmail.com",
      accountNumber:"2781923048",
      dob:"1/1/2002",
      amount:"20000000$",
      password:"2222rrg",
    },
]
function findAccountNumber(accountBox){
    return accountDetailsHolder.find((account)=> account.accountNumber===accountBox);
}

document.getElementById('btn').addEventListener("click", ()=>{
    const accountNumber=document.getElementById("accountBox").value;
    const accountDetailsHolder= findAccountNumber(accountNumber);
    const accountDetailsDiv=document.getElementById("accountDetailsHolder");
    if(accountDetailsHolder){
        accountDetailsDiv.innerHTML=
        `
     <b>ACCOUNT NUMBER: ${accountDetailsHolder.accountNumber}</p>
            <b>FIRSTNAME: ${accountDetailsHolder.firstName}</p>
            <b>LASTNAME: ${accountDetailsHolder.lastName}</p>
            <b>DATE OF BIRTH: ${accountDetailsHolder.dob}</p>
            <b>ACCOUNT BALANCE: ${accountDetailsHolder.amount}</p>
        
        `;
    }
    else{
        accountDetailsDiv.innerHTML="<b> Account Not Found!";
    }
}
);
const fs = require("fs")

