const cards = document.querySelectorAll(".faqs__card");

const hoverHandler = function (e, currentTarget) {
	const card = currentTarget ? currentTarget : e.currentTarget;
	const answer = card.querySelector(".answer");
	const icon = card.querySelector(".question img");
	let heightToExpand, answerOpacity, questionColor, iconURL, answerDisplay;
	if (!card.classList.contains("active")) {
		heightToExpand = "5rem";
		answerOpacity = 1;
		answerDisplay = 0;
		iconURL = "assets/images/icon-minus.svg";
	} else {
		heightToExpand = 0;
		answerOpacity = 0;
		answerDisplay = "-500rem";
		iconURL = "assets/images/icon-plus.svg";
	}
	answer.style.top = answerDisplay;
	answer.style.opacity = answerOpacity;
	answer.style.height = heightToExpand;
	icon.src = iconURL;
	e.currentTarget.classList.toggle("active");
};

const arrowsHandler = function (e, i, list) {
	let newIndex = i;
	if (e.keyCode === 38) {
		if (i > 0) {
			newIndex = i - 1;
		} else {
			newIndex = list.length - 1;
		}
	} else if (e.keyCode === 40) {
		if (i < list.length - 1) {
			newIndex = i + 1;
		} else {
			newIndex = 0;
		}
	}
	const target = list[newIndex];
	target.focus();
	target.addEventListener("keydown", (e) => {
		if (e.keyCode === 13) return hoverHandler(e, target);
		// else return arrowsHandler(e, newIndex, list);
	});
};
cards[0].focus();
Array.from(cards).forEach((card, index, list) => {
	card.addEventListener("click", (e) => hoverHandler(e));
	card.addEventListener("keydown", (e) => arrowsHandler(e, index, list));
});
