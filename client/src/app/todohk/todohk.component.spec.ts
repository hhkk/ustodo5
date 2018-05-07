import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodohkComponent } from './todohk.component';

describe('TodohkComponent', () => {




  let component: TodohkComponent;
  let fixture: ComponentFixture<TodohkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodohkComponent ]
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
