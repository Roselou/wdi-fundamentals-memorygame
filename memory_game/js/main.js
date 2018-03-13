var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
}, 
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

var cardsInPlay = [];

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	// var cardId = cards[0, 1, 2, 3]
	console.log("User flipped " + cards[cardId.rank]);
cardsInPlay.push(cards[cardId]);
// console.log("User flipped queen");
// console.log("User flipped King");
// console.log(cards[cardId].cardImage);
// console.log(cards[cardId].suit);
var cardId = this.setAttribute('src', cards[cardId].cardImage);
	// if (cardsInPlay.length === 2) {
	// cards[0] === cards[1]
	// alert("You found a match!")
 //    } else if (cardsInPlay.length === 2) {
	// 	cards[2] ===  cards[3]
	// 	alert("You found a match!")
	// } else (cardsInPlay.length === 2) 
	// {
	// 		alert("Sorry, try again.")
	// 	}

	// check if I have 2 cards to compare
	// if I do, i will check if they are the same
	// if they are the same, say "match!"
	// if they are not the same, say "not a match!"

	console.log(cardsInPlay)
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			alert ("You found a match!")
			cardsInPlay = [];
		} else {
			alert ("Sorry, try again")
		}
	    // if (cardsInPlay[2] === cardsInPlay[3]) {
	    // 	alert ("You found a match!")
	    // };
	}

};
// var flipCard = function(checkForMatch) {};

var createBoard = function() {	
for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById("game-board").appendChild(cardElement);
// document.querySelector('img').appendChild("game-board");
}
};

createBoard();


