
const users=[
    { 
      firstName:"Emmanuel",
      lastName:"Ighalo",
      email:"ighaloemmanuel3@gmail.com",
      ninNumber:"20789383891",
      dob:"12/3/2001",
      State_or_oigin:"Edo State",
      sex:"Male",
    },
    { 
      firstName:"Ola",
      lastName:"Tofunmi",
      email:"Olafunmi77@gmail.com",
      ninNumber:"894975858257",
      dob:"23/7/2003",
      State_or_oigin:"Ogun State",
      sex:"Male",
    },
    { 
      firstName:"Segun",
      lastName:"Makinde",
      email:"iseggz2@gmail.com",
      ninNumber:"75845775750",
      dob:"1/4/1995",
      State_or_oigin:"Oyp State",
      sex:"Male",
    },
    { 
      firstName:"Rotimi",
      lastName:"Amaechi",
      email:"irotimiamaechi@gmail.com",
      ninNumber:"29003003362",
      dob:"30/12/1897",
      State_or_oigin:"Ogun State",
      sex:"Male",
    },
    { 
      firstName:"Jumoke",
      lastName:"Bisi",
      email:"jumokebisi990@gmail.com",
      ninNumber:"67800388372",
      dob:"12/3/2001",
      State_or_oigin:"Oyo State",
      sex:"Female",
    },
    { 
      firstName:"Ukoh",
      lastName:"Ebiserem",
      email:"Ukohebi@gmail.com",
      ninNumber:"89696969969",
      dob:"1/6/1995",
      State_or_oigin:"Cross-River State",
      sex:"Male"
    },
    { 
      firstName:"Festus",
      lastName:"Okoahia",
      email:"festusokoahia33@gmail.com",
      ninNumber:"20789383894",
      State_or_oigin:"Edo State",
      dob:"6/5/2000",
      sex:"Male",
    },
    { 
      firstName:"Isaiah",
      lastName:"Osariemen",
      email:"ice33@gmail.com",
      ninNumber:"27819230487",
      dob:"1/1/2002",
      State_or_oigin:"Edo State",
      sex:"Male",
    },

    { 
        firstName:"Jennifer",
        lastName:"Isidahomen",
        email:"jenny@gmail.com",
        ninNumber:"15679046782",
        dob:"5/4/2001",
        State_or_oigin:"Edo State",
        sex:"Female",
      },
]
function findUser(ninBox) {
    return users.find((details) => details.ninNumber === ninBox);
}

document.getElementById('btn').addEventListener("click", () => {
    const ninNumber = document.getElementById('ninBox').value;
    const ninDetailsHolder = findUser(ninNumber);
    const ninDetailsContainer = document.getElementById("ninDetailsHolder");

    if (ninDetailsHolder) {
        ninDetailsContainer.innerHTML = `
            <b>NIN-NUMBER:</b> ${ninDetailsHolder.ninNumber}<br>
            <b>FIRSTNAME:</b> ${ninDetailsHolder.firstName}<br>
            <b>LASTNAME:</b> ${ninDetailsHolder.lastName}<br>
            <b>DATE OF BIRTH:</b> ${ninDetailsHolder.dob}<br>
            <b>STATE OF ORIGIN:</b> ${ninDetailsHolder.State_or_oigin}<br>
            <b>SEX:</b> ${ninDetailsHolder.sex}
        `;
    } else {
        ninDetailsContainer.innerHTML = "<b>USER DOES NOT EXIST!</b>";
    }
})