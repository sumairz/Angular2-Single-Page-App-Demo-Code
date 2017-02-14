import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './shared/header.component';
import { SideMenuComponent } from './shared/side-menu.component';
import { FooterComponent } from './shared/footer.component';
import { HomeModule } from './home/home.module';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './404/not-found.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

declare var $: any; // declaring $ sign to use as JQUERY

/* 
   Define component routes in IMPORTS before the main 
   routes where you define NOT FOUND route so that it 
   will identify component based routes
*/
import { routing } from './app.routing';
import { homeRoutes } from './home/home.routing'; 
import { UsersRoutes } from './users/users.routing';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HomeModule, // included HomeModule in imports so that all dependencies can be accessed inside Home Module
                  homeRoutes, 
                  UsersRoutes,
                  routing 
                ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  SideMenuComponent,
                  FooterComponent,
                  RegistrationComponent,
                  UsersComponent,
                  UserDetailComponent,
                  NotFoundComponent
                ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
