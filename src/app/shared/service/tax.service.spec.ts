import {TaxService} from './tax.service';
import {TestBed} from '@angular/core/testing';
import {ProductType} from '../model/products';
import {Products} from '../model/products';


const taxService = new TaxService();
describe('TaxServiceService', () => {
  let service: TaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class Product {
}

describe('#input 1', () => {

  const book: Products = {
    amount: 1,
    name: 'book',
    productType: ProductType.BOOK,
    priceWithoutTax: 12.49,
    imported: false,
    tax: 0,
    price: 0
  };
  const cd: Products = {
    amount: 1,
    name: 'music CD',
    productType: ProductType.OTHER,
    priceWithoutTax: 14.99,
    imported: false,
    tax: 0,
    price: 0
  };
  const chocolateBar: Products = {
    amount: 1,
    name: 'chocolate bar',
    productType: ProductType.FOOD,
    priceWithoutTax: 0.85,
    imported: false,
    tax: 0,
    price: 0
  };

  it('should to be exempt', () => {
    const isExemptBook = taxService.isExempt(book.productType);
    const isExemptChocolateBar = taxService.isExempt(chocolateBar.productType);

    expect(isExemptBook).toBeTruthy();
    expect(isExemptChocolateBar).toBeTruthy();
  });
  it('should not be exempt', () => {
    const isExemptCD = taxService.isExempt(cd.productType);
    expect(isExemptCD).toBe(false);
  });
});

describe('#input 2', () => {
  const importedBoxChocolate: Products = {
    amount: 1,
    name: 'imported box of chocolates',
    productType: ProductType.FOOD,
    priceWithoutTax: 10.00,
    imported: true,
    tax: 0,
    price: 0
  };
  const importedPerfume: Products = {
    amount: 1,
    name: 'imported bottle of perfume',
    productType: ProductType.OTHER,
    priceWithoutTax: 47.5,
    imported: true,
    tax: 0,
    price: 0
  };

  it('should to be exempt', () => {


    const isExemptIBC = taxService.isExempt(importedBoxChocolate.productType);
    expect(isExemptIBC).toBeTruthy();
  });
  it('should not  be exempt', () => {
    const isExemptIP = taxService.isExempt((importedPerfume.productType));
    expect(isExemptIP).toBe(false);
  });
});
describe('#input 3', () => {
  const importedPerfume: Products = {
    amount: 1,
    name: 'imported bottle of Perfume',
    productType: ProductType.OTHER,
    priceWithoutTax: 27.99,
    imported: true,
    tax: 0,
    price: 0
  };
  const perfume: Products = {
    amount: 1,
    name: 'bottle of perfume',
    productType: ProductType.OTHER,
    priceWithoutTax: 18.99,
    imported: false,
    tax: 0,
    price: 0
  };
  const packetPills: Products = {
    amount: 1,
    name: 'packet of headache pills',
    productType: ProductType.MEDICALS,
    priceWithoutTax: 9.75,
    imported: false,
    tax: 0,
    price: 0
  };
  const importedBoxChocolate: Products = {
    amount: 1,
    name: 'box of imported chocolates',
    productType: ProductType.FOOD,
    priceWithoutTax: 11.25,
    imported: true,
    tax: 0,
    price: 0
  };

  it('should to be exempt', () => {
    const isExemptPacketPills = taxService.isExempt(packetPills.productType);
    expect(isExemptPacketPills).toBeTruthy();
  });
  it('should not be exempt', () => {
    const isExemptIP = taxService.isExempt(importedPerfume.productType);
    const isExemptPerfume = taxService.isExempt(perfume.productType);
    const isExemptIBC = taxService.isExempt(importedBoxChocolate.productType);

    expect(isExemptIP).toBe(false);
    expect(isExemptPerfume).toBe(false);
    expect(isExemptIBC).toBe(false);
  });
});

