
/*let wholeDate = new Date();
let day = wholeDate.getDate();
let month = wholeDate.getMonth();
let year = wholeDate.getFullYear();

const sect = document.querySelector('section');
const datePara = document.createElement('p');
datePara.textContent = `${day} ${month+1} ${year}`;
sect.appendChild(datePara)

async function getData(){
    const response = await fetch('fname');
    const table = await response.json();

    for (fnames of taulu){
        let h = document.createElement("h4");
     
        document.body.appendChild(h);
    }
}*/

function noteCreate(){
document.getElementById("notesHere").innerHTML = note; 
}