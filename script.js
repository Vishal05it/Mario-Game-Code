let body = document.body;
let starBtn = document.createElement("button");
body.append(starBtn);
starBtn.classList.add("startBtn");
starBtn.innerHTML = "Start Game";
let startMusic = document.querySelector("#startMusic");
starBtn.addEventListener("click", () => {
    startMusic.src = "./Modi Game Over.mp3";
    startMusic.loop = true;
    startMusic.autoplay = true;
    playGame();
    starBtn.remove();
})
function playGame() {
    let player = document.querySelector("#player");
    let cspan1 = document.querySelector(".cspan1");
    let cspan2 = document.querySelector(".cspan2");
    let bool2 = true;
    let bool3 = true;
    let bul1 = document.querySelector("#bul1");
    let bul2 = document.querySelector("#bul2");
    let bul3 = document.querySelector("#bul3");
    let floor = document.querySelector("#floor");
    let buildings = document.querySelector(".buildings");
    let currLevel = 1;
    let levelDisplay = document.querySelector("#levelDisplay");
    let seconds = 0;
    let lvl3int;
    let lvl2int;
    let gameOverMusic = true;
    let gameStart = setInterval(() => {
        pillarMoveL1();
    }, 1000)
    let level2 = setTimeout(() => {
        lvl2int = setInterval(() => {
            clearInterval(gameStart);
            pillarMoveL2();
        }, 1000)
    }, 30000)
    let level3 = setTimeout(() => {
        clearInterval(lvl2int);
        lvl3int = setInterval(() => {
            pillarMoveL3();
        }, 1250)
    }, 60000)
    let score = setInterval(() => {
        let displayScore = document.querySelector(".displayScore");
        displayScore.innerText = `${seconds}00 Points`;
        seconds++
        if (seconds >= 30) {
            clearInterval(gameStart);
            currLevel++;
        }
        if (seconds >= 60) {
            clearTimeout(level2);
            currLevel++
        }
    }, 1000)

    function pillarMoveL1() {
        let obstacle = document.createElement("div");
        body.append(obstacle);
        obstacle.classList.add("obstacle");
        let hellPillar = document.createElement("img");
        obstacle.append(hellPillar);
        hellPillar.classList.add("hellPillar");
        hellPillar.src = "./burning-column-removebg-preview.png";
        let currClass = spawnBuildings();
        obstacle.classList.add(`${currClass}`);
        levelDisplay.innerText = 1;
        setTimeout(() => {
            obstacle.remove();
        }, 1900)
        obstacle.addEventListener("mouseenter", () => {
            console.log("Game Over");
            clearInterval(gameStart);
            gameOver();
            obstacle.style.animation = "none";
            obstacle.style.display = "none"
            player.style.display = "none";
        })
        obstacle.addEventListener("mouseleave", () => {
            console.log("Game Over");
            clearInterval(gameStart);
            gameOver();
            player.style.display = "none";
            obstacle.style.animation = "none";
            obstacle.style.display = "none"
        })
    }
    function pillarMoveL2() {
        let obstacle = document.createElement("div");
        body.append(obstacle);
        obstacle.classList.add("obstacle");
        let hellPillar = document.createElement("img");
        obstacle.append(hellPillar);
        hellPillar.classList.add("hellPillar");
        hellPillar.src = "./Hell Pillar.png";
        let currClass = spawnBuildings();
        obstacle.classList.add(`${currClass}`);
        console.log(currClass);
        levelDisplay.innerText = 2;
        obstacle.style.animation = "moveCloud 1.2s linear infinite";
        setTimeout(() => {
            obstacle.remove();
        }, 1350)
        obstacle.addEventListener("mouseenter", () => {
            console.log("Game Over");
            gameOver();
            obstacle.style.animation = "none";
            obstacle.style.display = "none"
            player.style.display = "none";
        })
        obstacle.addEventListener("mouseleave", () => {
            console.log("Game Over");
            gameOver();
            player.style.display = "none";
            obstacle.style.animation = "none";
            obstacle.style.display = "none"
        })
    }
    function pillarMoveL3() {
        let obstacle = document.createElement("div");
        body.append(obstacle);
        obstacle.classList.add("obstacle");
        let hellPillar = document.createElement("img");
        obstacle.append(hellPillar);
        hellPillar.classList.add("hellPillar");
        hellPillar.src = "./Hell Pillar.png";
        let currClass = spawnBuildings();
        obstacle.classList.add(`${currClass}`);
        console.log(currClass);
        levelDisplay.innerText = 3;
        obstacle.style.animation = "moveCloud 0.9s linear infinite";
        setTimeout(() => {
            obstacle.remove();
        }, 1000)
        obstacle.addEventListener("mouseenter", () => {
            console.log("Game Over");
            gameOver();
            obstacle.style.animation = "none";
            obstacle.style.display = "none"
            player.style.display = "none";
        })
        obstacle.addEventListener("mouseleave", () => {
            console.log("Game Over");
            gameOver();
            player.style.display = "none";
            obstacle.style.animation = "none";
            obstacle.style.display = "none"
        })
    }
    bul1.style.animation = "moveCloud 4s linear infinite 0.5s";
    bul2.style.animation = "moveCloud 4s linear infinite 1.5s";
    bul3.style.animation = "moveCloud 4s linear infinite 2.5s";
    cspan1.style.animation = "moveCloud 4s linear infinite";
    cspan2.style.animation = "moveCloud 4s linear infinite 3s";
    body.addEventListener("mousemove", (e) => {
        player.style.left = `${e.clientX - 50}px`;
        player.style.top = `${e.clientY - 50}px`;
    })
    floor.addEventListener("mouseenter", () => {
        clearInterval(gameStart);
        gameOver();
        player.style.display = "none";
    })
    function gameOver() {
        let gameOverText = document.createElement("h1");
        let reset = document.createElement("a");
        body.append(reset);
        reset.innerText = "Reset Game";
        reset.classList.add("reset");
        reset.href = "./index.html";
        body.append(gameOverText);
        gameOverText.classList.add("gameOverText");
        gameOverText.innerText = "Game Over";
        cspan1.style.animation = "none";
        cspan1.style.opacity = "1";
        cspan2.style.animation = "none";
        cspan2.style.opacity = "1";
        bul1.style.animation = "none";
        bul2.style.animation = "none";
        bul3.style.animation = "none";
        buildings.style.display = "none";
        if (gameOverMusic) {
            startMusic.src = "./Modi Music.mp3";
            startMusic.loop = false;
            gameOverMusic = false;
        }
        clearInterval(score);
        clearInterval(lvl2int);
        clearTimeout(level2);
        clearInterval(gameStart);
        clearInterval(lvl3int);
        clearTimeout(level3);
    }
    function spawnBuildings() {
        let styleArr = ["obstacleDownRightTilt", "obstacleUpLeftTilt", "obstacleDownStraight", "obstacleDownLeftTilt", "obstacleUpStraight", "obstacleUpRightTilt"];
        //"obstacleDownRightTilt", "obstacleUpLeftTilt", "obstacleDownStraight", "obstacleDownLeftTilt", "obstacleUpStraight",
        let idx = Math.floor(Math.random() * styleArr.length);
        return styleArr[idx];
    }
}
//playGame();
//  http://10.61.68.37:8080
//   http://127.0.0.1:8080
//https://github.com/Vishal05it/Mario-Game.git/