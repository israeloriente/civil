import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmpreendimentosPage } from '../empreendimentos/empreendimentos';


@Component({
  selector: 'page-addconstrutora',
  templateUrl: 'addconstrutora.html',
})
export class AddconstrutoraPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  voltarEmpreendimentos(){
    this.navCtrl.setRoot(EmpreendimentosPage);
  }

}
