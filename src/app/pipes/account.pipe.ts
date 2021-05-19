import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'account'
})
export class AccountPipe implements PipeTransform {
  transform(value: string, type?: string): string {
      if (value) {
        // OFUSCACIÓN
        // let newValue = '';

        // newValue += '**';
        // newValue += value.slice(-4);

        // SEPARACIÓN IBAN
        let newValue = '';
        if (value.length === 24) {
          newValue += value.substring(0, 4);
          newValue += ' ';
          newValue += value.substring(4, 8);
          newValue += ' ';
          newValue += value.substring(8, 12);
          newValue += ' ';
          newValue += value.substring(12, 16);
          newValue += ' ';
          newValue += value.substring(16, 20);
          newValue += ' ';
          newValue += value.substring(20, 24);
        } else if (value.length === 16) {
          newValue += value.substring(0, 4);
          newValue += ' ';
          newValue += value.substring(4, 8);
          newValue += ' ';
          newValue += value.substring(8, 12);
          newValue += ' ';
          newValue += value.substring(12, 16);
        } else {
          newValue = value;
        }

        return newValue;
      }
  }
}
