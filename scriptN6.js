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
//console.log(out);
/*
for (i = 0; i < 5; i++) {
    //i=0;
    for (let k = 0; k < 10; k++) {
        //k=0;
        out.innerHTML += "*";
    }
    out.innerHTML += '<br>';
    //
}
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

}*/

//#2
for (let i = 1; i < 4; i++) {
    out.innerHTML += i;
    out.innerHTML += '<br>';
    for (let i = 0; i < 1; i++) {

        for (let i = 0; i < 1; i++) {
            out.innerHTML += "*";
            out.innerHTML += '_';
            out.innerHTML += "*";
            out.innerHTML += '_';
            out.innerHTML += "*";
            out.innerHTML += '_';
            out.innerHTML += '<br>';
        }
        //out.innerHTML += '<br>';
    }
    //out.innerHTML += '<br>';
    //out.innerHTML += i;
}
//#3
out.innerHTML += '<br>';
for (let i = 1; i < 4; i++) {
    out.innerHTML += '<br>';

    for (let i = 0; i < 3; i++) {
        out.innerHTML += "*";
        out.innerHTML += '_';
    }
}
////#3_1
out.innerHTML += '<br>';
for (let i = 1; i < 4; i++) {
    out.innerHTML += '<br>';

    for (let i = 0; i < 1; i++) {
        out.innerHTML += "*";
        out.innerHTML += '_';
        out.innerHTML += "*";
        out.innerHTML += '_';
        out.innerHTML += "*";
        out.innerHTML += '_';
    }
}
out.innerHTML += '<br>';
//#4
/*
out.innerHTML += '<br>';
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        out.innerHTML += i;
        out.innerHTML += '_';

    } if (i % 2 != 0) {
        for (let i = 10; i > 0; i--) {

            out.innerHTML += '*';
            out.innerHTML += i;
        }
        out.innerHTML += '$';
    }
    out.innerHTML += '#';
    //

}

out.innerHTML += '<br>';


for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        out.innerHTML += i;
        out.innerHTML += '*';
    } if (i % 2 != 0) {
        for (let i = 10; i > 0; i--) {

            out.innerHTML += '_';
            out.innerHTML += i;
        }

    }
}
*/
//////////////////////////////////////////////
//#4
/*
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        out.innerHTML += i;
        out.innerHTML += '*';
        //console.log(+i);
        //console.log(+'*');

    } else {
        for (let i = 10; i > 0; i--) {
            out.innerHTML += '_';
            out.innerHTML += i;
            //console.log(+'_');
            //console.log(+i);

        }
    }
}
////////////////////////////////////////////////////////////////
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(+i);
        console.log(+'_');

    } else {
        for (let i = 10; i > 0; i--) {
            if (i % 2 != 0) {
                console.log(+'*');
                //console.log(+i);
            }
        }
        console.log(+'$');
    }
    console.log(+'#');
}
//////////////////////////
/*
for (let i = 0; i < 10; i++) {
    for (let k = 10; k > 0; i--) {
        if (i % 2 == 0) {
            console.log(i);
        } if (k % 2 != 0) {
            console.log("#" + k);
            break;
        }
        break;
    }
}*/
//////////////////////////////////////////////////////////
/*out.innerHTML += '<br>';
let k = 10
for (i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        for (; k > 0; k--) {
            //k=0;
            out.innerHTML += k;
            out.innerHTML += '_';
        }
        //k--;
    } else {
        // out.innerHTML += '*';
        out.innerHTML += i;
        //out.innerHTML += '*';
        out.innerHTML += ' # ';

    } k--;
}
*/

////////////////#5
/*out.innerHTML += '<br>';
for (let i = 0; i < 3; i++) {
    out.innerHTML += '<br>';
    for (let i = 0; i < 3; i++) {
        out.innerHTML += 1;
        out.innerHTML += 0;

    }
    
*/
//#6 10x01x
out.innerHTML += '<br>';
for (let n = 0; n < 3; n++) {
    out.innerHTML += '<br>';
    for (let n = 0; n < 1; n++) {
        out.innerHTML += 1;
        out.innerHTML += 0;
        out.innerHTML += 'x';
        out.innerHTML += 0;
        out.innerHTML += 1;
        out.innerHTML += 'x';

    }
}
out.innerHTML += '<br>';

//#7
let q = 1;
let q2 = 10;
out.innerHTML += '<br>';
for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 7; k++) {
        if (k < q || k > q2) {
            out.innerHTML += "*";
        } else {
            out.innerHTML += " ";
        }
        //out.innerHTML += " ";
    }
    q2++;
    q++;
    out.innerHTML += '<br>';
}

