import {Component, OnInit} from '@angular/core';
import {Product, ProductType} from '../../shared/model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TaxService} from '../../shared/service/tax.service';
import {StoreService} from '../../shared/service/store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.css']
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
    this.taxForm = new FormGroup({
      amount : new FormControl(0, [Validators.required, Validators.min(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      imported: new FormControl(null),
      productType: new FormControl('', Validators.required),
      priceWithoutTax: new FormControl('', [ Validators.required, Validators.min(1)])
    });
    this.selectedType = this.taxForm.value.productType;
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
      this.taxForm.reset();
      this.checked = false;
    }
  }
  onSelected(type: string): void{
    this.selectedType = type;
  }
  private onPush(product: Product): void {
    this.taxService.onPushEvent(product);
  }
}