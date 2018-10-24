import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddconstrutoraPage } from '../addconstrutora/addconstrutora';
import { ChamadosPage } from '../chamados/chamados';
import { UploadPage } from '../upload/upload';


@Component({
  templateUrl: 'empreendimentos.html',
})
export class EmpreendimentosPage {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams) {
}

navCriarEmpreendimento(){
  this.navCtrl.push(AddconstrutoraPage);
}
irChamados(){
  this.navCtrl.setRoot(ChamadosPage);
}

}