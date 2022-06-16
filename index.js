const cell = document.querySelectorAll(".cell");
const playerX = 'X';
const playerO = 'O';
let playerTurn = false

let turnTracker = 0

let cellArray = [true, true, true, true, true, true, true, true, true]


const board = Array(cell.length);
board.fill(null);

const restart = document.getElementById("restart")





// Function click on a box and add X and O

 let a1 = document.getElementById('a1')
    a1.addEventListener('click', function (event){
      if (cellArray[0] === true){
         if (playerTurn === true){
            a1.innerText = ('X')
            playerTurn = false
            cellArray[0] = false
         }
         else if (playerTurn === false){
            a1.innerText = ('O')
            playerTurn = true
            cellArray[0] = false

         }
         turnTracker = turnTracker +1
         cellArray[0] = false
         

      }


})

let a2 = document.getElementById('a2')
   a2.addEventListener('click', function (event){
      if (cellArray[1] === true){
         if (playerTurn === true){
            a2.innerText = ('X')
            playerTurn = false
            cellArray[1] = false
         }
         else if (playerTurn === false){
            a2.innerText = ('O')
            playerTurn = true
            cellArray[1] = false
         }
         turnTracker = turnTracker +1
         cellArray[1] = false

      }


})

let a3 = document.getElementById('a3')
   a3.addEventListener('click', function (event){
      if (cellArray[2] === true){
         if (playerTurn === true){
            a3.innerText = ('X')
            playerTurn = false
            cellArray[2] = false
         }
         else if (playerTurn === false){
            a3.innerText = ('O')
            playerTurn = true
            cellArray[2] = false
         }
         turnTracker = turnTracker +1
         cellArray[2] = false

      }


})

let b1 = document.getElementById('b1')
   b1.addEventListener('click', function (event){
      if (cellArray[3] === true){
         if (playerTurn === true){
            b1.innerText = ('X')
            playerTurn = false
            cellArray[3] = false
         }
         else if (playerTurn === false){
            b1.innerText = ('O')
            playerTurn = true
            cellArray[3] = false
         }
         turnTracker = turnTracker +1
         cellArray[3] = false

      }


})

let b2 = document.getElementById('b2')
   b2.addEventListener('click', function (event){
      if (cellArray[4] === true){
         if (playerTurn === true){
            b2.innerText = ('X')
            playerTurn = false
            cellArray[4] = false
         }
         else if (playerTurn === false){
            b2.innerText = ('O')
            playerTurn = true
            cellArray[4] = false
         }
         turnTracker = turnTracker +1
         cellArray[4] = false

      }


})


let b3 = document.getElementById('b3')
   b3.addEventListener('click', function (event){
      if (cellArray[5] === true){
         if (playerTurn === true){
            b3.innerText = ('X')
            playerTurn = false
            cellArray[5] = false
         }
         else if (playerTurn === false){
            b3.innerText = ('O')
            playerTurn = true
            cellArray[5] = false
         }
         turnTracker = turnTracker +1
         cellArray[5] = false

      }


})


let c1 = document.getElementById('c1')
   c1.addEventListener('click', function (event){
      if (cellArray[6] === true){
         if (playerTurn === true){
            c1.innerText = ('X')
            playerTurn = false
            cellArray[6] = false
         }
         else if (playerTurn === false){
            c1.innerText = ('O')
            playerTurn = true
            cellArray[6] = false
         }
         turnTracker = turnTracker +1
         cellArray[6] = false

      }
  

})

let c2 = document.getElementById('c2')
   c2.addEventListener('click', function (event){
      if (cellArray[7] === true){
         if (playerTurn === true){
            c2.innerText = ('X')
            playerTurn = false
            cellArray[7] = false
         }
         else if (playerTurn === false){
            c2.innerText = ('O')
            playerTurn = true
            cellArray[7] = false
         }
         turnTracker = turnTracker +1
         cellArray[7] = false

      }
    


})

let c3 = document.getElementById('c3')
   c3.addEventListener('click', function (event){
      if (cellArray[8] === true){
         if (playerTurn === true){
            c3.innerText = ('X')
            playerTurn = false
            cellArray[8] = false            
         }
         else if (playerTurn === false){
            c3.innerText = ('O')
            playerTurn = true
            cellArray[8] = false
         }
         turnTracker = turnTracker +1
         cellArray[8] = false

      }
    

})









// Take turns when player clicks
   
   if (turnTracker === 1) {
      document.getElementById("playerTurn").innerText = "Player 2's Turn"
   } else if (turnTracker === 2) {
      document.getElementById("playerTurn").innerText = "Player 1's Turn" 
   } else if (turnTracker === 3) {
      document.getElementById("playerTurn").innerText = "Player 2's Turn" 
   } else if (turnTracker === 4) {
      document.getElementById("playerTurn").innerText = "Player 1's Turn" 
   } else if (turnTracker === 5) {
      document.getElementById("playerTurn").innerText = "Player 2's Turn" 
   } else if (turnTracker === 6) {
      document.getElementById("playerTurn").innerText = "Player 1's Turn" 
   } else if (turnTracker === 7) {
      document.getElementById("playerTurn").innerText = "Player 2's Turn" 
   } else if (turnTracker === 8) {
      document.getElementById("playerTurn").innerText = "Player 1's Turn" 
   } 
      
   
   



// restart the game

const reset = () => {
   cellArray[0] = true 
   a1.innerText = ""
   cellArray[1] = true
   a2.innerText = ""
   cellArray[2] = true
   a3.innerText = ""
   cellArray[3] = true
   b1.innerText = ""
   cellArray[4] = true
   b2.innerText = ""
   cellArray[5] = true
   b3.innerText = ""
   cellArray[6] = true 
   c1.innerText = ""
   cellArray[7] = true
   c2.innerText = ""
   cellArray[8] = true
   c3.innerText = ""
   console.log(cellArray)
} 



let restartButton = document.getElementById('restartButton')

   restartButton.addEventListener('click', reset );










