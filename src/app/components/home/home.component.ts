import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  host:{
    class: 'conteudo-app'
  },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getLocation();
  }

  // getLocation()
  // {
  //   if (navigator.geolocation)
  //       navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
  //   else
  //     console.log("O seu navegador não suporta Geolocalização.")
    
  // }

  // showPosition(position: any)
  // {
  //   console.log("Latitude: " + position.coords.latitude +
  //               "<br>Longitude: " + position.coords.longitude)
  // }

//   showPosition(position: any)
//   {
//     var latlon = position.coords.latitude + "," + position.coords.longitude;
//     console.log(position);
//  //   navigator.geolocation.nsIDOMGeoPositionAddress()

//     // var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
//     // document.getElementById("imgTuristaLoc").setAttribute('src', img_url);
//   }

  // showError(error: any)
  // {
  // switch(error.code)
  //   {
  //   case error.PERMISSION_DENIED:
  //     console.log("Usuário rejeitou a solicitação de Geolocalização.")
  //     break;
  //   case error.POSITION_UNAVAILABLE:
  //     console.log("Localização indisponível.")
  //     break;
  //   case error.TIMEOUT:
  //     console.log("A requisição expirou.")
  //     break;
  //   case error.UNKNOWN_ERROR:
  //     console.log("Algum erro desconhecido aconteceu.")
  //     break;
  //   }
  // }

//   var slide_wrp = ".side-menu-wrapper"; //Menu Wrapper
// var open_button = ".menu-open"; //Menu Open Button
// var close_button = ".menu-close"; //Menu Close Button
// var overlay = ".menu-overlay"; //Overlay

// $(slide_wrp).hide().css({ "right": -$(slide_wrp).outerWidth() + 'px' }).delay(50).queue(function () { $(slide_wrp).show() });

// $(open_button).click(function (e) {
//   e.preventDefault();
//   $(slide_wrp).css({ "right": "0px" });
//   setTimeout(function () {
//     $(slide_wrp).addClass('active');
//   }, 50);
//   $(overlay).css({ "opacity": "1", "width": "100%" });
// });

// $(close_button).click(function (e) {
//   e.preventDefault();
//   $(slide_wrp).css({ "right": -$(slide_wrp).outerWidth() + 'px' });
//   setTimeout(function () {
//     $(slide_wrp).removeClass('active');
//   }, 50);
//   $(overlay).css({ "opacity": "0", "width": "0" });
// });

// $(document).on('click', function (e) {
//   if (!e.target.closest(slide_wrp) && $(slide_wrp).hasClass("active")) {
//     $(slide_wrp).css({ "right": -$(slide_wrp).outerWidth() + 'px' }).removeClass('active');
//     $(overlay).css({ "opacity": "0", "width": "0" });
//   }
// });

}
