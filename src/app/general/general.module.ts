import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { FindBooksFilterPipe } from './pipes/find-books-filter.pipe';

@NgModule({

  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  // declarations: [FindBooksFilterPipe],

})
export class GeneralModule { }
