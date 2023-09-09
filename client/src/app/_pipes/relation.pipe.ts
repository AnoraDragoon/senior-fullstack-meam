import { Pipe, PipeTransform } from '@angular/core';
import { ClubUser } from '@app/_models';

@Pipe({
    name: 'relation'
})
export class RelationPipe implements PipeTransform {

    transform(value: ClubUser[], arg: string): ClubUser | null {
        return value.find(item => item.username = arg);
    }

}
