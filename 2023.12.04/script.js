alert('Hello world');
console.log('Hellow world asdasd');
document.getElementById('demo-1').innerText = 'Helo világ';
document.getElementById('demo-2');

var myText = 'Hello world';
var myNumber = 4;
var isHunry = true;
var myNull = null;
var myUndefined = undefined;

var myArray = [1,2,3,4,5];

var myObject = {
    name: 'john',
    age: 30
}

console.log(myObject.name + ' ' + myObject.age + 'éves'); //john + 30 éves

//re-dec. variables 
e=  'Not undefined anymore...';
e= 15;
e= false;
console.log(e);


document.getElementById('demo-2').textContent = 'Today is sunny';

var n = 10;
n+= 5 ;

var txt1 = 'How great is ';
txt1 += 'to learn JavaScript?';
console.log(txt1);

// logical ops
// && and
// || or
// != not

var x = 5;
var y = "5";
var z = 6;


var a = "A long " + "string that " + "goes on and on";
let text = a
let length = text.length
document.getElementById('length').textContent = length
let index = a.lastIndexOf("goes")

document.getElementById('index').textContent = index
let kiiratas = a.substring(19,23)
document.getElementById('kiiratas').textContent = kiiratas
let kiiratas2 = a.substring(19)
document.getElementById('kiiratas2').textContent = kiiratas2
let slice = a.substr(7, 6)
document.getElementById('slice').textContent = slice
let csere = a.replace("and on", "forever")
document.getElementById('csere').textContent = csere
let kiir = a[3]
document.getElementById('kiir').textContent = kiir