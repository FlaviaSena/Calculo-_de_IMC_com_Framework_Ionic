import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  situacao?: string;
  constructor(private rota: ActivatedRoute) { }

  ngOnInit() {
    let peso = Number(this.rota.snapshot.params['pesoPessoa']);
    let altura = Number(this.rota.snapshot.params['alturaPessoa']);

    let imc = (peso / (altura*altura));

    
    if(imc <= 18.5){
      this.situacao = "Abaixo do Peso";
    } else if(imc>=15.5 && imc < 25){
      this.situacao = "Peso normal";
    } else if(imc >=25 && imc < 30){
       this.situacao = "Acima do peso";
     }else{ 
       this.situacao="Obesidade";
     }
     
    console.log("Situação: "+this.situacao);
    console.log(imc);
  }

}
