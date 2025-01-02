var i_right = 0;
var i_wrong = 0;
var body = document.body;
var emojitype;
var para = document.getElementById('message');
var alertbox=document.getElementById('alerts');
var gameSection=document.getElementById('game');
var originalBackground = window.getComputedStyle(gameSection).background;
var originalOpacity = window.getComputedStyle(gameSection).opacity;

function CheckTheGuess() {
    if (emojitype) {
        emojitype.remove();
    }
    var guess = Math.floor(Math.random() * 10) + 1;
    var num = document.getElementById("user_input");
    var input_num = num.value;
    var result = document.getElementById("result");
    var right = document.getElementById("win1");
    var wrong = document.getElementById("loss1");
    var message='Please enter a valid input! \n Your input must be between 1 and 10!';
    
    if (input_num == '') {
        alertOpen('Input cannot be empty! Please enter a number between 1 and 10.');
    }
    else if (input_num > 10 || input_num <0){
        alertOpen(message);
    }
    else if (guess == input_num) {
        result.innerHTML = "You Won! <br> Hurray ! 🥳🥳🥳 <br> The number is " + `${guess}`;
        result.style.color = 'lightgreen';
        i_right += 1;
        right.textContent = i_right;
        body.style.backgroundColor = "rgba(0,128,0,0.6)";
        emojisetup('👏');
    } else {
        result.innerHTML = "You lose! <br> Better luck next time! 😕😕😕 <br> The number is " + `${guess}`;
        result.style.color = 'red';
        i_wrong += 1;
        wrong.textContent = i_wrong;
        body.style.backgroundColor = 'rgba(255,0,0,0.6)';
        emojisetup('😕');
    }
}

function alertOpen(message){
  gameSection.style.backgroundColor='black';
  gameSection.style.opacity='25%';
  para.textContent=message;
  alertbox.style.display='block';
}

function closeAlert(){
  gameSection.style.background=originalBackground;
  gameSection.style.opacity=originalOpacity;
  alertbox.style.display='none';
}
function emojisetup(emoji) {
    emojitype = document.createElement("div");
    emojitype.className='emojis';
    body.appendChild(emojitype);

    for (let i = 0; i < 200; i++) {
        var sadorhappy = document.createElement("span");
        sadorhappy.textContent = emoji;
        sadorhappy.style.position = 'absolute';
        sadorhappy.style.fontSize = '50px';
        sadorhappy.style.color = 'white';
        sadorhappy.style.left = `${Math.random() * 100}vw`; 
        sadorhappy.style.top = `${Math.random() * 100}vh`; 
        sadorhappy.style.transform = `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh)`; 
        sadorhappy.style.animation = `fall 3s linear forwards `; 
        emojitype.appendChild(sadorhappy);
    }

    setTimeout(() => {
        emojitype.remove();
    }, 3000); 
}

var style = document.createElement('style');
style.innerHTML = `
 .emojis{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:999;
    pointer-events:none;
  }
  @keyframes fall {
    0% {
      opacity: 1;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);


  
  
  