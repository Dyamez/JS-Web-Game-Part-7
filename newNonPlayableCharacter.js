function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(oras) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        await tulog(oras)
        stop()
    }

    async function walkNorth(oras) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await tulog(oras)
        stop()
    }

    async function walkWest(oras) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await tulog(oras)
        stop()
    }

    async function walkSouth(oras) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await tulog(oras)
        stop()
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    function tulog(oras){
        return new Promise (resolve => {
            setTimeout(resolve, oras)
        })
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}

//played with naming convention of some callbacks and functions just to learn from it. 