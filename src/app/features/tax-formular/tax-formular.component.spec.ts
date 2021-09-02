import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFormularComponent } from './tax-formular.component';

describe('TaxFormularComponent', () => {
  let component: TaxFormularComponent;
  let fixture: ComponentFixture<TaxFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
