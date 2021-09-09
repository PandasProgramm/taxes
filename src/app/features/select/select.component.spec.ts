import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';

// @ts-ignore
describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectComponent ]
    })
    .compileComponents();
  });

  // @ts-ignore
  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
