import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor() { }

  public isExempt(productType: string): boolean {
    return false;
  }

  public calculateTaxRate(productPrice: number): number {
    return 0;
  }

  public calculatePrice(price: number): number {
    return 0;
  }
}
