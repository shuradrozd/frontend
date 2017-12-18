import { NgModule } from '@angular/core';

// import {AddBookComponent} from '../add-book/add-book.component';

import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from '../general/components/not-found/not-found.component';
import {AuthGuard} from '../auth-guard.service';

const appRoutes: Routes = [
  // { path: 'addBook', component: AddBookComponent, canActivate: [AuthGuard]},
  // { path: 'books', component: SearchBookComponent, children: [
  //   { path: ':id', component: PageBookComponent}
  // ], canActivate: [AuthGuard]},
  // { path: '', component: HomePageComponent},
  // {path: 'not-found', component: NotFoundComponent},
  // {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
