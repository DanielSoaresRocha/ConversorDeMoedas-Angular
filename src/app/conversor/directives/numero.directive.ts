import {
  Directive,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[numero]'
})
export class NumeroDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  onKeUp ($event: any) {
    let valor = $event.target.value
    let posDecimais = valor.indexOf('.')

    valor = valor.replace(/[\D]/g, ''); // remover tudo que não for número de 0-9

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais)
    }

    $event.target.value = valor
  }

}
