import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: '../../templates/users.html'
})
export class UsersComponent implements OnInit {
    title: string;
    
    constructor(private _route: ActivatedRoute) { }

    ngOnInit() { 
        this.title = this._route.snapshot.data['title'];   
    }
}