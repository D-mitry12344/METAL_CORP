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
	
	let myGeoObject = new ymaps.GeoObject({
            // Описываем геометрию геообъекта.
            geometry: {
                // Тип геометрии - "Ломаная линия".
                type: "LineString",
                // Указываем координаты вершин ломаной.
                coordinates: [
                    [55.732770, 37.388213],
		 			[55.733516, 37.388222]
                ]
            },
            // Описываем свойства геообъекта.
            properties:{
                // Содержимое хинта.
                hintContent: "Я геообъект",
                // Содержимое балуна.
                
            }
        }, {
            // Задаем опции геообъекта.
            // Включаем возможность перетаскивания ломаной.
            draggable: false,
            // Цвет линии.
            strokeColor: "#C40000",
            // Ширина линии.
            strokeWidth: 5
        });
	
	myMap.geoObjects.add(myGeoObject)

	myMap.geoObjects.add(myPlacemark); // Добавление метки
	myPlacemark.balloon.open(); // Открытие подсказки метки	
};