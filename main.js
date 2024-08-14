var instructions_btn = document.querySelector(".instructions")
var modal = document.querySelector(".modal")
var close_btn = document.querySelectorAll(".close")
var get_start = document.querySelector(".GetStart")
var h1 = document.querySelector("h1")
var wrapper = document.querySelector(".wrapper")
var temp = document.querySelector(".temp")
var left = document.querySelector(".left")
var OnePlayerMode = document.querySelector(".OnePlayerMode")


var player = document.querySelector(".player")
var computer = document.querySelector(".computer")
var result_html = document.querySelector(".result")


var rock = document.querySelector(".rock")
var scissors = document.querySelector(".scissors")
var paper = document.querySelector(".paper")

var timer = document.querySelector(".timerModal")

instructions_btn.addEventListener("click", function(){
    modal.style.display = "flex"
})

for(i = 0; i < 2; i++){
    close_btn[i].addEventListener("click", function(){
        modal.style.display = "none"
    })
}

get_start.addEventListener("click", function(){
    get_start.style.display = "none"
    h1.style.display = "none"
    wrapper.style.display = "flex"

})


left.addEventListener("click", function(){
    wrapper.style.display = "none"
    OnePlayerMode.style.display = "grid"
})
// *******************************************************
function timerfunc(){  
    timer.style.display = "none"
    OnePlayerMode.style.display = "none";
    h1.style.display = "block"
    get_start.style.display = "block" 
    pScore = 0
    cScore = 0
    player.innerHTML = ``
    computer.innerHTML = ``
    timer.innerHTML = ``
}
function task(i) {
    setTimeout(function() {
        timer.innerHTML = i
        console.log(i);
    }, 1500 * i);
}

function checkWinner(){
    if (pScore >= 5){
        result_html.innerHTML = `<h2 style="font-size: 44px;">Winner</h2>`
        setTimeout(() => {timerfunc()}, 16000)
        timer.style.display = "flex"
        for (let i=0; i<10; i++) {
            task(i + 1);
        }
    }
    if (cScore >= 5){
        result_html.innerHTML = `<h2 style="font-size: 44px;">Loser</h2>`
        setTimeout(() => {timerfunc()}, 16000)
        timer.style.display = "flex"
        for (let i=0; i<10; i++) {
            task(i + 1);
        }
    }
}


function check(p1, p2){
    // pChoise = r
    if(p1 == "r"){
        if(p2 == "r"){
            return "draw"
        }
        if(p2 == "s"){
            return "p1"
        }
        if(p2 == "p"){
            return "p2"
        }
    }
    // pChoise = s
    if(p1 == "s"){
        if(p2 == "r"){
            return "p2"
        }
        if(p2 == "s"){
            return "draw"
        }
        if(p2 == "p"){
            return "p1"
        }
    }
    // pChoise = p
    if(p1 == "p"){
        if(p2 == "r"){
            return "p1"
        }
        if(p2 == "s"){
            return "p2"
        }
        if(p2 == "p"){
            return "draw"
        }
    }
}

var choises = ["r", "s", "p"]
var pScore = 0
var cScore = 0

var red = 120
var green = 255


rock.addEventListener("click", function(){
    var computerChois = choises[Math.floor(Math.random() * 3)]
    var playerChoise = "r"

    var result = check(playerChoise, computerChois)
    if (result == "p1"){
        pScore ++;
        
        var Pstyle = `style="filter: hue-rotate(${green}deg);"`
        var Cstyle = `style="filter: hue-rotate(${red}deg);"`
        result_html.innerHTML = `Player Won`
        checkWinner()
    }else if(result == "p2"){
        cScore ++;
        
        var Pstyle = `style="filter: hue-rotate(${red}deg);"`
        var Cstyle = `style="filter: hue-rotate(${green}deg);"`
        result_html.innerHTML = `Computer Won`
        checkWinner()
    }else if(result == "draw"){
        `style="filter: grayscale();"`
        result_html.innerHTML = `Draw`
    }

    player.innerHTML = `<h3 style="padding: 10px;">${pScore}</h3>`
    player.innerHTML += `<img src="./images/icon-rock.svg" width="54px" ${Pstyle}></img>`

    if(computerChois == "r"){
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-rock.svg" width="54px" ${Cstyle}></img>`
    }else if(computerChois == "s"){
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-scissors.svg" width="54px" ${Cstyle}></img>`
    }else{
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-paper.svg" width="54px" ${Cstyle}></img>`
    }

})


scissors.addEventListener("click", function(){
    var computerChois = choises[Math.floor(Math.random() * 3)]
    var playerChoise = "s"
    
    var result = check(playerChoise, computerChois)
    if (result == "p1"){
        pScore ++;
        
        var Pstyle = `style="filter: hue-rotate(${green}deg);"`
        var Cstyle = `style="filter: hue-rotate(${red}deg);"`
        result_html.innerHTML = `Player Won`
        checkWinner()
    }else if(result == "p2"){
        cScore ++;
        
        var Pstyle = `style="filter: hue-rotate(${red}deg);"`
        var Cstyle = `style="filter: hue-rotate(${green}deg);"`
        result_html.innerHTML = `Computer Won`
        checkWinner()
    }else if(result == "draw"){
        `style="filter: grayscale();"`
        result_html.innerHTML = `Draw`
    }

    player.innerHTML = `<h3 style="padding: 10px;">${pScore}</h3>`
    player.innerHTML += `<img src="./images/icon-scissors.svg" width="54px" ${Pstyle}></img>`

    if(computerChois == "r"){
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-rock.svg" width="54px" ${Cstyle}></img>`
    }else if(computerChois == "s"){
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-scissors.svg" width="54px" ${Cstyle}></img>`
    }else{
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-paper.svg" width="54px" ${Cstyle}></img>`
    }
})


paper.addEventListener("click", function(){
    var computerChois = choises[Math.floor(Math.random() * 3)]
    var playerChoise = "p"
    
    var result = check(playerChoise, computerChois)
    if (result == "p1"){
        pScore ++;
        
        var Pstyle = `style="filter: hue-rotate(${green}deg);"`
        var Cstyle = `style="filter: hue-rotate(${red}deg);"`
        result_html.innerHTML = `Player Won`
        checkWinner()
    }else if(result == "p2"){
        cScore ++;
        
        var Pstyle = `style="filter: hue-rotate(${red}deg);"`
        var Cstyle = `style="filter: hue-rotate(${green}deg);"`
        result_html.innerHTML = `Computer Won`
        checkWinner()
    }else if(result == "draw"){
        `style="filter: grayscale();"`
        result_html.innerHTML = `Draw`
    }

    player.innerHTML = `<h3 style="padding: 10px;">${pScore}</h3>`
    player.innerHTML += `<img src="./images/icon-paper.svg" width="54px" ${Pstyle}></img>`

    if(computerChois == "r"){
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-rock.svg" width="54px" ${Cstyle}></img>`
    }else if(computerChois == "s"){
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-scissors.svg" width="54px" ${Cstyle}></img>`
    }else{
        computer.innerHTML = `<h3 style="padding: 10px;">${cScore}</h3>`
        computer.innerHTML += `<img src="./images/icon-paper.svg" width="54px" ${Cstyle}></img>`
    }
})

