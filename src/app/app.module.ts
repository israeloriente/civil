import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChamadosPage } from '../pages/chamados/chamados';
import { EmpreendimentosPage } from '../pages/empreendimentos/empreendimentos';
import { ProblemasPage } from '../pages/problemas/problemas';
import { PronovaPage } from '../pages/pronova/pronova';
import { ProgerenciarsubPage } from '../pages/progerenciarsub/progerenciarsub';
import { ProgerenciarproPage } from '../pages/progerenciarpro/progerenciarpro';
import { GerenciarblocosPage } from '../pages/gerenciarblocos/gerenciarblocos';
import { GerenciarapartamentosPage } from '../pages/gerenciarapartamentos/gerenciarapartamentos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChamadosPage,
    EmpreendimentosPage,
    ProblemasPage,
    PronovaPage,
    ProgerenciarsubPage,
    ProgerenciarproPage,
    GerenciarblocosPage,
    GerenciarapartamentosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChamadosPage,
    EmpreendimentosPage,
    ProblemasPage,
    PronovaPage,
    ProgerenciarsubPage,
    ProgerenciarproPage,
    GerenciarblocosPage,
    GerenciarapartamentosPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
