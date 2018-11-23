import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersChamadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersChamadoProvider {

  constructor(private _http: HttpClient) {
    console.log('Hello ProvidersChamadoProvider Provider');
  }

  criar(chamado) {
    const url = ``;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    this._http.post(url, chamado, httpOptions);
  }
 
}
