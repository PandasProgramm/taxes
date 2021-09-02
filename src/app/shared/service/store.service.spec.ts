import {TestBed} from '@angular/core/testing';

import {StoreService} from './store.service';
import {ProductType} from '../model/product';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HttpService', () => {
  let service: StoreService;
  let httpMock: HttpTestingController;

  const productTypes: ProductType[] = [
    ProductType.OTHER,
    ProductType.BOOK,
    ProductType.FOOD,
    ProductType.MEDICALS
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoreService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get a list of product types', () => {
    let receivedProductTypes: ProductType[];
    service.getProductTypes()
      .subscribe((types) => { receivedProductTypes = types; });

    /**
     * get product types from simulate queue
     * TODO: set url and test request
     */
    const request = httpMock.expectOne('');
    request.flush(productTypes);

    expect(receivedProductTypes.length).toBe(4);
    expect(receivedProductTypes[0]).toBe(ProductType.OTHER);
    expect(receivedProductTypes[3]).toBe(ProductType.MEDICALS);
  });
  afterEach( () => {
    httpMock.verify();
  });
});
