$('#alum-view').empty();
     
     
    var mymap = L.map('mapid').setView([58.595, 25.014], 3);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom:2,
    id: 'mapbox.streets',
  
    accessToken: 'sk.eyJ1Ijoibm9ub2Jpc2hhIiwiYSI6ImNqd201enF3eDF1YnQ0NG8ydTd5cDhkajcifQ.bk0jp5sFLvNJPYTis0Xi_A'
}).addTo(mymap);