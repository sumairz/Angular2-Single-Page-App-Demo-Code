import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    moduleId: module.id,
    templateUrl: '../../templates/home.html',
    providers: [ HomeService ]
})
export class HomeComponent implements OnInit {
    private content: string[];
    private specialMessage: string[];
    title: string;

    constructor(private _hs: HomeService, private _route: ActivatedRoute) {}

    ngOnInit() { 
        this.content = this._hs.getContent();
        this.specialMessage = this._hs.getSpecialMessage();
        this.title = this._route.snapshot.data['title'];   
    }
}