import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent }   from './home.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ],
  exports:      [ HomeComponent] // We are exporting this component so that app component 
                                 // can use it with all the dependencies
})
export class HomeModule { }
