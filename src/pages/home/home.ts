import { Tab1Page } from './../tab1/tab1';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1 = Tab1Page // if this is not specified, it will put opacity 0 on .tabbar

  constructor(public navCtrl: NavController) {

  }

}
