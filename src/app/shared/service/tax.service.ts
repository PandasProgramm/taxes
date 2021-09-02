import {Injectable} from '@angular/core';
import {Product, ProductType} from '../model/product';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaxService {

  private exemptProductTypes: ProductType[] = [ ProductType.FOOD, ProductType.MEDICALS, ProductType.BOOK];
  private products: Product[] = [];

  public isExempt(productType: string): boolean {
    let query = false;
    this.exemptProductTypes.forEach((type) => {
      if (productType === type){
        query = true;
      }
    });
    return query;
  }

  public calculateTaxRate(product: Product): Product {
    const isExempt = this.isExempt( product.productType );
    const basicTax = 10;
    const importTax = 5;
    let tax = 0;

    isExempt ? tax += 0 : tax += basicTax ;
    product.imported ? tax += importTax : tax += 0;
    return {
      ...product,
      taxPercent: tax
    };
  }

  public calculatePrice(product: Product): Product {
    let taxPrice = 0;
    product = this.calculateTaxRate(product);
    if ( product.taxPercent > 0 ) {
      taxPrice = Math.round(product.priceWithoutTax / 100 * product.taxPercent * 100) / 100;
    }
    const priceProduct = Math.round((product.priceWithoutTax + taxPrice) * 100 ) / 100;
    return {
      ... product,
      tax : taxPrice,
      price: priceProduct
    };
  }
  public calculateTotalSaleTax(products: Product[]): number {
   let sumTax = 0;
   products.forEach((product) => sumTax += product.tax);
   return sumTax;
  }
  public calculateTotalCoasts(products: Product[]): number {
   let sum = 0;
   products.forEach((product) => sum += product.price);
   return sum;
  }
  /**
   *  @returns products as observable to simulate a http call
   */
  public getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
