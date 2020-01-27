const init = () => {
	let myMap = new ymaps.Map("map", {
		center: [59.437411, 24.745181],
		// zoom (from 0 to 19)
		zoom: 7,
		controls: ['zoomControl'],
	});

  loadLocations().then((locations) => {
    for (let location of locations) {
      myMap.geoObjects.add(createPlacemark(location));
    }
  });
}

const loadLocations = async () => {
  const response = await fetch('/api/locations');
  const json = await response.json();
  return json.locations;
}

const createPlacemark = (location) => {
  const placemark = new ymaps.Placemark([
    parseInt(location.lat),
    parseInt(location.lng)
  ], {
    iconContent: location.alumni_count,
    iconCaption: location.location_name,
    balloonContent: 'Выпускников: ' + location.alumni_count,
  }, {
    preset: 'islands#blueCircleDotIconWithCaption',
    iconCaptionMaxWidth: '50',
  });

  placemark.events.add('click', (e) => {
    console.log(location.location_id, location.location_name);
  });

  return placemark;
}

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
