import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPatient'
})
export class SearchPatientPipe implements PipeTransform {

  transform(malist: any, input: string): any {
    
    if (input) {
      input = input.toLowerCase();
      return malist.filter(function (product: any) {
        return product.NomPatient.toLowerCase().indexOf(input) > -1;
      });
    }
    return malist;
  }

}
