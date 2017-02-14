import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent }   from './courses.component';
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [CoursesComponent, ChangeColorDirective],
    bootstrap:    [ CoursesComponent ]
})

export class CoursesModule { }
