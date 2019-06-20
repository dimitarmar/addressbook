import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AddressbookService} from './addressbook/addressbook.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, AddressbookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
