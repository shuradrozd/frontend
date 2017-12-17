import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findBooksFilter'
})
export class FindBooksFilterPipe implements PipeTransform {

  transform(bookList, searchString: string, searchFieldName: string) {
    // if (bookList.length === 0 || searchString.trim() === '' ) {
    //   return bookList;
    // }
    if (searchString.trim() !== '') {
      return bookList.filter((book) => (book[searchFieldName].toLowerCase().indexOf(searchString.toLowerCase()) !== -1));
    }
  }

}



