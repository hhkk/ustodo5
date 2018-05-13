import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todohk',
    templateUrl: './todohk.component.html',
    styleUrls: ['./todohk.component.css']
})
export class TodohkComponent implements OnInit {

    todoHkcomponents: Array<any>;

    constructor() {
        console.log ("hi hk from /todohk.component.ts constructor");
    }



    ngOnInit() {
        console.log ("hi hk from /todohk.component.ts ngOnInit");
        this.todoHkcomponents = new Array(4)
        this.todoHkcomponents[0] = "hk0";
        this.todoHkcomponents[1] = "hk1";
    }

}
