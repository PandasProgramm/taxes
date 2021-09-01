import {Injectable} from '@angular/core';
import {Product, ProductType} from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class TaxService {

  /** @param exemptProductTypes are types without taxes of 10% */
  private exemptProductTypes: ProductType[] = [ ProductType.FOOD, ProductType.MEDICALS, ProductType.BOOK];

  public isExempt(productType: string): boolean {
    let query = false;
    this.exemptProductTypes.forEach((type) => {
      if (productType === type){
        query = true;
      }
    });
    return query;
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
