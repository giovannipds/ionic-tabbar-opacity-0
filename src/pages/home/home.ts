import { Tab1Page } from './../tab1/tab1';
import { Tab2Page } from './../tab2/tab2';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // When no tabs are specified, .tabbar will be opacity 0
  tab1 = Tab1Page
  tab2 = Tab2Page

  constructor(public navCtrl: NavController) {

  }

}
