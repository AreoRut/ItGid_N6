//document.querySelector('button').onclick = () => { }
/////////////////////////////////////////////////////////////
/*document.querySelector('button').onclick = myFunc;
function myFunc() {
}
////////////////////////////////////////////////////////////
document.querySelector('#button2').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log("Нажат");
    } else {
        console.log("Не Нажат");
    }
}*/

//for
//while #Part2
///////////////////////////////////////////////////////////
let out = document.querySelector('.out');
console.log(out);
/*for (i = 0; i < 5; i++) {
    //i=0;
    for (let k = 0; k < 10; k++) {
        //k=0;
        out.innerHTML += "*";
    }
    out.innerHTML += '<br>';
    //
}*/
//////////////////////////////////////////////////////////////


for (let i = 1; i < 10; i++) {
    //out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
    //out.innerHTML += `3*${i}=${3 * i}<br>`;

    for (let k = 1; k < 10; k++) {
        //out.innerHTML += `3*${i}=${3 * i}<br>`;
        out.innerHTML += `${i}*${k}=${k * i}<br>`;
    }
    out.innerHTML += '<hr>';
}

//////////////////////////////////////////////////////////
//#1

for (i = 0; i < 3; i++) {
    //i=0;
    for (let k = 0; k < 3; k++) {

        out.innerHTML += "*";
    }
    out.innerHTML += '_';

}