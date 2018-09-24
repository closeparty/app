import {Directive, Renderer, ElementRef} from '@angular/core';
import * as waves from 'node-waves';

@Directive({
    selector: '[waves-button]'
})
export class WavesButtonEffectDirective {
    constructor(public element: ElementRef, public renderer: Renderer) {
        waves.attach(element.nativeElement, null);   

        var config = {
            duration: 500,
            delay: 200
        };

        waves.init(config);
    }
}