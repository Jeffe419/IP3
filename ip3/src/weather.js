//weather api

function search(){
var location = document.getElementById("location").value;
const request = new XMLHttpRequest();
request.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q="+location+"&aqi=no");
request.send();
request.onload = () => {
  if (request.status === 200){
      var weatherdata = JSON.parse(request.response);
      console.log(weatherdata.current.temp_c);
  }
  else {
      console.log("Error:"+ request.status);
  }
};
}



//map api

const mapToken =
"pk.eyJ1IjoiamFzb25zYW5kYmVyZyIsImEiOiJja3p5NnM0ZXMwMmRhMm9tbHYyaHg0c2xuIn0.SPy4_h28bli4QOBNfJWryw";
const map = L.map('map').setView([55.860916, -4.251433],3);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapToken
}).addTo(map);



//GLASGOW CALL
setTimeout(function(){
const request = new XMLHttpRequest();
request.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=Glasgow&aqi=no");
request.send();
request.onload = () => {
  if (request.status === 200){
      var glasgowdata = JSON.parse(request.response);
      var glasgowC = glasgowdata.current.temp_c;
      var glasgowMarker = new L.Marker([55.860916, -4.251433], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+glasgowC+"</div>"

                        })
                    }).addTo(map);
  }
  else {
      console.log("Error:"+ request.status);
  }
};
},1000);


//LONDON CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=London&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var londondata = JSON.parse(request1.response);
      var londonC = londondata.current.temp_c;
      var londonMarker = new L.Marker([51.509865, -0.118092], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+londonC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//paris CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=paris&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var parisdata = JSON.parse(request1.response);
      var parisC = parisdata.current.temp_c;
      var parisMarker = new L.Marker([48.8566,  2.3522], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+parisC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);


//tokyo CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=tokyo&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var tokyodata = JSON.parse(request1.response);
      var tokyoC = tokyodata.current.temp_c;
      var tokyoMarker = new L.Marker([35.6762, 139.6503], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+tokyoC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//delhi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=delhi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var delhidata = JSON.parse(request1.response);
      var delhiC = delhidata.current.temp_c;
      var delhiMarker = new L.Marker([28.7041, 77.1025], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+delhiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//shanghai CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=shanghai&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var shanghaidata = JSON.parse(request1.response);
      var shanghaiC = shanghaidata.current.temp_c;
      var shanghaiMarker = new L.Marker([31.2304, 121.4737], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+shanghaiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//saopaulo CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=-23.5558,-46.6396&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var saopaulodata = JSON.parse(request1.response);
      var saopauloC = saopaulodata.current.temp_c;
      var saopauloMarker = new L.Marker([-23.5558, -46.6396], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+saopauloC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//mexicocity CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=19.4326,-99.1332&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var mexicocitydata = JSON.parse(request1.response);
      var mexicocityC = mexicocitydata.current.temp_c;
      var mexicocityMarker = new L.Marker([19.4326, -99.1332], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+mexicocityC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//cairo CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=cairo&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var cairodata = JSON.parse(request1.response);
      var cairoC = cairodata.current.temp_c;
      var cairoMarker = new L.Marker([30.0444, 31.2357], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+cairoC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//bombay CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=bombay&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var bombaydata = JSON.parse(request1.response);
      var bombayC = bombaydata.current.temp_c;
      var bombayMarker = new L.Marker([19.0760, 72.8777], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+bombayC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//beijing CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=beijing&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var beijingdata = JSON.parse(request1.response);
      var beijingC = beijingdata.current.temp_c;
      var beijingMarker = new L.Marker([39.9042, 116.4074], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+beijingC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//dhaka CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=dhaka&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var dhakadata = JSON.parse(request1.response);
      var dhakaC = dhakadata.current.temp_c;
      var dhakaMarker = new L.Marker([23.8103, 90.4125], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+dhakaC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//osaka CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=osaka&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var osakadata = JSON.parse(request1.response);
      var osakaC = osakadata.current.temp_c;
      var osakaMarker = new L.Marker([34.6937, 135.5023], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+osakaC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//newyork CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=10001&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var newyorkdata = JSON.parse(request1.response);
      var newyorkC = newyorkdata.current.temp_c;
      var newyorkMarker = new L.Marker([40.7128, -74.0060], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+newyorkC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);



//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([24.8607, 67.0011], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);




//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);





//karachi CALL

setTimeout(function(){
const request1 = new XMLHttpRequest();
request1.open("GET",
"http://api.weatherapi.com/v1/current.json?key=5fcff2cd824f47eeb22165733222102&q=karachi&aqi=no");
request1.send();
request1.onload = () => {
  if (request1.status === 200){
      var karachidata = JSON.parse(request1.response);
      var karachiC = karachidata.current.temp_c;
      var karachiMarker = new L.Marker([,], {
                    icon: new L.DivIcon({
                    className: 'tempIcon',
                    html: "<div>"+karachiC+"</div>"

                        })
                    }).addTo(map);

  }
  else {
      console.log("Error:"+ request1.status);
  }
};
},1000);
