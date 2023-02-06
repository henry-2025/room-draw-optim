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

// fetch dorm 
fetch(new Request('res/rooms')).then((res) => res.json())
    .then((dorms) => {
        // create hash
        var hash = {}
        for (const dorm of dorms) {
            if(hash[dorm.dorm_id]) {
                hash[dorm.dorm_id][dorm.]
            }
        }

        for (const dorm of document.getElementsByTagName('g')) {
            // dorm name needs to be extracted from the class list of the parent element
            var dormName = room.parentElement;
            dormName = dormName.filter(c => !(c in ['first', 'second', 'third']));
            console.assert(dormName.lenth == 1);
            dormName = dormName[0];
            dormName = dormName.substring(0, 1).toUpperCase() + dormName.substring(1,);

            // add event listeners to each of the clickables in our svgs
            for (room of dorm.children) {
                room.addEventListener('mousedown', (event) => {
                    const pref_num = document.getElementById('pref-select').selectedIndex + 1;
                    div = event.target;
                    localID = div["inkscape:label"];
                    dorms[]
                    if (div.classList.contains('selected')) {
                        div.classList.remove('selected');
                        preferenceTable
                    } else {
                        // update class
                        div.classList.add('selected');
                        preferenceTable[pref_num].push()

                        // set preference in preference table
                    }
                }, false);
            }
        }
    });

var preferenceTable = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
};



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

function readableToGlobalID(dormName, localID) {
    
}