// javascript

let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")


function homeIncrementOne(){
    homeScore.textContent ++
}

function homeIncrementTwo(){
    homeScore.textContent =parseInt(homeScore.textContent) + 2
}

function homeIncrementThree(){
    homeScore.textContent =parseInt(homeScore.textContent) + 3
}

function guestIncrementOne(){
    guestScore.textContent ++
}

function guestIncrementTwo(){
    guestScore.textContent = parseInt(guestScore.textContent) + 2
}

function guestIncrementThree(){
    guestScore.textContent = parseInt(guestScore.textContent) + 3
}



function reset(){
    guestScore.textContent = 0
    homeScore.textContent = 0
    
}

// const reset = ()=>{
//     guestScore.textContent = 0
//     homeScore.textContent = 0
// }


