import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ChamadosPage } from '../pages/chamados/chamados';
import { EmpreendimentosPage } from '../pages/empreendimentos/empreendimentos';
import { ProblemasPage } from '../pages/problemas/problemas';
import { PronovaPage } from '../pages/pronova/pronova';
import { ProgerenciarsubPage } from '../pages/progerenciarsub/progerenciarsub';
import { ProgerenciarproPage } from '../pages/progerenciarpro/progerenciarpro';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ChamadosPage;

  pages: Array<{
    title: string,
    component: any,
    icon: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen)
              {this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Problemas', component: ProblemasPage, icon: 'alert'},
      { title: 'Cadastrar nova categoria', component: PronovaPage, icon: 'return-right'},
      { title: 'Gerenciar subcategorias', component: ProgerenciarsubPage, icon: 'return-right'},
      { title: 'Gerenciar problemas', component: ProgerenciarproPage, icon: 'return-right'},
      { title: 'Chamados', component: ChamadosPage, icon: 'chatboxes'},
      { title: 'Empreendimentos', component: EmpreendimentosPage, icon: 'home'},
    ];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}