console.log('sanity check')
// create a space to hold the ships 
let grid = document.querySelector('.container')
// adding an input field to register fire missle coordinates
let form = document.querySelector('form')
let inputGuess = document.querySelector('input')



let battleShip = {
    // store the ships in an Array
    board: [],
    // generate the ships with values and classes
    getSpaces: function () {
        for (i = 0; i < 9; i++) {
            let temp = []
            for (j = 0; j < 9; j++) {
                let space = document.createElement('div')
                space.setAttribute('class', 'holdSpace')
                space.setAttribute('value', `${i}-${j}`)
                grid.appendChild(space)
                temp.push(space)
            }
            this.board.push(temp)
        }
    },
    // select and listen to the space and check to see if the space is a ship or empty 
    fireMissle: function (e) {
        e.preventDefault()// prevents the form from leaving the page
        // the form returns an array so access the array 
        if (e.target[0].value === '0-0') {
            //console.log('i am a hit')
            battleShip.board[0][0].style.opacity = 0.3
            alert('HIT: Ship Sunk!!')
            inputGuess.value = ''
        } else if (e.target[0].value === '0-1') {
            battleShip.board[0][1].style.opacity = 0.3
            alert('HIT: Ship Sunk!!')
            inputGuess.value = ''
        } else if (e.target[0].value === '0-2') {
            battleShip.board[0][2].style.opacity = 0.3
            alert('HIT: Ship Sunk!!')
            inputGuess.value = ''
        } else {
            //console.log('missed target')
            alert('Missed Target!!')
            //e.target.style.opacity = .2
        }
    },
    // add image or access the value of the ship to compare true(hit) or false(missed) create ships and place in array then try to hit that space to return true
    buildShips: function () {
        battleShip.board[0][0].setAttribute('class', 'ship')
        battleShip.board[0][1].setAttribute('class', 'ship')
        battleShip.board[0][2].setAttribute('class', 'ship')
        //console.log(battleShip.board[0][0], [0][1], [0][2])
    },
}
// listening for an input to compare coordinates on our grid
form.addEventListener('submit', battleShip.fireMissle)
battleShip.getSpaces()
battleShip.buildShips()
//console.log(battleShip.board[0][0])
console.log(inputGuess)
