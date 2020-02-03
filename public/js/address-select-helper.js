const selectAddress = (lat1, lng1, lat2, lng2, display_name) => {
  $('#results').empty();
  $('<b>', {html: "Вы выбрали адрес: " + display_name}).appendTo('#results');
  $("#lat").val(lat1);
  $("#lon").val(lng1);
  $("#display_name").val(display_name);
};

const searchAddress = () => {
  let inp = document.getElementById("addr");

  $.getJSON('https://geocode-maps.yandex.ru/1.x/?format=json&apikey=d61231e6-cea5-435c-9616-8e5f25597fda&geocode=' + inp.value, function (data) {
    let items = [];
    let temp = 0;

    let realData = data.response.GeoObjectCollection.featureMember;

    if (realData.length !== 0) {
      $.each(realData, function (key, val) {
        let coords = val.GeoObject.Point.pos.split(" ");
        if (val.GeoObject.metaDataProperty.GeocoderMetaData.kind === "locality") {
          items.push("<li><a href='#' onclick='selectAddress(" + coords[0] + ", "
            + coords[1] + ", " + coords[0] + ", " + coords[1] + ", \""
            + val.GeoObject.metaDataProperty.GeocoderMetaData.text + "\");return false;'>"
            + val.GeoObject.metaDataProperty.GeocoderMetaData.text + '</a></li>');
          temp++;
        }
      });
    }
    if (temp === 0) {
      items.push("<p><b>Город не найден.</b></p>");
    } else if (data.length === 0) {
      items.push("<p><b>Город не найден.</b></p>");
    }
    $('#results').empty();
    $('<ul/>', {
      'class': 'my-new-list',
      html: items.join(''),
    }).appendTo('#results');
  });
};
