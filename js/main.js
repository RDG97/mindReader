const pages = {
    page1: {
        head: 'I can read your mind',
        btnBot: 'Go'
    },

    page2: {
        head: 'Pick a number from 1 - 99',
        btnBot: '<-',
        btnTop: 'NEXT',
        lowerText: 'when you have your number click next',
    }
}

const test = [
    page2c,
    page3c,
];




document.getElementById("header").innerHTML = pages.page1.head;
document.getElementById("btnBot").innerHTML = pages.page1.btnBot;
document.getElementById("btnTop").style.display = "none";
document.getElementById("lowerText").style.display = "none";

function page2c() {
    document.getElementById("header").innerHTML = pages.page2.head;
    document.getElementById("btnBot").innerHTML = pages.page2.btnBot;
    document.getElementById("btnTop").style.display = "block";
    document.getElementById("lowerText").style.display = "block";
    document.getElementById("btnTop").innerHTML = pages.page2.btnTop;
    document.getElementById("btnBot").innerHTML = pages.page2.btnBot;

};
function page3c() {
    
}
btnBot.addEventListener('click', test[0]);