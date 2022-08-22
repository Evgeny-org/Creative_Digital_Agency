//смена значения атрибута href для всех ссылок на странице (для полавности)
const anchors = document.querySelectorAll('a[href*="#"]') //выбираем все элементы с ссылкой «a», а именно те, у которых есть решетка

for (let anchor of anchors){// это значит что мы будем каждый элемент прогонять по очереди
	anchor.addEventListener("click", function(e){
		e.preventDefault() //отмена стандартных настроек кнопки
		const blockID = anchor.getAttribute('href') //получаем значение атрибута href
		document.querySelector(blockID).scrollIntoView({ //метод, который служит для плавного скролла
			behavior: "smooth", //плавный
			block: "start"	//скролл
		})
	})
}
