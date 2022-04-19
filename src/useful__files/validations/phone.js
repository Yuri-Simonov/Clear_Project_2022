// Валидация номера телефона

const inputPhone = document.querySelector('.js-phone');

if (inputPhone) {
	inputPhone.onclick = function () {
		inputPhone.value = "+7(";
	}

	let old = 0;

	inputPhone.onkeyup = function () {
		let currentValue = inputPhone.value;
		if (/[а-яА-ЯёЁa-zA-Z]*/g) {
			inputPhone.value = currentValue.replace(/[а-яА-ЯёЁa-zA-Z]*/g, "");
		}
		let curLen = inputPhone.value.length;
		console.log(curLen);

		if (curLen < old) {
			old--;
			return;
		}

		if (curLen === 2) { inputPhone.value = inputPhone.value + ""; }
		if (curLen === 6) { inputPhone.value = inputPhone.value + ")-"; }
		if (curLen === 11) { inputPhone.value = inputPhone.value + "-"; }
		if (curLen === 14) { inputPhone.value = inputPhone.value + "-"; }
		if (curLen >= 18) { inputPhone.value = inputPhone.value.slice(0, -1); }

		old++;
	}
}