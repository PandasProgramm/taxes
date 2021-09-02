import { Injectable } from '@angular/core';
import {ProductType} from '../model/product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private exemptProductTypes: ProductType[] = [ ProductType.FOOD, ProductType.MEDICALS, ProductType.BOOK];

  constructor() { }

  public getProductTypes(): Observable<ProductType[]> {
    return of(this.exemptProductTypes);
  }
}
