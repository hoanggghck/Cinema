import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBapNuocComponent } from './combo-bap-nuoc.component';

describe('ComboBapNuocComponent', () => {
  let component: ComboBapNuocComponent;
  let fixture: ComponentFixture<ComboBapNuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboBapNuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboBapNuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
