import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';



@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  referencia;
  arquivo;
  constructor(@Inject(FirebaseApp) fb: any) {
    this.referencia = fb.storage().ref();    
  }

  baixarArquivo(nome: string){
    let caminho = this.referencia.child('pasta/'+nome);
    caminho.getDownloadURL().then(url => {
       console.log(url); // AQUI VOCÊ JÁ TEM O ARQUIVO
    });
   }

   atualizaArquivo(event){
    this.arquivo = event.srcElement.files[0];
  }
   enviarArquivo(dir, arquivo){
      let caminho = this.referencia.child('dir/'+this.arquivo.name);
      let tarefa = caminho.put(this.arquivo);
      tarefa.on('state_changed', (snapshot)=>{
         // Acompanha os estados do upload (progresso, pausado,...)
      }, error => {
         // Tratar possíveis erros
      }, () => {
         // Função de retorno quando o upload estiver completo  
         console.log(tarefa.snapshot.downloadURL);
      });
   }
}
