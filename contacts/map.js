ymaps.ready(init); 
var myMap;
	
function init() {
	
	myMap = new ymaps.Map("map", {
			center: [54.832935, 56.109330], // Координаты центра карты
		zoom: 13 // Маштаб карты
	}); 

	/*myMap.controls.add(
		
		//new ymaps.control.ZoomControl()  // Добавление элемента управления картой
	); */
	myMap.controls.add('zoomControl')
	myPlacemark = new ymaps.Placemark([54.832935, 56.109330], { // Координаты метки объекта
		balloonContent: "<div class='ya_map'>METALL CORP</div>" // Подсказка метки
	}, {
		preset: "twirl#redDotIcon" // Тип метки
	});
	
	myMap.geoObjects.add(myPlacemark); // Добавление метки
	myPlacemark.balloon.open(); // Открытие подсказки метки	
};