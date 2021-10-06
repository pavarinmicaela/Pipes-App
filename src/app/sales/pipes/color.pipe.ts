import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'color'
})

export class ColorPipe implements PipeTransform {
    transform(value: number): string {
        switch(value) {
            case 0: {
                return 'Azul';
                break;
            }
            case 1: {
                return 'Negro';
                break;
            }
            case 2: {
                return 'Rojo';
                break;
            }
            case 3: {
                return 'Verde';
                break;
            }
        }
        throw new Error('Invalid value for color');
    }
}