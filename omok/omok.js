const gameContainer = document.getElementById("gameContainer");

const map = document.createElement("div");;
map.className = "map";

let winner = 0;
let turn = 1;
const size = 10;

setMap();

function setMap(){
    // const mapContainer = document.createElement("div");
    // mapContainer.id = "mapContainer";

    // const mapContainer2 = document.createElement("div");
    // mapContainer.id = "mapContainer2";

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

                if(target.innerText){
                    alert("이미 선택 된 것이다!!!!!!!!!");
                    return;
                }

                tile.innerText = turn == 1 ? "⚫️":"⚪️";

                checkWinner();

                if(winner !== 0){
                    alert(`winner: ${winner}`);
                }

                turn = turn === 1 ? 2 : 1;
            });

        }
    }

    gameContainer.append(map);
}


function checkWinner() {
    checkHori();
    checkVerti();
    checkDiag();
    checkDiag2();
}

function checkHori(){
    for(let i=0; i<size; i++){
        let count = 0;
        for(let j=0; j<size; j++){
            const target = `y${i}x${j}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;
            if(text === (turn == 1 ? "⚫️" : "⚪️")) {
                count ++;
            }

            if(count === 5){
                winner = turn;
            }
        }
    }
}

function checkVerti(){
    for(let i=0; i<size; i++){
        let count = 0;
        for(let j=0; j<size; j++){
            const target = `y${j}x${i}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;
            if(text === (turn == 1 ? "⚫️" : "⚪️")) {
                console.log(count);
                count ++;
            }

            if(count === 5){
                winner = turn;
            }
        }
    }
}

function checkDiag(){
    for(let i=4; i<size; i++){
        for(let j=0; j<size-4; j++){
            const target = `y${i}x${j}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;
            let count = 0;
            if(text === (turn == 1 ? "⚫️" : "⚪️")){
                for(let k=0; k<5; k++){
                const target2 = `y${i-k}x${j+k}`;
                const box = map.querySelector(`#${target2}`);
                const text2 = box.innerText;
                if(text2 === (turn == 1 ? "⚫️" : "⚪️")){
                    count ++;
                    }
                }
            }
            if(count === 5){
                win = turn;
            }
        }
    }
}

function checkDiag2(){
    for(let i=0; i<size-4; i++){
        for(let j=0; j<size-4; j++){
        const target = `y${i}x${j}`;
        const box = map.querySelector(`#${target}`);
        const text = box.innerText;
        let count = 0;
        if(text === (turn == 1 ? "⚫️" : "⚪️")){
            for(let k=0; k<5; k++){
                const target2 = `y${i+k}x${j+k}`;
                const box = map.querySelector(`#${target2}`);
                const text2 = box.innerText;
                if(text2 === (turn == 1 ? "⚫️" : "⚪️")){
                    count ++;
                }
            }
        }
        if(count === 5){
            win = turn;
        }
        }
    }
}

function reset(){
    turn = 1;
    win = 0;
    location.reload();
}