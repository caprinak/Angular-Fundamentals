import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanOperatorComponent } from './scan-operator.component';

describe('ScanOperatorComponent', () => {
  let component: ScanOperatorComponent;
  let fixture: ComponentFixture<ScanOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
