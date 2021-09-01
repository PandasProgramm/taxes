import {Injectable} from '@angular/core';
import {Product, ProductType} from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class TaxService {
  constructor() { }

  public isExempt(productType: string): boolean {
    return null;
  }

  public calculateTaxRate(product: Product): number {
    return null;
  }

  public calculatePrice(price: number, tax: number): number {
    return null;
  }

  public calculateTotalSaleTax(products: Product[]): number {
    return null;
  }
  public calculateTotalCoasts(products: Product[]): number {
    return null;
  }
}
