import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenContent'
})
export class ShortenContentPipe implements PipeTransform {

  transform(value: string, numberOfCharachters?:number): string {
    if(value.length < (numberOfCharachters ?? 250)){
      return value;
    } else {
      return value.slice(0,(numberOfCharachters ?? 250)) + "..."
    }
    
  }

}
