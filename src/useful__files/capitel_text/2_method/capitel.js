const string = document.querySelectorAll(".capital");

string.forEach((element) => {
	let finalText = element.textContent
		.trim()
		.split(/\s+/)
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(" ");

	element.textContent = finalText;
});
