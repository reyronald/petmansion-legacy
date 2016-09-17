import { Pipe, PipeTransform } from '@angular/core';
/*
 * Formats number as dominican currency.
 * Usage:
 *   value | dominicanCurrency
 * Example:
 *   {{ 2 |  dominicanCurrency}}
 *   formats to: RD$2.00
*/
@Pipe({name: 'dominicanCurrency'})
export class DominicanCurrencyPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    return 'RD$' + value.toFixed(2).replace(/./g, (c, i, a) =>
      i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
  }
}
