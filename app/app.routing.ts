import { Router, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './404/not-found.component';


export const routing = RouterModule.forRoot([
    { path: 'registration', component: RegistrationComponent, data: {title: "Registration Page"} },
    { path: 'users', component: UsersComponent, data: {title: "Users Page"} },    
    { path: '**', component: NotFoundComponent, data: {title: "404 - Not Found"} },    
]);