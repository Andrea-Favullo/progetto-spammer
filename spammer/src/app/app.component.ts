import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();

  onclick(testo : HTMLInputElement, numero : HTMLInputElement){

    //variabili che immagazinano il valore dei parametri
    let frase = testo.value;
    let num = Number(numero.value);

    console.log(`dati ricevuti: ${frase} - ${num}`);

    //ciclo che inserisce la frase num volte nella lista
    for(let i:number=0; i<num; i++){
      this.articles.push(frase);
    }

  }
}
