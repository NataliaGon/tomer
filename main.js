//map
// function initMap() {
//     var uluru = {lat: 32.0746012, lng: 34.7823722};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 17,
//       center: uluru
//     });
//     var marker = new google.maps.Marker({
//       position: uluru,
//       map: map
      // icon: {
      //   document.getElementById,
      //   scaledSize: new google.maps.Size(96, 96)
      // }
//     });
// }

//arrival

var busBtn = document.getElementById('bus');
var carBtn = document.getElementById('car');
var busContent = document.querySelectorAll('.info-for-bus');
var carContent = document.querySelectorAll('.info-for-car');
var busBlack =document.getElementById('bus-black');
var busGray=document.getElementById('bus-gray');
var carBlack=document.getElementById('car-black');
var carGray=document.getElementById('car-gray');

busBtn.addEventListener('click', function () {

  busBtn.style.color = "black";
  carBtn.style.color = "#D8D8D8";
  busBtn.classList.remove("border-gray");
  busBtn.classList.add("border-black");
  busGray.style.display = "none";
  busBlack.style.display = "block";
  carBtn.classList.remove("border-black");
  carBtn.classList.add("border-gray");
  carGray.style.display = "block";
  carBlack.style.display = "none";
  
    for (var i of busContent){
     i.style.display = "block"
    }
    for (var i of carContent){
      i.style.display = "none"
     } 
});


carBtn.addEventListener('click', function () {
  busBtn.style.color = "#D8D8D8";
  carBtn.style.color = "black";
  carBtn.classList.remove("border-gray");
  carBtn.classList.add("border-black");
  carGray.style.display = "none";
  carBlack.style.display = "block";
  busBtn.classList.remove("border-black");
  busBtn.classList.add("border-gray");
  busGray.style.display = "block";
  busBlack.style.display = "none";

   for (var i of busContent){
    i.style.display = "none"
   }
   for (var i of carContent){
     i.style.display = "block"
    } 
});

//fonts-animation

