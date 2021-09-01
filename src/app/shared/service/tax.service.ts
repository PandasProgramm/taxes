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
    console.log(product);
    if ( product.taxPercent > 0 ) {
      taxPrice = Math.round(product.priceWithoutTax / 100 * product.taxPercent * 100) / 100;
//      taxPrice = Math.round((product.priceWithoutTax / 100 *  product.taxPercent) * 20) / 20.0;
      console.log(taxPrice);
    }
    const priceProduct = Math.round((product.priceWithoutTax + taxPrice) * 100 ) / 100;
    console.log('priceproduct ', priceProduct);
    return {
      ... product,
      tax : taxPrice,
      price: priceProduct
    };
  }
  public calculateTotalSaleTax(products: Product[]): number {
    return null;
  }
  public calculateTotalCoasts(products: Product[]): number {
    return null;
  }
}
