import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';   


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChamadosPage } from '../pages/chamados/chamados';
import { EmpreendimentosPage } from '../pages/empreendimentos/empreendimentos';
import { ProblemasPage } from '../pages/problemas/problemas';
import { ProgerenciarsubPage } from '../pages/progerenciarsub/progerenciarsub';
import { ProgerenciarproPage } from '../pages/progerenciarpro/progerenciarpro';
import { GerenciarblocosPage } from '../pages/gerenciarblocos/gerenciarblocos';
import { GerenciarapartamentosPage } from '../pages/gerenciarapartamentos/gerenciarapartamentos';
import { AddconstrutoraPage } from '../pages/addconstrutora/addconstrutora';
import { CadastrarcategoriaproblemaPage } from '../pages/cadastrarcategoriaproblema/cadastrarcategoriaproblema';
import { CadastrarchamadoPage } from '../pages/cadastrarchamado/cadastrarchamado';
import { TestePage } from '../pages/teste/teste';


var firebaseConfig = {
  apiKey: "AIzaSyAdZ0qiKb3o2rjFL-u3G11A9tZ4q-uRuh8",
  authDomain: "civil-5b135.firebaseapp.com",
  databaseURL: "https://civil-5b135.firebaseio.com",
  projectId: "civil-5b135",
  storageBucket: "civil-5b135.appspot.com",
  messagingSenderId: "1031719893722"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChamadosPage,
    EmpreendimentosPage,
    ProblemasPage,
    ProgerenciarsubPage,
    ProgerenciarproPage,
    GerenciarblocosPage,
    GerenciarapartamentosPage,
    AddconstrutoraPage,
    CadastrarcategoriaproblemaPage,
    CadastrarchamadoPage,
    TestePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChamadosPage,
    EmpreendimentosPage,
    ProblemasPage,
    ProgerenciarsubPage,
    ProgerenciarproPage,
    GerenciarblocosPage,
    GerenciarapartamentosPage,
    AddconstrutoraPage,
    CadastrarcategoriaproblemaPage,
    CadastrarchamadoPage,
    TestePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
