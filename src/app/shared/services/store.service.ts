import {Injectable} from '@angular/core';
import {ProductType} from '../model/product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private exemptProductTypes: ProductType[] = [ ProductType.FOOD, ProductType.MEDICALS, ProductType.BOOK];
  private productTypes: ProductType[] = [ ProductType.FOOD, ProductType.MEDICALS, ProductType.BOOK, ProductType.OTHER];

  constructor() { }

  public getExemptProductTypes(): Observable<ProductType[]> {
    return of(this.exemptProductTypes);
  }
  public getAllProductTypes(): Observable<ProductType[]> {
    return of(this.productTypes);
  }
}
