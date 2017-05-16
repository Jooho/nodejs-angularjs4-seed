import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TaskComponent} from "./components/tasks/tasks.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule ,HttpModule, FormsModule],
  declarations: [ AppComponent , TaskComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
