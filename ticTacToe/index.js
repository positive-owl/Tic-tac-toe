let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let square = document.querySelectorAll(".square");
let squareArray = Array.from(square);
let count = 0;

let possibilityOne = ["one","two","three"];
let possibilityTwo = ["four","five","six"];
let possibilityThree = ["seven","eight","nine"];
let possibilityFour = ["one","four","seven"];
let possibilityFive = ["two","five","eight"];
let possibilitySix = ["three","six","nine"];
let possibilitySeven = ["one","five","eight"]

let winnerX = [];
let winner0 = [];

squareArray.forEach(function(item){
    item.addEventListener("click",function(){
        if(count % 2 === 0){
            let image = document.createElement("img");
            image.src = "x.svg";
            item.appendChild(image);
            image.classList.add("image");
           console.log(winnerX.push(item.id));
           if(winnerX.length>=3){
                if(JSON.stringify(winnerX) === JSON.stringify(possibilityOne) || JSON.stringify(winnerX) === JSON.stringify(possibilityTwo)){
                    alert("Player X wins");
                }
                else  if(JSON.stringify(winnerX) === JSON.stringify(possibilityThree) || JSON.stringify(winnerX) === JSON.stringify(possibilityFour)){
                    alert("Player X wins");
                }
                else if(JSON.stringify(winnerX) === JSON.stringify(possibilityFive) || JSON.stringify(winnerX) === JSON.stringify(possibilitySix)){
                    alert("Player X wins");
                }
                if(JSON.stringify(winnerX) === JSON.stringify(possibilitySeven)){
                    alert("Player X wins");
                }
               }
        }
        else{
            let image = document.createElement("img");
            image.src = "zero.svg";
            item.appendChild(image);
            image.classList.add("image");
           console.log(winner0.push(item.id));
           if(winner0.length>=3){
            if(JSON.stringify(winner0) === JSON.stringify(possibilityOne) || JSON.stringify(winner0) === JSON.stringify(possibilityTwo)){
                alert("Player 0 wins");
            }
            else  if(JSON.stringify(winner0) === JSON.stringify(possibilityThree) || JSON.stringify(winner0) === JSON.stringify(possibilityFour)){
                alert("Player 0 wins");
            }
            else if(JSON.stringify(winner0) === JSON.stringify(possibilityFive) || JSON.stringify(winner0) === JSON.stringify(possibilitySix)){
                alert("Player 0 wins");
            }
            if(JSON.stringify(winner0) === JSON.stringify(possibilitySeven)){
                alert("Player 0 wins");
            }
           }
        }
        count++;
        console.log(count);
    })
    
})