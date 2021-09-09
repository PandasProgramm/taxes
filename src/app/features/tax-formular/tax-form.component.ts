import {Component, OnInit} from '@angular/core';
import {Product, ProductType} from '../../shared/model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TaxService} from '../../shared/services/tax.service';
import {StoreService} from '../../shared/services/store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.less']
})
export class TaxFormComponent implements OnInit {

  productTypes$: Observable<ProductType[]>;
  taxForm: FormGroup;
  default = 'select value';
  checked = false;
  selectedType: string;

  constructor(private taxService: TaxService, private store: StoreService) {
    this.productTypes$ = this.store.getAllProductTypes();
  }

  ngOnInit(): void {
    this.formInit();
  }
  public isChecked(event): void {
    event.target.checked === true ? this.checked = true : this.checked = false;
  }
  public onCalculate(): void {
    if (this.taxForm) {
      let product: Product = {
        amount: this.taxForm.value.amount,
        name: this.taxForm.value.name,
        productType: this.taxForm.value.productType,
        imported: this.checked,
        priceWithoutTax: this.taxForm.value.priceWithoutTax,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      product = this.taxService.calculatePrice(product);
      this.onPush(product);
      this.onReset();
    }
  }
  public onSelected(type: string): string{
    this.selectedType = type;
    return  this.selectedType;
  }
  private onPush(product: Product): void {
    this.taxService.onPushEvent(product);
  }
  private onReset(): void {
    this.formInit();
    this.checked = false;
  }
  private formInit(): void {
    this.taxForm = new FormGroup({
      amount : new FormControl(0, [Validators.required, Validators.min(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      imported: new FormControl(null),
      productType: new FormControl(this.selectedType, Validators.required),
      priceWithoutTax: new FormControl('', [ Validators.required, Validators.min(1)])
    });
    this.selectedType = this.taxForm.value.productType;
  }
}
