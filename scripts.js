// set turn to 0 which represents Player X as X always starts
var turn = 0;

// function checks turn and adds symbol accordingly
// uses async for timeout function on turn change
async function addSymbol(obj) {
    if (turn == 0) {
        obj.value = 'X';
        turn = 1;
    } else {
        obj.value = 'O';
        turn = 0;
    }
    obj.disabled = true;
    await turnTimeout();
    checkGameCondition();
}

// function to check current game condition
function checkGameCondition() {
    // player win flags
    var xFlag = false;
    var oFlag = false;
    // turn display
    let turnDisplay = document.getElementById("turn");
    // making turnDisplay text bold
    turnDisplay.style.fontWeight = "bold";
    // game status
    var status = document.getElementById("status");
    // making game status text bold
    status.style.fontWeight = "bold";
    // grid cell values
    var cell00Value = document.getElementById('00').value;
    var cell01Value = document.getElementById('01').value;
    var cell02Value = document.getElementById('02').value;
    var cell10Value = document.getElementById('10').value;
    var cell11Value = document.getElementById('11').value;
    var cell12Value = document.getElementById('12').value;
    var cell20Value = document.getElementById('20').value;
    var cell21Value = document.getElementById('21').value;
    var cell22Value = document.getElementById('22').value;
    // grid cells
    var cell00 = document.getElementById('00');
    var cell01 = document.getElementById('01');
    var cell02 = document.getElementById('02');
    var cell10 = document.getElementById('10');
    var cell11 = document.getElementById('11');
    var cell12 = document.getElementById('12');
    var cell20 = document.getElementById('20');
    var cell21 = document.getElementById('21');
    var cell22 = document.getElementById('22');

    // check all 8 possible win conditions for both players
    // disable the other 6 grid cells and color winning row / col / diagonal light green
    // finally set win flag according to player
    if (cell00Value == "X" && cell01Value == "X" && cell02Value == "X") {
        cell01.disabled = true;
        cell11.disabled = true;
        cell12.disabled = true;
        cell20.disabled = true;
        cell21.disabled = true;
        cell22.disabled = true;
        cell00.style.backgroundColor = "LightGreen";
        cell01.style.backgroundColor = "LightGreen";
        cell02.style.backgroundColor = "LightGreen";
        xFlag = true;
    } else if (cell10Value == "X" && cell11Value == "X" && cell12Value == "X") {
        cell00.disabled = true;
        cell01.disabled = true;
        cell02.disabled = true;
        cell20.disabled = true;
        cell21.disabled = true;
        cell22.disabled = true;
        cell10.style.backgroundColor = "LightGreen";
        cell11.style.backgroundColor = "LightGreen";
        cell12.style.backgroundColor = "LightGreen";
        xFlag = true;
    } else if (cell20Value == "X" && cell21Value == "X" && cell22Value == "X") {
        cell00.disabled = true;
        cell01.disabled = true;
        cell02.disabled = true;
        cell10.disabled = true;
        cell11.disabled = true;
        cell12.disabled = true;
        cell20.style.backgroundColor = "LightGreen";
        cell21.style.backgroundColor = "LightGreen";
        cell22.style.backgroundColor = "LightGreen";
        xFlag = true;
    } else if (cell00Value == "X" && cell10Value == "X" && cell20Value == "X") {
        cell01.disabled = true;
        cell02.disabled = true;
        cell11.disabled = true;
        cell12.disabled = true;
        cell21.disabled = true;
        cell22.disabled = true;
        cell00.style.backgroundColor = "LightGreen";
        cell10.style.backgroundColor = "LightGreen";
        cell20.style.backgroundColor = "LightGreen";
        xFlag = true;
    } else if (cell01Value == "X" && cell11Value == "X" && cell21Value == "X") {
        cell00.disabled = true;
        cell02.disabled = true;
        cell10.disabled = true;
        cell12.disabled = true;
        cell20.disabled = true;
        cell22.disabled = true;
        cell01.style.backgroundColor = "LightGreen";
        cell11.style.backgroundColor = "LightGreen";
        cell21.style.backgroundColor = "LightGreen";
        xFlag = true;
    } else if (cell02Value == "X" && cell12Value == "X" && cell22Value == "X") {
        cell00.disabled = true;
        cell01.disabled = true;
        cell10.disabled = true;
        cell11.disabled = true;
        cell20.disabled = true;
        cell21.disabled = true;
        cell02.style.backgroundColor = "LightGreen";
        cell12.style.backgroundColor = "LightGreen";
        cell22.style.backgroundColor = "LightGreen";
        xFlag = true;
    } else if (cell00Value == "X" && cell11Value == "X" && cell22Value == "X") {
        cell01.disabled = true;
        cell02.disabled = true;
        cell10.disabled = true;
        cell12.disabled = true;
        cell20.disabled = true;
        cell21.disabled = true;
        cell00.style.backgroundColor = "LightGreen";
        cell11.style.backgroundColor = "LightGreen";
        cell22.style.backgroundColor = "LightGreen";
        xFlag = true;
    } else if (cell20Value == "X" && cell11Value == "X" && cell02Value == "X") {
        cell00.disabled = true;
        cell01.disabled = true;
        cell10.disabled = true;
        cell12.disabled = true;
        cell21.disabled = true;
        cell22.disabled = true;
        cell20.style.backgroundColor = "LightGreen";
        cell11.style.backgroundColor = "LightGreen";
        cell02.style.backgroundColor = "LightGreen";
        xFlag = true;
    } else if (cell00Value == "O" && cell01Value == "O" && cell02Value == "O") {
        cell10.disabled = true;
        cell11.disabled = true;
        cell12.disabled = true;
        cell20.disabled = true;
        cell21.disabled = true;
        cell22.disabled = true;
        cell00.style.backgroundColor = "LightGreen";
        cell01.style.backgroundColor = "LightGreen";
        cell02.style.backgroundColor = "LightGreen";
        oFlag = true;
    } else if (cell10Value == "O" && cell11Value == "O" && cell12Value == "O") {
        cell00.disabled = true;
        cell01.disabled = true;
        cell02.disabled = true;
        cell20.disabled = true;
        cell21.disabled = true;
        cell22.disabled = true;
        cell10.style.backgroundColor = "LightGreen";
        cell11.style.backgroundColor = "LightGreen";
        cell12.style.backgroundColor = "LightGreen";
        oFlag = true;
    } else if (cell20Value == "O" && cell21Value == "O" && cell22Value == "O") {
        cell00.disabled = true;
        cell01.disabled = true;
        cell02.disabled = true;
        cell10.disabled = true;
        cell11.disabled = true;
        cell12.disabled = true;
        cell20.style.backgroundColor = "LightGreen";
        cell21.style.backgroundColor = "LightGreen";
        cell22.style.backgroundColor = "LightGreen";
        oFlag = true;
    } else if (cell00Value == "O" && cell10Value == "O" && cell20Value == "O") {
        cell01.disabled = true;
        cell02.disabled = true;
        cell11.disabled = true;
        cell12.disabled = true;
        cell21.disabled = true;
        cell22.disabled = true;
        cell00.style.backgroundColor = "LightGreen";
        cell10.style.backgroundColor = "LightGreen";
        cell20.style.backgroundColor = "LightGreen";
        oFlag = true;
    } else if (cell01Value == "O" && cell11Value == "O" && cell21Value == "O") {
        cell00.disabled = true;
        cell02.disabled = true;
        cell10.disabled = true;
        cell12.disabled = true;
        cell20.disabled = true;
        cell22.disabled = true;
        cell01.style.backgroundColor = "LightGreen";
        cell11.style.backgroundColor = "LightGreen";
        cell21.style.backgroundColor = "LightGreen";
        oFlag = true;
    } else if (cell02Value == "O" && cell12Value == "O" && cell22Value == "O") {
        cell00.disabled = true;
        cell01.disabled = true;
        cell10.disabled = true;
        cell11.disabled = true;
        cell20.disabled = true;
        cell21.disabled = true;
        cell02.style.backgroundColor = "LightGreen";
        cell12.style.backgroundColor = "LightGreen";
        cell22.style.backgroundColor = "LightGreen";
        oFlag = true;
    } else if (cell00Value == "O" && cell11Value == "O" && cell22Value == "O") {
        cell01.disabled = true;
        cell02.disabled = true;
        cell10.disabled = true;
        cell12.disabled = true;
        cell20.disabled = true;
        cell21.disabled = true;
        cell00.style.backgroundColor = "LightGreen";
        cell11.style.backgroundColor = "LightGreen";
        cell22.style.backgroundColor = "LightGreen";
        oFlag = true;
    } else if (cell20Value == "O" && cell11Value == "O" && cell02Value == "O") {
        cell00.disabled = true;
        cell01.disabled = true;
        cell10.disabled = true;
        cell12.disabled = true;
        cell21.disabled = true;
        cell22.disabled = true;
        cell20.style.backgroundColor = "LightGreen";
        cell11.style.backgroundColor = "LightGreen";
        cell02.style.backgroundColor = "LightGreen";
        oFlag = true;
        // checking for tie, if so display tie in turn area and color all grid cells light gray
        // display game condition as restarting and wait 5s before reloading page for restart
    } else if ((cell00Value == 'X' || cell00Value == 'O')
        && (cell01Value == 'X' || cell01Value == 'O')
        && (cell02Value == 'X' || cell02Value == 'O')
        && (cell10Value == 'X' || cell10Value == 'O')
        && (cell11Value == 'X' || cell11Value == 'O')
        && (cell12Value == 'X' || cell12Value == 'O')
        && (cell20Value == 'X' || cell20Value == 'O')
        && (cell21Value == 'X' || cell21Value == 'O')
        && (cell22Value == 'X' || cell22Value == 'O')) {
        turnDisplay.textContent = 'Tie!';
        cell00.style.backgroundColor = "LightGray";
        cell01.style.backgroundColor = "LightGray";
        cell10.style.backgroundColor = "LightGray";
        cell12.style.backgroundColor = "LightGray";
        cell21.style.backgroundColor = "LightGray";
        cell22.style.backgroundColor = "LightGray";
        cell20.style.backgroundColor = "LightGray";
        cell11.style.backgroundColor = "LightGray";
        cell02.style.backgroundColor = "LightGray";
        status.textContent = 'Tie game! Restarting game...';
        status.style.fontweight = "bold";
        restart();
        // if game not over simply display current player's turn
    } else {
        if (turn == 0) {
            turnDisplay.textContent = 'Player X\'s Turn';
        } else {
            turnDisplay.textContent = 'Player O\'s Turn';
        }
    }
    // on X's win display X as winner
    // display game condition as restarting and wait 5s before reloading page for restart
    if (xFlag) {
        turnDisplay.textContent = 'Player X has won!';
        status.textContent = 'Player X won! Restarting game...';
        restart();
    }
    // on O's win display O as winner
    // display game condition as restarting and wait 5s before reloading page for restart
    if (oFlag) {
        turnDisplay.textContent = 'Player O has won!';
        status.textContent = 'Player O won! Restarting game...';
        restart();
    }
}

// timeout function to wait 100 ms between turn changes
function turnTimeout() {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, 100);
    });
}

// restart function to restart game after 5s and show restart progress bar
function restart() {
    var bar = document.getElementById("bar");
    var percentageText = document.getElementById("percentage");
    var barContainer = document.getElementById("bar-container");
    bar.classList.add('animate');

    setInterval(function () {
        var barWidth = bar.offsetWidth;
        var containerWidth = barContainer.offsetWidth;

        var percentage = (barWidth / containerWidth) * 100;

        if (percentage <= 100) {
            percentageText.textContent = Math.round(percentage) + "%";
        }
    }, 50);

    setTimeout(function () {
        window.location.reload();
    }, 5500);
}
