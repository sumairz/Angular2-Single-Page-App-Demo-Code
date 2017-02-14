import { NgModule } from '@angular/core';

import { UserDetailComponent }   from './user-detail.component';
import { UsersService } from '../users.services';

@NgModule({
    imports:      [],
    exports:      [],
    declarations: [ UserDetailComponent ],
    providers:    [ UsersService ],
})
export class UserDetailModule { }
