import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(date: string): string {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }
}
