
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

//removeItem(keyName)

window.onload = function() {
    LoadAllNotes();
  };




function noteCreate(){
var name = document.getElementById("fname").value;
var note = document.getElementById("note").value;
var suggestion = document.getElementById("suggestion").checked;

var save = name+'/'+note+'/'+GetDate()+'/'+suggestion;

console.log(save);
if(localStorage.getItem('note_count')==null){
    localStorage.setItem("note_count", 0);
}
var count = parseInt(localStorage.getItem("note_count"));
count+=1; 

localStorage.setItem("note"+(count), save)
localStorage.setItem('note_count', count);


for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    console.log(key + " => " + value);
    //localStorage.removeItem(localStorage.key(i));
}

const div = document.createElement('div');

div.className = 'row';

if(suggestion==true){
    div.innerHTML = `
    <label for="fname">` + name+`</label>
    <p>`+note+`</p>
    <p>`+GetDate()+`</p>
    <p>Important `+suggestion+`</p>
    <hr style="    height: 1px;
    background-color: #ff0000;
    border: none;">
    
    `;
}
else{
    div.innerHTML = `
    <label for="fname">` + name+`</label>
    <p>`+note+`</p>
    <p>`+GetDate()+`</p>
    <p>Important `+suggestion+`</p>
    <hr>
    
    `;
}


document.getElementById('notes').appendChild(div);
}

var num = 0;

function test(){
    if(localStorage.getItem('num')==null){
        localStorage.setItem("num", 0);
    }
    num = localStorage.getItem("num"); 
num=num+1;
console.log('num '+num);
localStorage.setItem("num", num);

}

function GetDate(){
    let wholeDate = new Date();
let day = wholeDate.getDate();
let month = wholeDate.getMonth();
let year = wholeDate.getFullYear();
let data = day+'.'+month+'.'+year;

return data;
}

function LoadAllNotes(){
    console.log("LoadAllNotes");

    for(var i=0, len=localStorage.length; i<len; i++) {
        let key = localStorage.key(i);
        var value = localStorage[key];
        //console.log(key + " => " + value);

        let textLocal = localStorage[key];
        var namesNum =0;
        var name = '';
        var note = '';
        var date = '';
        var impordddt = '';
        console.log(textLocal.includes('note'));

        if(key.includes('note') && !key.includes('note_')){
            console.log("working");
        for(var textC=0, lenghText=textLocal.length; textC<lenghText;textC++){
            if(textLocal[textC]!="/"){
                console.log('num ' + namesNum);

                switch(namesNum){
                    case 0:
                        name +=textLocal[textC];
                        break;
                    case 1:
                        note +=textLocal[textC];
                        break;
                    case 2:
                        date +=textLocal[textC];

                        break;
                    case 3:
                        impordddt +=textLocal[textC];

                        break; 
                }
            }
            else{
                namesNum+=1;
            }
        }


            const div = document.createElement('div');
            div.className = 'row';

            if(name==''){
                name='none';
            }

            if(impordddt=="true"){
                div.innerHTML = `
                <label for="fname">` + name+`</label>
                <p>`+note+`</p>
                <p>`+date+`</p>
                <hr style="    height: 1px;
                background-color: #ff0000;
                border: none;">
                
                `;
            }
            else{
                div.innerHTML = `
                <label for="fname">` + name+`</label>
                <p>`+note+`</p>
                <p>`+date+`</p>
                <hr>
                
                `;
            }

            document.getElementById('notes').appendChild(div);

        }}


    }
