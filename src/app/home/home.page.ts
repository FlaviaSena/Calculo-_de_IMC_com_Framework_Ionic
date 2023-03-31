import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  calculo: any;

  constructor(private alerta: AlertController, private nav: NavController) { 
    this.calculo={
    peso:0,
    altura:0,
    total:0,
    situacao:"",
    }
    
  }

  async primeira() {
    console.log(this.calculo);
    let mensagem= await this.alerta.create({
      header: 'Atenção',
      message: 'Seu peso é:  ' + this.calculo.peso +'\nSua altura é:  '+this.calculo.altura,
      
  
      buttons:[
      {text:'Ok',
      handler: () =>{
        console.log("O Botão de 'Ok' foi acionado!");
        this.enviar();
      }
      },
      {text:'Cancelar',
      handler: () =>{
        console.log("O Botão de 'Cancelar' foi acionado!");
        
      }},
  
      ]
    });
    
    await mensagem.present();
    
  }
  enviar(){
    this.nav.navigateForward(["resultado",{
      "pesoPessoa": this.calculo.peso,
      "alturaPessoa": this.calculo.altura
    }]);
   }
}
