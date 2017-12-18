import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EditbookComponent } from './editbook/editbook.component';
import { ListbookComponent } from './listbook/listbook.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListbookComponent
  },
  {
    path: 'editbook',
    component: EditbookComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EditbookComponent,
    ListbookComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
