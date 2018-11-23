import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastrarchamadoPage } from '../cadastrarchamado/cadastrarchamado';

@Component({
  selector: 'page-chamados',
  templateUrl: 'chamados.html',
})
export class ChamadosPage {

  public chamado = {
    
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  cadastrarchamado(){
    this.navCtrl.push(CadastrarchamadoPage);
  }

}
