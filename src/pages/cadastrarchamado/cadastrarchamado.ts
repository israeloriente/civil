import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChamadosPage } from '../chamados/chamados';


@Component({
  selector: 'page-cadastrarchamado',
  templateUrl: 'cadastrarchamado.html',
})
export class CadastrarchamadoPage {

  status: string = "aberto";
  Empreendimento: string = "";

  constructor(public navCtrl: NavController,
              ) {
  }

  navVoltarChamados(){
    this.navCtrl.setRoot(ChamadosPage);
  }


}
