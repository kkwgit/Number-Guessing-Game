let computerNum = 0;
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let resultImg = document.querySelector(".main-img")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history =[]

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){
    userInput.value ="";
})


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}


function play(){
   let userValue = userInput.value

    if(userValue<1 || userValue>100){
        resultArea.textContent="1과100사이 숫자를 입력해 주세요"
        return;
    }


    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요."
        return;
    }
    chances -- ;
    console.log("chance",chances)
    chanceArea.textContent = `남은기회:${chances}번`

   if(userValue < computerNum){
        resultArea.textContent = "UP!!!"
        resultImg.src="/IMG/UP.gif"
   }else if(userValue > computerNum){
       resultArea.textContent ="DOWN!!!" 
       resultImg.src="/IMG/DOWN.gif"
   }else{
       resultArea.textContent = "맞추셨습니다!!!"
       playButton.disabled = true;
       resultImg.src="/IMG/정답.gif"
   }

   history.push(userValue)
   console.log(history)
   

   if(chances < 1){
    gameOver = true;
   }

   if(gameOver == true){
       playButton.disabled = true; 
       chanceArea.textContent = "실패!!!!!!!!!!"
       resultImg.src="/IMG/FAIR.gif"
   }
   if(resultArea.textContent == "맞추셨습니다!!!"){
    chanceArea.textContent = "게임종료"
   }
}

function reset(){
    userInput.Value = "";
    pickRandomNum();
    resultArea.textContent = "맞추면 살 수 있다!"
    chances = 5
    chanceArea.textContent = `남은기회:${chances}번`
    resultImg.src="/IMG/오징어게임.gif"
    playButton.disabled = false;
    gameOver = false;
    history = [];
}
pickRandomNum();


