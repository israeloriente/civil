import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChamadosPage } from '../chamados/chamados';
import { ProvidersChamadoProvider } from '../../providers/providers-chamado/providers-chamado';


@Component({
  selector: 'page-cadastrarchamado',
  templateUrl: 'cadastrarchamado.html',
})
export class CadastrarchamadoPage {

  // Corrigir erros aqui
  image1 = '../../assets/imgs/upload.png'
  status: string = "aberto";
  public chamado = {
    status: '',
    nome: '',
    cpf: '',
    email: '',
    telefoneFixo: '',
    telefoneCelular: '',
    empreendimento: '',
    bloco: '',
    apartamento: '',
    envolveOutroApartamento: false,
    image1: '',
    image2: '../../assets/imgs/upload.png',
    image3: '../../assets/imgs/upload.png',
    problema: '',
    descricaoProblema: ''
  }

  constructor(
    public navCtrl: NavController,
    ) {
  }

  cadastrarChamado(){
    console.log(this.chamado);
  }

  definirImagens() {
    this.image1 = this.chamado.image1;
  }
}
