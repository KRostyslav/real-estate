import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoBlockComponent } from './main-info-block.component';

describe('MainInfoBlockComponent', () => {
  let component: MainInfoBlockComponent;
  let fixture: ComponentFixture<MainInfoBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInfoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
