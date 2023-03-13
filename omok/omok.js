const gameContainer = document.getElementById("gameContainer");
const grid = document.getElementById("grid");

const map = document.createElement("div");
map.className = "map";

const setGrid = document.createElement("div");
grid.id = "setGrid";

let winner = 0;
let turn = 1;
const size = 10;

setGrid();
function setGrid() {
  for (let i = 0; i < size; i++) {
    for (let k = 0; k < size; k++) {
      const box = document.createElement("div");

      const id = `y${i}x${k}`;
      box.id = id;
      box.className = "tile";

      setGrid.append(box);
    }
  }
  grid.append(setGrid);
}

setMap();

function setMap() {
  // const mapContainer = document.createElement("div");
  // mapContainer.id = "mapContainer";

  // const mapContainer2 = document.createElement("div");
  // mapContainer.id = "mapContainer2";

  for (let i = 0; i < size; i++) {
    for (let k = 0; k < size; k++) {
      const tile = document.createElement("div");

      const id = `y${i}x${k}`;
      tile.id = id;
      tile.className = "tile";

      map.append(tile);

      tile.addEventListener("click", (e) => {
        console.log(id);

        const target = e.target;

        if (target.innerText) {
          alert("이미 선택 된 것이다!!!!!!!!!");
          return;
        }

        tile.innerText = turn == 1 ? "⚫️" : "⚪️";

        checkWinner();

        if (winner !== 0) {
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

function checkHori() {
  for (let i = 0; i < size; i++) {
    let count = 0;
    for (let j = 0; j < size; j++) {
      const target = `y${i}x${j}`;
      const tile = map.querySelector(`#${target}`);
      const text = tile.innerText;
      if (text === (turn == 1 ? "⚫️" : "⚪️")) {
        count++;
      }

      if (count === 5) {
        winner = turn;
      }
    }
  }
}

function checkVerti() {
  for (let i = 0; i < size; i++) {
    let count = 0;
    for (let j = 0; j < size; j++) {
      const target = `y${j}x${i}`;
      const tile = map.querySelector(`#${target}`);
      const text = tile.innerText;
      if (text === (turn == 1 ? "⚫️" : "⚪️")) {
        count++;
        } else {
            count = 0;
        }

     if (count === 5) {
        winner = turn;
    }
    }
   }
}

function checkDiag() {
    for (let i = 4; i < size; i++) {
    for (let j = 0; j < size - 4; j++) {
        const target = `y${i}x${j}`;
        const tile = map.querySelector(`#${target}`);
        const text = tile.innerText;
        let count = 0;
        if (text === (turn == 1 ? "⚫️" : "⚪️")) {
        for (let k = 0; k < 5; k++) {
        const target2 = `y${i - k}x${j + k}`;
        const tile = map.querySelector(`#${target2}`);
        const text2 = tile.innerText;
        if (text2 === (turn == 1 ? "⚫️" : "⚪️")) {
            count++;
            console.log("count 1: " + count);
        }
        }
    }
    if (count === 5) {
        winner = turn;
        }
        }
    }
}

function checkDiag2() {
    for (let i = 0; i < size - 4; i++) {
    for (let j = 0; j < size - 4; j++) {
    const target = `y${i}x${j}`;
    const tile = map.querySelector(`#${target}`);
    const text = tile.innerText;
    let count = 0;
    if (text === (turn == 1 ? "⚫️" : "⚪️")) {
        for (let k = 0; k < 5; k++) {
        const target2 = `y${i + k}x${j + k}`;
        const tile = map.querySelector(`#${target2}`);
        const text2 = tile.innerText;
        if (text2 === (turn == 1 ? "⚫️" : "⚪️")) {
            count++;
            console.log("count 2: " + count);
        } 
        }
    }
    if (count === 5) {
        winner = turn;
    }
    }
    }
}

function reset() {
turn = 1;
winner = 0;
location.reload();
}
