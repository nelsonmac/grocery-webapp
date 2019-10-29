import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UomDetailsComponent } from './uom-details.component';

describe('UomDetailsComponent', () => {
  let component: UomDetailsComponent;
  let fixture: ComponentFixture<UomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
