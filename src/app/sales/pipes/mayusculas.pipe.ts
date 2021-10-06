import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
    transform(value: string, toUpperCase: boolean = true): string {
        return (toUpperCase) ? value.toUpperCase() : value.toLowerCase();
    }
}