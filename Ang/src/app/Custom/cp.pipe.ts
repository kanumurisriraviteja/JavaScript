import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'vowelpipe'
})

export class cpPipe implements PipeTransform {
    transform(value: any, index: number) {
        return `${value} has vowels ${this.getVowelCount(value)} and the array index is ${index}` ;
    }
    getVowelCount(ip: string): number {

        let count = 0;
        let sing = '';
        const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

        for (let index = 0; index < ip.length; index++) {
            sing = ip[index];
            if (vowels.indexOf(sing) != -1) {
              count++;
            }
        }
        return count;
    }
}
