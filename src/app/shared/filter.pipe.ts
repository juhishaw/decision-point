import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], param: string): any {
    console.log('adgjagdjagjd')
    // param = param.toLowerCase();

    // if (items) {
    //   return items.filter((item, index) => {
    //     const find = item.label.toLowerCase().indexOf(param);
    //     return find === -1 ? false : true;
    //   });
    // }
  }
}
