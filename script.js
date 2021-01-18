"use strict";

const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");

const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");

const diceElement = document.querySelector(".dice");
let scores, currentScore, activePlayer, playing;

const switchPlayer = () => {
	document.getElementById(`current--${activePlayer}`).textContent = currentScore;

	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;

	player0Element.classList.toggle("player--active");
	player1Element.classList.toggle("player--active");
};

const initialize = () => {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	score0Element.textContent = "0";
	score1Element.textContent = "0";

	current0Element.textContent = "0";
	current1Element.textContent = "0";

	buttonHold.classList.remove("hidden");
	buttonRoll.classList.remove("hidden");
	diceElement.classList.add("hidden");

	player0Element.classList.remove("player--winner-dark");
	player1Element.classList.remove("player--winner-light");

	player0Element.classList.add("player--active");
	player1Element.classList.remove("player--active");
};
initialize();

buttonRoll.addEventListener("click", function () {
	if (playing) {
		const dice = Math.trunc(Math.random() * 6 + 1);

		diceElement.classList.remove("hidden");
		diceElement.src = `./resources/dice-${dice}.png`;

		if (dice !== 1) {
			currentScore += dice;
			document.getElementById(`current--${activePlayer}`).textContent = currentScore;
			return;
		}

		switchPlayer();
	}
});

buttonHold.addEventListener("click", function () {
	scores[activePlayer] += currentScore;
	document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

	if (playing) {
		if (scores[activePlayer] >= 100) {
			diceElement.classList.add("hidden");
			buttonHold.classList.add("hidden");
			buttonRoll.classList.add("hidden");
			playing = false;

			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add(activePlayer === 0 ? "player--winner-dark" : "player--winner-light");
			document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
			return;
		}

		switchPlayer();
	}
});

buttonNew.addEventListener("click", initialize);
