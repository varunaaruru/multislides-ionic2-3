import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 0,
			slidesPerView: 1.1,
			direction: 'horizontal',
			parallax: true,
			freeMode: false,
			fade: {
				crossFade: true,
			},
			roundLengths: true,
			effect: 'slide' //use cube,flip,coverflow or fade
        };
}
