// -1 - пустая клетка, 0 - крестик, 1 - нолик
var field = [
	[-1, -1, -1],
	[-1, -1, -1],
	[-1, -1, -1]
];
var nextCharacter = 0;
function initialize() {
	field = [
		[-1, -1, -1],
		[-1, -1, -1],
		[-1, -1, -1]
	];
	nextCharacter = 0;
	var id;
	for(var i = 0; i < 9; i++) {
		id = "cell" + i;
		document.getElementById(id).innerHTML = "";
	}
	$(".column").css("pointer-events","auto");
}
$(document).ready(function() {
    $( "#startButton" ).click(function() {
        initialize();
    });
    $('.column').click(function() {
    	var id = this.id;
    	var intId = parseInt(id.charAt(4), 10);
    	myClick(intId);
    });
});

function myClick(position) {
	var y = Math.floor(position / 3);
	var x = position % 3;
	if(field[y][x] != -1) {		
		return;
	}
	field[y][x] = nextCharacter;
	updateCell(position);
	check(position, x, y);
	nextCharacter = nextCharacter ^ 1;
};

function updateCell(position) {
	var id = 'cell' + position;
	var element = document.getElementById(id);
	element.innerHTML = '<p style="width: 50px; margin: 40px auto;">' + ((nextCharacter) ? 'O' : 'X') + '</p>';
}

function check(position, x, y) {
	if(field[y][0] == nextCharacter 
		&& field[y][1] == nextCharacter 
		&& field[y][2] == nextCharacter) {
		endGame(nextCharacter);
		return;
	}
	if(field[0][x] == nextCharacter 
		&& field[1][x] == nextCharacter 
		&& field[2][x] == nextCharacter) {
		endGame(nextCharacter);
		return;
	}
	if(position % 2 == 0) {
		if(field[0][0] == nextCharacter 
			&& field[1][1] == nextCharacter 
			&& field[2][2] == nextCharacter) {
			endGame(nextCharacter);
			return;
		}
	}
	if(position % 2 == 0) {
		if(field[0][2] == nextCharacter 
			&& field[1][1] == nextCharacter 
			&& field[2][0] == nextCharacter) {
			endGame(nextCharacter);
			return;
		}
	}
}

function endGame(sign) {
	$(".column").css("pointer-events","none");
	if(sign == 0)
		alert("Победили крестики")
	else
		alert("Победили нолики")
};