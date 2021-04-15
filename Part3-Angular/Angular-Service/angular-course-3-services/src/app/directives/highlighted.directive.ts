import {Directive, EventEmitter, HostBinding, HostListener, Input, Output, Host} from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl'
})
export class HighlightedDirective {

    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighlight = new EventEmitter();

    // constructor() {
    //     console.log('Directive created..');
    // }
    constructor(@Host() private coursesService: CoursesService) {

        console.log('coursesService highlighted ' + this.coursesService.id);

    }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    @HostListener('mouseover', ['$event'])
    mouseOver($event) {

        console.log($event);

        this.isHighlighted = true;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    mouseLeave() {
        this.isHighlighted = false;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    toggle() {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }



}
