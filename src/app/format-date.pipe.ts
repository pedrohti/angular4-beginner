import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, locale: 'pt-BR'): any {
    let dateArray = value.split('-');
    
    if (value.length < 10) {
      return value;
    } else if (dateArray.length != 3) {
      return value;
    }    
    
    let date = new Date(dateArray[0], dateArray[1]-1, dateArray[2]);
    return Intl.DateTimeFormat(locale).format(date);
  }

}
