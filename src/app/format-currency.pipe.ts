import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //decorator
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, locale: 'pt-BR'): any {
    /* return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value); */
    return new Intl.NumberFormat(locale).format(value);
  }

}
