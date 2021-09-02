import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TaxFormComponent} from './tax-form.component';
import {Product, ProductType} from '../../shared/model/product';
import {TaxService} from '../../shared/services/tax.service';
import {StoreService} from '../../shared/services/store.service';


describe('TaxFormComponent', () => {
  let component: TaxFormComponent;
  let fixture: ComponentFixture<TaxFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('tax list component', () => {
  let component: TaxFormComponent;
  const store: StoreService = new StoreService();
  const taxService: TaxService = new TaxService(store);
  let productTypes: ProductType[];

  beforeEach(() => {
    component = new TaxFormComponent(taxService, store);
  });

  it('should hold a hardcoded list of 4 product types', () => {
    component.productTypes$.subscribe((types) => productTypes = types);
    expect(productTypes.length).toBe(4);
  });
  it('should trigger an event on "onCalculate"', () => {
    component.onCalculate();
  });
});
