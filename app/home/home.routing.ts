/* 
    - This is component based routing
    
    - We can define all the routes in a single file or in each 
      component and then define each component router in the 
      main component module (app.module.ts)
*/
import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRoutes = RouterModule.forRoot([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: {title: "Home Page"}  },
]);