import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import {AppComponent} from './app.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {UserDetailComponent} from './components/user/user-detail/user-detail.component';
import {UserComponent} from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    UserDetailComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
