import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserDetailComponent} from './components/user/user-detail/user-detail.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
