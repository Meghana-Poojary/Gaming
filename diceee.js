document.querySelector(".one").classList.add("dice");
document.querySelector(".two").classList.add("dice");

function reset(){
    document.querySelector("h1").textContent = "🎲Let's Play Diceee🎲";
    document.querySelector("img#one").setAttribute("src", "./dice1.png");
    document.querySelector("img#two").setAttribute("src", "./dice1.png");
    document.querySelector(".one").classList.add("dice");
    document.querySelector(".two").classList.add("dice");
    document.querySelector("button").textContent = "Result";
    document.querySelector("button").setAttribute("onClick", "changeImage()");
}

function changeImage(){
    var numo = Math.random() * 6;
    numo = Math.floor(numo) + 1;
    var randomImageOne = "dice" + numo + ".png";
    document.querySelector("img#one").setAttribute("src", randomImageOne);
    document.querySelector(".one").classList.remove("dice");

    var num = Math.random() * 6;
    num = Math.floor(num) + 1;
    var randomImageTwo = "dice" + num + ".png";
    document.querySelector("img#two").setAttribute("src", randomImageTwo);
    document.querySelector(".two").classList.remove("dice");

    document.querySelector("button").textContent = "Replay";
    document.querySelector("button").setAttribute("onClick", "reset()");

    if (numo > num){
        document.querySelector("h1").textContent = "🏆Player 1 Wins🏆";
    }else if (num > numo){
        document.querySelector("h1").textContent = "🏆Player 2 Wins🏆";
    }else {
        document.querySelector("h1").textContent = "🏅It's a Draw🏅";
    }
}

