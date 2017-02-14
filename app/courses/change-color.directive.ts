import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: 'changeColor',
    host: {
        '(click)': 'onClick()',
        '(blur)': 'onMouseOut()'
    }
})

export class ChangeColorDirective {
    
    constructor(private _el: ElementRef, private _renderer: Renderer) { }

    onClick() {        
        console.log("here");
        this._renderer.setElementStyle(this._el.nativeElement,'color','red');
    }

    onMouseOut() {
        this._renderer.setElementStyle(this._el.nativeElement,'color','black');
    }

}