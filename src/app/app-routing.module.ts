import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserDetailComponent} from './components/users/user-detail/user-detail.component';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
