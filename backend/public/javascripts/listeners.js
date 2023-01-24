location_table = {}

function start(ev) {
    var rooms =
        tl = {
            top_left: {
                x: ev.layerX,
                y: ev.layerY
            }
        }
    if (location_table[this.id] == null) {
        location_table[this.id] = [tl]
    } else {
        location_table[this.id].push(tl)
    }
}

function done(ev) {
    console.log('button up')
    l = location_table[this.id].length
    location_table[this.id][l-1].bottom_right = {
        x: ev.movementX,
        y: ev.movementY
    }
}

for (let image of document.getElementsByClassName("dorm-image")) {
    image.onmousedown = start;
    image.onmouseup = done;
    image.ondragstart = () => {return false};
}