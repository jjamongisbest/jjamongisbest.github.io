const gameContainer = document.getElementById("gameContainer");

const map = document.createElement("div");;
map.className = "map";

let winner = 0;
let turn = 1;
let size = 10;

setMap();

function setMap(){
    for(let i = 0; i< size; i++){
        for(let k = 0; k<size; k++){
            const tile = document.createElement("div");

            const id = `y${i}x${k}`;
            tile.id = id;
            tile.className = "tile";

            map.append(tile);

            tile.addEventListener("click", e =>{
                console.log(id);

                const target = e.target;
            })
        }
    }

    gameContainer.append(map);
}

function fakeMap(){
    
}