import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  tela: string = '';
  operador: string = '';
  valorAnterior: number | null = null;

  adicionarValor(valor: string){
    if(valor === '.' && this.tela.includes('.')){
      return;
    }
    this.tela += valor;
  }

  operar(operador: string){
    if(this.tela !== ''){
      this.valorAnterior = parseFloat(this.tela);
      this.operador = operador;
      this.tela = '';
    }
  }

  calcular(){
    if(this.valorAnterior !== null && this.tela !== ''){
      const valorAtual = parseFloat(this.tela);
      switch(this.operador){
        case '+':
          this.tela = (this.valorAnterior + valorAtual).toString();
          break;
        case '-':
          this.tela = (this.valorAnterior - valorAtual).toString();
          break;
        case '*':
          this.tela = (this.valorAnterior * valorAtual).toString();
          break;
        case '/':
          this.tela = (this.valorAnterior / valorAtual).toString();
          break;
      }
      this.valorAnterior = null;
      this.operador = '';
    }
  }

  limpar(){
    this.tela = '';
    this.valorAnterior = null;
    this.operador = '';
  }

  apagarNumero(){
    if(this.tela.length > 0){
      this.tela = this.tela.slice(0, -1);
    }
  }
}
