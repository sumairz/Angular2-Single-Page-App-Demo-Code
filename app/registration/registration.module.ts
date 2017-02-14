import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent }   from './registration.component';

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule ],
    exports: [],
    declarations: [RegistrationComponent],
    providers: [],
})
export class RegistrationModule { }
