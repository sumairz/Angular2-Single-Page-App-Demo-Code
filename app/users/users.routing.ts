import { Router, RouterModule } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';

export const UsersRoutes = RouterModule.forRoot([
    { path: 'user/:id', component: UserDetailComponent },
]);