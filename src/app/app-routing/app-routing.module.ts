import { NgModule } from '@angular/core';

import {HomePageComponent} from '../home-page/home-page.component';
import {AddBookComponent} from '../add-book/add-book.component';
import {SearchBookComponent} from '../search-book/search-book.component';
import {Routes, RouterModule} from '@angular/router';
import {PageBookComponent} from '../page-book/page-book.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {AuthGuard} from '../auth-guard.service';

const appRoutes: Routes = [
  { path: 'addBook', component: AddBookComponent, canActivate: [AuthGuard]},
  { path: 'books', component: SearchBookComponent, children: [
    { path: ':id', component: PageBookComponent}
  ], canActivate: [AuthGuard]},
  { path: '', component: HomePageComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
