const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en", "de"];
let currentLang = localStorage.getItem("language") || "ru";
const currentPathName = window.location.pathname.slice(1);
let currentTextObject = {};

const homeTextsObject = {
	"home_page-title": {
		ru: "Домашняя страница",
		en: "Homepage",
		de: "Startseite",
	},
	"home_page-1": {
		ru: "Первый параграф",
		en: "First paragraph",
		de: "Erster Paragraph",
	},
};
const anotherTextsObject = {
	"another_page-title": {
		ru: "Другая страница",
		en: "Another page",
		de: "Eine andere Seite",
	},
	"another_page-1": {
		ru: "Первый параграф",
		en: "First paragraph on another page",
		de: "Erster Paragraph auf einer anderen Seite",
	},
};

langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

function checkPagePathName() {
	switch (currentPathName) {
		case "index.html":
			currentTextObject = homeTextsObject;
			break;
		case "another_page.html":
			currentTextObject = anotherTextsObject;
			break;
	}
}
checkPagePathName();

function checkActiveLangButton(lang) {
	switch (lang) {
		case "ru":
			langButtons[0].classList.add("header__btn_active");
			break;
		case "en":
			langButtons[1].classList.add("header__btn_active");
			break;
		case "de":
			langButtons[2].classList.add("header__btn_active");
			break;

		default:
			langButtons[0].classList.add("header__btn_active");
			break;
	}
}
checkActiveLangButton(currentLang);

function changeLang() {
	for (const key in currentTextObject) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTextObject[key][currentLang];
		}
	}
}
changeLang();
