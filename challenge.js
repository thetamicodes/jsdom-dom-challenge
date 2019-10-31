let countNumber = document.getElementById('counter').innerText;
let countInteger = parseInt(countNumber, 10);
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const formField = document.getElementById('comment-form');


document.addEventListener('DOMContentLoaded', function() {
    manualCounter(); 
    autoCounter();
    likeAdder();
    commentAdder();
});


function manualCounter() {
    plusButton.addEventListener('click', function() {
        countInteger++;
        document.getElementById('counter').innerText = countInteger;
    });
    minusButton.addEventListener('click', function() {
        countInteger--;
        document.getElementById('counter').innerText = countInteger;
    })
}


function autoCounter() {
    let autoNr = setInterval(autoCount, 1000);
    function autoCount() {
        countInteger++;
        document.getElementById('counter').innerText = countInteger 
    }
}


function likeAdder() {
    heartButton.addEventListener('click', function() {
        let newLi = document.createElement("li");
        document.querySelector('.likes').appendChild(newLi).innerText = `${parseInt(document.getElementById('counter').innerText, 10)} received a Like`;
    })
}


function commentAdder() {
    formField.addEventListener('submit', function(e) {
        e.preventDefault();
        const userInput = document.querySelector('input[name="comment"]').value;
        let newComment = document.createElement("li");
        document.querySelector('h3').appendChild(newComment).innerText = `${userInput}`;
    })
}

