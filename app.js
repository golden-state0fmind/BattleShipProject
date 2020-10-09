console.log('sanity check')
// create a space to hold the ships 
let board1 = document.querySelector('.container1')
let board2 = document.querySelector('.container2')
// adding an input field to register fire missle coordinates
let form = document.querySelector('form')
let inputGuess = document.querySelector('input')
// need the cpu to involve turn and randomizeguess when invoked maybe function at the end of the players miss 
// adding scores to determine winner
let cpuScore = document.querySelector('.cpuscore')
let playerScore = document.querySelector('.playerscore')
let sectionThree = document.querySelector('.container3')

let battleShip = {
    game: true,
    cpuScore: 8,
    playerScore: 8,
    winner: function () {
        if (battleShip.cpuScore === 0) {
            // console.log('iam cpuwin')
            alert('PLAYER WINS THE GAME!!')
            game = false
        } else if (battleShip.playerScore === 0) {
            // console.log('iam playwin')
            alert('CPU WINS THE GAME!!')
            game = false
        }
    },
    // store the ships in an Array
    cpuGrid: [],
    playerGrid: [],
    // generate the ships with values and classes
    cpuSpaces: function () {
        for (i = 0; i < 9; i++) {
            let cpu = []
            for (j = 0; j < 9; j++) {
                let cpuSpace = document.createElement('div')
                cpuSpace.setAttribute('class', 'cpuSpace')
                cpuSpace.setAttribute('value', `${i}-${j}`)
                cpuSpace.setAttribute('id', `${i}-${j}`)
                cpuSpace.innerHTML = `${i}-${j}`
                board1.appendChild(cpuSpace)
                cpu.push(cpuSpace)
            }
            this.cpuGrid.push(cpu)
        }
    },
    playerSpaces: function () {
        for (x = 0; x < 9; x++) {
            let player = []
            for (y = 0; y < 9; y++) {
                let playerSpace = document.createElement('div')
                playerSpace.setAttribute('class', 'playerSpace')
                playerSpace.setAttribute('value', `${x}-${y}`)
                playerSpace.setAttribute('id', `${x}-${y}`)
                playerSpace.innerHTML = `${x}-${y}`
                board2.appendChild(playerSpace)
                player.push(playerSpace)
            }
            this.playerGrid.push(player)
        }
    },
    cpuMissle: function () {
        // randomize cpu aim
        randomRow = Math.floor(Math.random() * 8)
        randomCol = Math.floor(Math.random() * 8)
        //console.log(randomRow)
        //console.log('i am random cpu guess')
        //cpuGuess = battleShip.playerGrid[randomRow][randomCol]
        //console.log(battleShip.playerGrid[randomRow][randomCol].getAttribute('class'))
        if (battleShip.playerGrid[randomRow][randomCol].getAttribute('class') === 'playerShip') {
            battleShip.playerGrid[randomRow][randomCol].style.opacity = 0.3
            this.playerScore
            this.playerScore -= 1
            playerScore.innerHTML = `Player Ships: ${this.playerScore}`
            alert('HIT!! CPU Go Again')
            this.winner()
            this.cpuMissle()
        } else if (battleShip.playerGrid[randomRow][randomCol].getAttribute('class') === 'miss') {
            alert('CPU Missed: Players Turn')
            //console.log('missed target for cpu')
        } else {
            battleShip.playerGrid[randomRow][randomCol].style.opacity = 0.3
            alert('CPU Missed: Players Turn')
        }
    },
    // select and listen to the space and check to see if the space is a ship or empty 
    fireMissle: function (e) {
        e.preventDefault()// prevents the form from leaving the page
        // the form returns an array so access the array 
        battleShip.winner()
        if (!e.target[0].value.includes('-') ||
            !e.target[0].value.indexOf('id')) {
            console.log('I am off the board')
            alert('Please enter coordinates')
            inputGuess.value = ''
        } else if (e.target[0].value === '0-0') {
            //console.log('i am a hit')
            battleShip.cpuGrid[0][0].style.opacity = 0.3
            document.getElementById(e.target[0].value).setAttribute('class', 'cpuShip')
            alert('HIT: Go again!!')
            // console.log(battleShip.cpuScore)
            battleShip.cpuScore--
            cpuScore.innerHTML = `Cpu Ships: ${battleShip.cpuScore}`
            inputGuess.value = ''
        } else if (e.target[0].value === '0-1') {
            battleShip.cpuGrid[0][1].style.opacity = 0.3
            document.getElementById(e.target[0].value).setAttribute('class', 'cpuShip')
            alert('HIT: Go again!!')
            battleShip.cpuScore--
            cpuScore.innerHTML = `Cpu Ships: ${battleShip.cpuScore}`
            // console.log(battleShip.cpuScore)
            inputGuess.value = ''
        } else if (e.target[0].value === '0-2') {
            battleShip.cpuGrid[0][2].style.opacity = 0.3
            document.getElementById(e.target[0].value).setAttribute('class', 'cpuShip')
            alert('HIT: Go again!!')
            battleShip.cpuScore--
            cpuScore.innerHTML = `Cpu Ships: ${battleShip.cpuScore}`
            // console.log(battleShip.cpuScore)
            inputGuess.value = ''
        } else if (e.target[0].value === '4-8') {
            battleShip.cpuGrid[4][8].style.opacity = 0.3
            document.getElementById(e.target[0].value).setAttribute('class', 'cpuShip')
            alert('HIT: Go again!!')
            battleShip.cpuScore--
            cpuScore.innerHTML = `Cpu Ships: ${battleShip.cpuScore}`
            // console.log(battleShip.cpuScore)
            inputGuess.value = ''
        }
        else if (e.target[0].value === '5-8') {
            battleShip.cpuGrid[5][8].style.opacity = 0.3
            document.getElementById(e.target[0].value).setAttribute('class', 'cpuShip')
            alert('HIT: Go again!!')
            battleShip.cpuScore--
            cpuScore.innerHTML = `Cpu Ships: ${battleShip.cpuScore}`
            // console.log(battleShip.cpuScore)
            inputGuess.value = ''
        }
        else if (e.target[0].value === '6-8') {
            battleShip.cpuGrid[6][8].style.opacity = 0.3
            document.getElementById(e.target[0].value).setAttribute('class', 'cpuShip')
            alert('HIT: Go again!!')
            battleShip.cpuScore--
            cpuScore.innerHTML = `Cpu Ships: ${battleShip.cpuScore}`
            console.log(battleShip.cpuScore)
            inputGuess.value = ''
        }
        else if (e.target[0].value === '7-8') {
            battleShip.cpuGrid[7][8].style.opacity = 0.3
            document.getElementById(e.target[0].value).setAttribute('class', 'cpuShip')
            alert('HIT: Go again!!')
            battleShip.cpuScore--
            cpuScore.innerHTML = `Cpu Ships: ${battleShip.cpuScore}`
            // console.log(battleShip.cpuScore)
            inputGuess.value = ''
        }
        else if (e.target[0].value === '8-8') {
            battleShip.cpuGrid[8][8].style.opacity = 0.3
            document.getElementById(e.target[0].value).setAttribute('class', 'cpuShip')
            alert('HIT: Go again!!')
            battleShip.cpuScore--
            cpuScore.innerHTML = `Cpu Ships: ${battleShip.cpuScore}`
            // console.log(battleShip.cpuScore)
            inputGuess.value = ''
        }
        else if (e.target[0].value) {
            //console.log('missed target')
            alert('Missed: CPU Turn!!')
            document.getElementById(e.target[0].value).setAttribute('class', 'miss')
            inputGuess.value = ''
            battleShip.cpuMissle()
        }
    },
    // add image or access the value of the ship to compare true(hit) or false(missed) create ships and place in array then try to hit that space to return true
    cpuShips: function () {
        //first ship on the CpuBoard near the top left
        battleShip.cpuGrid[0][0].setAttribute('class', 'ocean')
        battleShip.cpuGrid[0][1].setAttribute('class', 'ocean')
        battleShip.cpuGrid[0][2].setAttribute('class', 'ocean')
        //second ship along the bottom right edge
        battleShip.cpuGrid[4][8].setAttribute('class', 'ocean')
        battleShip.cpuGrid[5][8].setAttribute('class', 'ocean')
        battleShip.cpuGrid[6][8].setAttribute('class', 'ocean')
        battleShip.cpuGrid[7][8].setAttribute('class', 'ocean')
        battleShip.cpuGrid[8][8].setAttribute('class', 'ocean')
        //console.log(battleShip.board[0][0], [0][1], [0][2])
    },
    playerShips: function () {
        //first ship on the playerBoard 
        battleShip.playerGrid[2][5].setAttribute('class', 'playerShip')
        battleShip.playerGrid[2][6].setAttribute('class', 'playerShip')
        battleShip.playerGrid[2][7].setAttribute('class', 'playerShip')
        //second ship on the PlayerBoard
        battleShip.playerGrid[4][1].setAttribute('class', 'playerShip')
        battleShip.playerGrid[5][1].setAttribute('class', 'playerShip')
        battleShip.playerGrid[6][1].setAttribute('class', 'playerShip')
        battleShip.playerGrid[7][1].setAttribute('class', 'playerShip')
        battleShip.playerGrid[8][1].setAttribute('class', 'playerShip')
    },
}
// listening for an input to compare coordinates on our grid
form.addEventListener('submit', battleShip.fireMissle)
battleShip.cpuSpaces()
battleShip.cpuShips()
battleShip.playerSpaces()
battleShip.playerShips()
