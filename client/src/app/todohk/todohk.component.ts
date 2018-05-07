import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todohk',
  templateUrl: './todohk.component.html',
  styleUrls: ['./todohk.component.css']
})
export class TodohkComponent implements OnInit {

  constructor() { }



  ngOnInit() {
    console.log ("hi hk from /todohk.component.ts");
  }

}
