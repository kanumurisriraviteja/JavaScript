import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'vowelpipe'
    //, pure:false this is impure pipe
})

export class VowelPipe implements PipeTransform {
    transform(value: any, index: number) {
        return `${value} has vowels ${this.getVowelCount(value)} and the array index is ${index}` ;
    }
    getVowelCount(ip: string): number {

        let count = 0;
        let sing = '';
        const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

        for (let i = 0; i < ip.length; i++) {
            sing = ip[i];
            if (vowels.indexOf(sing) !== -1) {
                        count++;
            }
        }
        return count;
    }
}
