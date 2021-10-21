var player1 = 1
var player2 = 2
var turn = 1

setInterval(function() {
    if(turn === 1)document.getElementById("turno").append === true 
        // Button is hidden
    
}, 1000);

function checkWinner(player) {
    
    if((document.getElementById(1).value === player
    && document.getElementById(2).value === player 
    && document.getElementById(3).value === player)
    || (document.getElementById(4).value === player
    && document.getElementById(5).value === player 
    && document.getElementById(6).value === player)
    || (document.getElementById(7).value === player
    && document.getElementById(8).value === player 
    && document.getElementById(9).value === player)
    || (document.getElementById(1).value === player
    && document.getElementById(4).value === player 
    && document.getElementById(7).value === player)
    || (document.getElementById(2).value === player
    && document.getElementById(5).value === player 
    && document.getElementById(3).value === player)
    || (document.getElementById(3).value === player
    && document.getElementById(6).value === player 
    && document.getElementById(9).value === player)
    || (document.getElementById(1).value === player
    && document.getElementById(5).value === player 
    && document.getElementById(9).value === player)
    || (document.getElementById(3).value === player
    && document.getElementById(5).value === player 
    && document.getElementById(7).value === player)){

    alert("Ganador Player "+player);
    location.reload();
    }

    
}

function change(clicked_id)
{
    if(turn === 1 && document.getElementById(clicked_id).value === "")
    {
        document.getElementById(clicked_id).value="✖️";

        turn = 2;
    }else if(turn === 2 && document.getElementById(clicked_id).value === ""){
        document.getElementById(clicked_id).value="⚫️";

        turn = 1;
    }
    
    checkWinner("✖️")
    checkWinner("⚫️")
    
}

// txt = document.getElementById('turno').innerHTML;

// console.log(txt.innerText)