console.log('sanity check')
// create a space to hold the ships 
let grid = document.querySelector('.container')

let battleShip = {
    // store the ships in an Array
    board: [],
    // generate the ships with values and classes
    getSpaces: function () {
        for (i = 0; i < 63; i++) {
            let space = document.createElement('div')
            space.setAttribute('class', 'holdSpace')
            space.setAttribute('value', 1)
            grid.appendChild(space)
            space.addEventListener('click', this.fireMissle)
            this.board.push(space)
        }
    },
    // select and listen to the space and check to see if the space is a ship or empty 
    fireMissle: function (e) {
        if (e.target.className === 'holdSpace' && e.target.id === 'ship') {
            e.target.style.opacity = 0
            alert('Successful')
        } else {
            alert('Missed!!')
            e.target.style.opacity = .2
        }
    },
    // add image or access the value of the ship to compare true(hit) or false(missed) create ships and place in array then try to hit that space to return true
    buildShips: function () {
        console.log(battleShip.board)
        console.log(battleShip.board[0], [1], [2])


    }

    //randomize the ships
    //fire missles through an event listener

}
battleShip.getSpaces()
battleShip.buildShips()

