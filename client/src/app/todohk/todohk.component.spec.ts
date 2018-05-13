import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodohkComponent } from './todohk.component';
import {Routes} from "@angular/router";
import {IndexComponent} from "../index/index.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('TodohkComponent', () => {

    // const rootRouterConfighk: Routes = [
    //     //{path: '', redirectTo: 'index', pathMatch: 'full'},
    //     {path: 'hkhk', component: TodohkComponent},
    // ];



  let component: TodohkComponent;
  let fixture: ComponentFixture<TodohkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodohkComponent ]
        // ,
        // imports: [
        //     RouterTestingModule.withRoutes(rootRouterConfighk)
        // ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodohkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
