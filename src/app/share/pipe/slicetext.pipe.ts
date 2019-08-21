import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicetext'
})
export class SlicetextPipe implements PipeTransform {

  transform(value: string, length: number): any {
    if (value && value.length > length) {
      return value.substr(0, length) + '...';
    }
    return value;
  }

}
