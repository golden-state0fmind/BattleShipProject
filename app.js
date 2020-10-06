console.log('sanity check')
// create a space to hold the ships 
let grid = document.querySelector('.container')

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
                space.addEventListener('click', this.fireMissle)
                temp.push(space)
            }
            this.board.push(temp)
        }
    },
    // select and listen to the space and check to see if the space is a ship or empty 
    fireMissle: function (e) {
        if (e.target.className === 'holdSpace' && e.target.style.backgroundColor === 'red') {
            e.target.style.opacity = 0.3
            alert('Successful')
        } else {
            alert('Missed!!')
            e.target.style.opacity = .2
        }
    },
    // add image or access the value of the ship to compare true(hit) or false(missed) create ships and place in array then try to hit that space to return true
    // buildShips: function () {
    //     battleShip.board[0].style.backgroundColor = 'red'
    //     battleShip.board[1].style.backgroundColor = 'red'
    //     battleShip.board[2].style.backgroundColor = 'red'
    //     console.log(battleShip.board[0], [1], [2])
    // }

    //randomize the ships

}
battleShip.getSpaces()
// battleShip.buildShips()
console.log(battleShip.board)
