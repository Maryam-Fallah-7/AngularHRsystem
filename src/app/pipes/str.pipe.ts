import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'str'
})
export class StrPipe implements PipeTransform {

  transform(value: string): string {
    let value2=value.substr(0,5);
    return value2;
  }

}