//# модификация к задаче 4  со следующим резудьтатом --0
/*
#9
2
#7
4
#5
6
#3
8
#1

let k = 10
for (let i = 0; i < 10; i++) {
    for (; k > 0; i--) {
        if (i % 2 == 0) {
            console.log(i);
        } if (k % 2 != 0) {
            console.log("#" + k);
            break;
        }
        break;
    } k--;
}*/

//8

let q3 = 5;
let q4 = 3;
out.innerHTML += '<br>';
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5; k++) {
        if (k < q3 || k > q4) {
            out.innerHTML += "*";
        } else {
            out.innerHTML += " ";
        }
        //out.innerHTML += " ";
    }
    q3--;
    q4++;
    out.innerHTML += '<br>';
}

//#9
let q5 = 1;
let q6 = 10;
out.innerHTML += '<br>';
for (let i = 0; i < 6; i++) {
    for (let k = 1; k < 6; k++) {
        if (k < q5 || k > q6) {
            out.innerHTML += + " " + k + " ";


        } else {
            out.innerHTML += " ";
        }
        //out.innerHTML += " ";
    }
    q5++;
    q6++;
    out.innerHTML += '<br>';
}

//#10


out.innerHTML += '<br>';
/*for (let i = 0; i < 6; i++) {
    for (let k = 1; k < 20; k++) {

        out.innerHTML += + " " + k + " ";
        out.innerHTML += " ";

        //out.innerHTML += " ";
    }

    out.innerHTML += '<br>';
}*/
//#6доп
let q7 = 3;
let q8 = 7;
out.innerHTML += '<br>';
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 8; k++) {
        if (k < q7 || k > q8) {
            out.innerHTML += "_";
        } else {
            out.innerHTML += " *";
        }
        //out.innerHTML += " ";
    }
    q7--;
    q8--;
    out.innerHTML += '<br>';
}
out.innerHTML += '<br>';
//#7доп

let w = 1;
let w1 = 12;
out.innerHTML += '<br>';
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 6; k++) {
        if (k < w || k > w1) {
            out.innerHTML += "*";
        } else {
            out.innerHTML += " _";
        }
    }
    w++;
    w1++;

    out.innerHTML += '<br>';
}


//Эксперимент 


out.innerHTML += "<br>";
out.innerHTML += "<br>";
var
    s,
    i,
    j,
    size = 10,
    board = '#',
    outin = '_';
console.log(size);

for (s = 0; s < (size / 2) - 1; s++) {
    outin += '$';
}
for (i = 0; i < size / 2; i++) {
    board += '* ';
    console.log(outin, board);
    outin = outin.substring(0, outin.length - 1);
}

for (j = size / 2; j > 0; j--) {
    outin += '^ ';
    board = board.substring(0, board.length - 2);
    console.log(outin, board);
}

//не сделал задачу №4 из базового набора, задачу №7 из дополнительного набор
//эксперимент по постройке прямоугольника
//#8 эксперимент к задаче 


// после #8 дополнительного набора не делал задач

//let q5 = 1;
//let q6 = 10;



//треугольник
let line = 8; // Quantity of lines
let space = 7; // Quantity of gaps in the first line
let star = 1; // Quantity of stars in the first line

for (let h = 0; h < line; h++) {
    for (let wsp = 0; wsp < space; wsp++) {
        out.innerHTML += "&nbsp\n";
    }
    for (let wst = 0; wst < star; wst++) {
        out.innerHTML += "*";
    }
    space -= 1;
    star += 2;
    out.innerHTML += "<br>";
}

out.innerHTML += '<br>';
for (let i = 0; i < 5; i++) {
    let str = " ";
    //out.innerHTML += " ";
    if (i == 0 || i == 4) {
        for (let k = 0; k < 6; k++) {
            str = "*"
            out.innerHTML += str;
        }
    } else {
        out.innerHTML += '*';
        for (let j = 0; j < 5; j++) {

            out.innerHTML += '&nbsp\n';
        }
        //out.innerHTML += '*';
    }
    out.innerHTML += '*';
    out.innerHTML += '<br>';
}
//////////////////

out.innerHTML += '<br>';

//повторение #4 не идет пока
i = 5;
k = 5;
for (let i = 0; i < 5; i++) {
    if ([i] % 2 == 0) {

        console.log(+i);
        console.log(+'*');
    } if ([i] % 2 != 0) {
        for (let k = 5; k > 0; k--) {
            console.log(+'#');
            console.log(+i);
        }
        //break;
        continue;
    }
}