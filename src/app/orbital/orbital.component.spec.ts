import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitalComponent } from './orbital.component';

describe('OrbitalComponent', () => {
  let component: OrbitalComponent;
  let fixture: ComponentFixture<OrbitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
