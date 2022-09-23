//creates an array with numbers 0-100
let N = 0;

let numbered = [];

function testa() {
if (N < 100) {
    numbered.push(N)
    N++
    return N;
};
}
setInterval(testa, 50);
// an array of sybols
let symb = ['!', '@', '#', '$', '%', '^', '&', '*', '(',         
];
//randomizes the symbols array
function randomize(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
  randomize(symb)

// combines number array and symbol array
let sym = [];
for (let i=1;i<=11;i++) {
    sym = sym.concat(symb);
}
let help = []
  for (let i=0;i<99;i++) {
    help.push(i + ' : ' + sym[i] + '<br>')
  }// objects in objects! here is where all the variables for my pages will be declared and referenced from
const pages = [
    {
        head: 'I can read your mind',
        btnBot: 'Go'
    },
    {
        head: 'Pick a number from 1 - 99',
        btnBot: '<-',
        btnTop: 'NEXT',
        lowerText: 'when you have your number click next',
    },
     {
        head: 'Add both digits together to get a new number',
        btnBot: '<-',
        btnTop: 'NEXT',
        lowerText: 'EX: 14 is 1 + 4 = 5.  Click the next button the proceed',
    },
    {
        head: 'Subtract your new number from the original number',
        btnBot: '<-',
        btnTop: 'NEXT',
        lowerText: 'Ex: 14 - 5 = 9.  click next to proceed',
    },
    {
        head: help,
        btnBot: '<-',
        btnTop: 'REVEAL',
        lowerText: 'Find your new number. <br> Note the symbol beside the number',
    },
    {
        head: ':a:',
        btnBot: '<-',
        btnTop: '',
        lowerText: 'Your symbol is <br> :a:',
    }
];
// page index variable. starts at 2 because thats where the button its attached to appears
let x = 2;
//what the page looks like at the start

document.getElementById("header").innerHTML = pages[0].head
document.getElementById("btnBot").innerHTML = pages[0].btnBot
document.getElementById("btnTop").style.display = "none";
document.getElementById("lowerText").style.display = "none";

//2nd page function and also my reset. set to page[1] and makes the top button and lower text appear.
//also randomizes the sybol array

function page2c() {
    document.getElementById("header").innerHTML = pages[1].head
    document.getElementById("btnBot").innerHTML = pages[1].btnBot
    document.getElementById("btnTop").style.display = "block";
    document.getElementById("lowerText").style.display = "block";
    document.getElementById("btnTop").innerHTML = pages[1].btnTop
    document.getElementById("btnBot").innerHTML = pages[1].btnBot
    document.getElementById("lowerText").innerHTML = pages[1].lowerText
    randomize(symb);
    x = 2;
    return x;

};


//places correct symbol as the answer
pages[5].head = pages[5].head.replace(':a:', sym[9])
pages[5].lowerText = pages[5].lowerText.replace(':a:', sym[9])

//makes the buttons do stuff
btnBot.addEventListener('click', page2c);

// x starts with a value of 2. it is increased by 1 each time pageUp is ran

btnTop.addEventListener('click', pageUp);

//fill page with correct page content. increments X by 1 to give you the correct page the naxe btn push
function pageUp() {
    document.getElementById("header").innerHTML = pages[x].head;
    document.getElementById("btnBot").innerHTML = pages[x].btnBot;
    document.getElementById("btnTop").innerHTML = pages[x].btnTop;
    document.getElementById("lowerText").innerHTML = pages[x].lowerText;
    x++;
};

