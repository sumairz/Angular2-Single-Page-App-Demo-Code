import { Component, NgModule ,OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <p>{{title}}</p>  
        
        <ul>
            <li *ngFor="let course of courses" changeColor>
                {{course}}
            </li>
        </ul>
    `,
    providers: [CoursesService]   
})

export class CoursesComponent {
    title: string = "These are the titles of all courses";
    courses;

    //someValue = "Hello"; // <input [value]="someValue"> // Use this style for property binding in input elements

    //isClicked = true; //<button class="someCSS" [class.clicked]='isClicked' [style.backgroundColor]='isClicked? "blue" : "black"'>Submit</button>
    
    
    constructor(private coursesService: CoursesService) {}


    /*
    <div (click)="onDivClick()"> 
            <button (click)="onClick($event)">Submit</button>
        </div>

    onDivClick() {
        console.log("Div Clicked");
    }
    
    // $event is built in angular to get the event object
    onClick($event) {
        //$event.stopPropagation();
        console.log($event);
    }
    */


    /*
    * Return the list of courses
    * @param: NONE
    *
    * @return
    *   - String array
    */
    getCourses(): string[] {
        return this.coursesService.getCourses();
    }

    /*
    * Run on component initializaation using the OnInit Component`
    */
    ngOnInit(): void {
        this.courses = this.getCourses();
    }
 }
