function submitForm() {
	const form = document.getElementById('myForm');
	const formData = new FormData(form);

	// Преобразуем данные формы в объект JSON
	const jsonObject = {};
	formData.forEach((value, key) => {
		jsonObject[key] = value;
	});

	// Преобразуем объект JSON в массив
	const jsonArray = Object.entries(jsonObject);

	// Создаем HTML для вывода массива
	const outputDiv = document.getElementById('output');
	const ul = document.createElement('ul');

	jsonArray.forEach(([key, value]) => {
		const li = document.createElement('li');
		li.textContent = `${key}: ${value}`;
		ul.appendChild(li);
	});

	outputDiv.appendChild(ul);
}