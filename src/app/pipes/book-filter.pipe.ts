import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(bookList, searchString: string, searchFieldName: string) {
    if (bookList.length === 0 || searchString.trim() === '' ) {
      return bookList;
    }
    return bookList.filter((book) => (book[searchFieldName].toLowerCase().indexOf(searchString.toLowerCase()) !== -1));
  }

}
