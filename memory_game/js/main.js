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
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	var cardId = cards[0, 1, 2, 3]
	console.log("User flipped " + cards[cardId.rank]);
var cardsInPlay = [];
cardsInPlay.push(cards[cardId.rank]);
console.log("User flipped queen");
console.log("User flipped King");
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
var cardId = this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {
	cards[0] === cards[1]
	alert("You found a match!")
    } else if (cardsInPlay.length === 2) {
		cards[2] ===  cards[3]
		alert("You found a match!")
	} else (cardsInPlay.length === 2) 
	{
			alert("Sorry, try again.")
		}
};
flipCard(checkForMatch); 
var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
cardElement.addEventListener('click', flipcard).appendChild(game-board);
}
};
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/bacl.png');
cardElement.setAttribute('data-id', i);
createBoard();


