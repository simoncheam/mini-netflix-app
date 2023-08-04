import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(
    private navCtrl: NavController,
  ) {}

  goBack() {
    this.navCtrl.navigateBack('/'); // using ionic nav controller
  }
}
