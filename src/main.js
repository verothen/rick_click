//Math.random() generates a random decimal [0,1)
//Math.random()*20 scales the random decimal [0,19]
//Math.floor rounds down decimal to an integer
//+1 changes the range from [0,19] to [1,20]
// const myGuess = Math.floor(Math.random()*20)+1;
// let guesses = 0;
// let guess;
// while (guess !== myGuess) {
//     guess = parseInt(prompt("What number am I thinking of?"),10);
//     guesses++;
//     if (guess < myGuess){
//         alert("Higher.");
//     }else if (guess>myGuess){
//         alert("Lower.");
//     }
// }

// alert(`Well done! You got it in ${guesses} guesses!`);

//global variables
let clickers = 50; //number of Ricks to click
let startTime=Date.now(); //time game starts

//position element in the DOM
function sync(dom,pos){
    dom.style.left=`${pos.x}px`;
    dom.style.top=`${pos.y}px`;
}
// `${pos.x}px`


function addClicker (){
    const pos = {

        //assigns Rick image a screen position with random coordinates
        x: Math.random()*500,
        y: Math.random()*300
    };

    //creates new Rick image
    const img = new Image();
    img.src="res/images/rick.png";
    img.style.position = "absolute";
    img.addEventListener("click",removeClicker,false);

    //injects Rick image into the board element
    document.querySelector("#board").appendChild(img);
    sync(img,pos);
}

function removeClicker(e){
    e.target.parentNode.removeChild(e.target);
    clickers--;
    checkGameOver();
}

function checkGameOver(){
    document.querySelector("#remain").innerHTML=clickers;
    if(clickers===0){
        const taken = Math.round((Date.now()-startTime)/1000);
        alert(`You beat the game in ${taken} seconds!`)
    }
}

//Add all the Ricks!
for (let i=0;i<clickers;i++){
    addClicker();
}