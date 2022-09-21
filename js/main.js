// objects in objects! here is where all the variables for my pages will be declared and reference from
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
        head: '0 - & <br> 1 - @ <br> 2 - $ <br> 3 - B <br> ...',
        btnBot: '<-',
        btnTop: 'REVEAL',
        lowerText: 'Find your new number. <br> Note the symbol beside the number',
    },

    {
        head: '&',
        btnBot: '<-',
        btnTop: '',
        lowerText: 'Your symbol is <br> &',
    }
]
//an array storing page change functions. i plan to cycle through these with a single button

const test = [
    page2c,
    page3c,
    page4c,
];

let x = 2;

//what the page looks like at the start

document.getElementById("header").innerHTML = pages[0].head
document.getElementById("btnBot").innerHTML = pages[0].btnBot
document.getElementById("btnTop").style.display = "none";
document.getElementById("lowerText").style.display = "none";




//page change functions

function page2c() {
    document.getElementById("header").innerHTML = pages[1].head
    document.getElementById("btnBot").innerHTML = pages[1].btnBot
    document.getElementById("btnTop").style.display = "block";
    document.getElementById("lowerText").style.display = "block";
    document.getElementById("btnTop").innerHTML = pages[1].btnTop
    document.getElementById("btnBot").innerHTML = pages[1].btnBot
    document.getElementById("lowerText").innerHTML = pages[1].lowerText

};
//                                  IGNORE WILL BE DELETED LATER
function page3c() {
    document.getElementById("header").innerHTML = pages[2].head;
    document.getElementById("btnBot").innerHTML = pages[2].btnBot;
    document.getElementById("btnTop").innerHTML = pages[2].btnTop;
    document.getElementById("lowerText").innerHTML = pages[2].lowerText;
    x++;
    
};
function page4c() {
    document.getElementById("header").innerHTML = pages[3].head;
    document.getElementById("btnBot").innerHTML = pages[3].btnBot;
    document.getElementById("btnTop").innerHTML = pages[3].btnTop;
    document.getElementById("lowerText").innerHTML = pages[3].lowerText;
    x++;
    
};
//                                        END IGNORE

// reset the mindreader... itll work eventually

function reset() {
    document.getElementById("header").reset();
    document.getElementById("btnBot").reset(); 
    document.getElementById("btnTop").reset(); 
    document.getElementById("lowerText").reset(); 
};



//makes the buttons do stuff

btnBot.addEventListener('click', page2c);

// x starts with a value of 1. it is increased by 1 in each function

btnTop.addEventListener('click', pageUp);

// help: reset not working, auto increase the test array number by one

function pageUp() {
    document.getElementById("header").innerHTML = pages[x].head;
    document.getElementById("btnBot").innerHTML = pages[x].btnBot;
    document.getElementById("btnTop").innerHTML = pages[x].btnTop;
    document.getElementById("lowerText").innerHTML = pages[x].lowerText;
    x++;
    
};