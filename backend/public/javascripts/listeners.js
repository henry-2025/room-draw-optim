// location_table = {}

// function start(ev) {
//     var rooms =
//         tl = {
//             top_left: {
//                 x: ev.layerX,
//                 y: ev.layerY
//             }
//         }
//     if (location_table[this.id] == null) {
//         location_table[this.id] = [tl]
//     } else {
//         location_table[this.id].push(tl)
//     }
// }

// function done(ev) {
//     console.log('button up')
//     l = location_table[this.id].length
//     location_table[this.id][l-1].bottom_right = {
//         x: ev.movementX,
//         y: ev.movementY
//     }
// }

// for (let image of document.getElementsByClassName("dorm-image")) {
//     image.onmousedown = start;
//     image.onmouseup = done;
//     image.ondragstart = () => {return false};
// }

var preferenceTable = {
    1 : [],
    2 : [],
    3 : [],
    4 : [],
    5 : []
};

for (const dorm of document.getElementsByTagName('g')) {
    for (room of dorm.children) {
        room.addEventListener('mousedown', (event) => {
            const pref_num = document.getElementById('pref-select').selectedIndex + 1;
            var dorm_name = event.target.parentElement.parentElement.classList;
            dorm_name.remove('first');
            dorm_name.remove('second');
            dorm_name.remove('third');
            dorm_name = dorm_name[0];

            div = event.target;
            if (div.classList.contains('selected')) {
                div.classList.remove('selected');
            } else {
                div.classList.add('selected');
                preferenceTable[pref_num].push()
            }
        }, false);
    }
}

document.getElementById('pref-select').addEventListener('change',
    displayDorms, false);

document.getElementById('dorm-select').addEventListener('change', (event) => {
    var dorm_checkboxes = document.getElementById('dorm-select').getElementsByTagName('input');
    if (event.target.id == 'dorms-all' && dorm_checkboxes[0]) {
        if (dorm_checkboxes[0]) {
            for (i = 1; i < dorm_checkboxes.length; i++) {
                dorm_checkboxes[i].checked = false;
            }
        }
    } else if (event.target.id != 'dorms-all') {
        const checked = Array.from(dorm_checkboxes).slice(1,).map(elem => elem.checked);
        if (checked.some(elem => elem)) {
            dorm_checkboxes[0].checked = false;
        }
    }
    displayDorms();
}, false);

document.getElementById('floor-select').addEventListener('change', (event) => {
    var floor_checkboxes = document.getElementById('floor-select').getElementsByTagName('input');
    if (event.target.id == 'floors-all' && floor_checkboxes[0]) {
        if (floor_checkboxes[0]) {
            for (i = 1; i < floor_checkboxes.length; i++) {
                floor_checkboxes[i].checked = false;
            }
        }
    } else if (event.target.id != 'floors-all') {
        const checked = Array.from(floor_checkboxes).slice(1,).map(elem => elem.checked);
        if (checked.some(elem => elem)) {
            floor_checkboxes[0].checked = false;
        }
    }
    displayDorms();
}, false);

function displayDorms(event) {
    const pref = document.getElementById('pref-select');
    const selected_pref = pref.selectedIndex + 1;

    var dorms_boxes = document.getElementById('dorm-select').getElementsByTagName('input');
    var floor_boxes = document.getElementById('floor-select').getElementsByTagName('input');

    console.log(event);

    // update views

    // update selected dorms
}

/**
 * Function that returns the global dorm id given a dorm name, local room number and dorm floor
 * @param {string} dormName name of the dorm
 * @param {string} roomID room number
 * @param {int} floor dorm floor
 */
function classToRoomNum(dormName, roomID, floor) {
    switch (dormName) {
        case 'atwood':

            break;
    
        default:
            break;
    }

}