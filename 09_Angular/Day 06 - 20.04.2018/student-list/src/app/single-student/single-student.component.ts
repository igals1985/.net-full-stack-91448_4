import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-single-student',
    templateUrl: './single-student.component.html',
    styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnChanges, OnInit{

    @Input() studentName: string;
    title: string = "Student name is:";

    //מבחינת סדר - נועד לבצע איתחול משתנים ולא עבודה לוגית
    //Called once
    constructor() {
        console.log(`constructor ==> studentName:${this.studentName}, title:${this.title}`);
    }


    // Initialize the component after Angular first displays the @input() properties.
    // Called once, after the first ngOnChanges().
    ngOnInit() {
        console.log(`ngOnInit ==> studentName:${this.studentName}, title:${this.title}`);

    }


    // Respond when Angular (re)sets data-bound @input() properties.
    // The method receives a SimpleChanges object of current and previous property values.
    // Called before ngOnInit() and whenever one or more data-bound @input properties change.
    public ngOnChanges(changes: SimpleChanges): void {
        console.log(`ngOnChanges ==> ${JSON.stringify(changes)}`);
    }



    // Detect and act upon changes that Angular can't or won't detect on its own.
    // Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
    ngDoCheck(): void {
        console.log("ngDoCheck");
    }

    // Respond after Angular projects external content into the component's view.
    // Called once after the first ngDoCheck().
    // A component-only hook.
    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }

    // Respond after Angular checks the content projected into the component.
    // Called after the ngAfterContentInit() and every subsequent ngDoCheck().
    // A component-only hook.
    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }

    // Respond after Angular initializes the component's views and child views.
    // Called once after the first ngAfterContentChecked().
    // A component-only hook.
    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }

    // Respond after Angular checks the component's views and child views.
    // Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().
    // A component-only hook.
    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }

    // Cleanup just before Angular destroys the directive/component.
    // Unsubscribe Observables and detach event handlers to avoid memory leaks.
    // Called just before Angular destroys the directive/component. 
    ngOnDestroy(): void {
        console.log("ngOnDestroy");


}
