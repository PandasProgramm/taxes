import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/model/product';
import {TaxService} from '../../shared/services/tax.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  products: Product[] = [];
  totalPrice  = 0;
  totalTaxSales = 0;
  constructor(private taxService: TaxService) {
    this.taxService.onPushProduct.subscribe(
      (product) => {
        this.products.push(product);
        this.totalTaxSales = this.taxService.calculateTotalSaleTax(this.products);
        this.totalPrice = this.taxService.calculateTotalCoasts(this.products);
      });
  }

  ngOnInit(): void {
  }

}
