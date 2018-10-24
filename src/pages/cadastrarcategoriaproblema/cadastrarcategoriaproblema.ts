import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProblemasPage } from '../problemas/problemas';

/**
 * Generated class for the CadastrarcategoriaproblemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrarcategoriaproblema',
  templateUrl: 'cadastrarcategoriaproblema.html',
})
export class CadastrarcategoriaproblemaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  voltarproblemas(){
    this.navCtrl.setRoot(ProblemasPage);
  }

}
