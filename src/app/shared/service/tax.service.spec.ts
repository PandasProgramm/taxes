import {TaxService} from './tax.service';
import {ProductType} from '../model/product';
import {Product} from '../model/product';



describe('service test for tax service', () => {
  let taxService: TaxService;
  beforeEach(() => {
    taxService = new TaxService();
  });
  describe('#input 1', () => {

    let book: Product;
    let cd: Product;
    let chocolateBar: Product;

    let isExemptBook: boolean;
    let isExemptChocolateBar: boolean;
    let isExemptCD: boolean;

    let taxBook: Product;
    let taxCD: Product;
    let taxChocolateBar: Product;

    let priceBook: Product;
    let priceCD: Product;
    let priceChocolateBar: Product;

    let products: Product[];
    let totalSaleTax: number;
    let totalCoasts: number;

    beforeEach(() => {
      book = {
        amount: 1,
        name: 'book',
        productType: ProductType.BOOK,
        priceWithoutTax: 12.49,
        imported: false,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      cd = {
        amount: 1,
        name: 'music CD',
        productType: ProductType.OTHER,
        priceWithoutTax: 14.99,
        imported: false,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      chocolateBar = {
        amount: 1,
        name: 'chocolate bar',
        productType: ProductType.FOOD,
        priceWithoutTax: 0.85,
        imported: false,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      isExemptBook = taxService.isExempt(book.productType);
      isExemptChocolateBar = taxService.isExempt(chocolateBar.productType);
      isExemptCD = taxService.isExempt(cd.productType);
      taxBook = taxService.calculateTaxRate(book);
      taxCD = taxService.calculateTaxRate(cd);
      taxChocolateBar = taxService.calculateTaxRate(chocolateBar);

      priceBook = taxService.calculatePrice(taxBook);
      priceCD = taxService.calculatePrice(cd);
      priceChocolateBar = taxService.calculatePrice(taxChocolateBar);
      products = [book, cd, chocolateBar];

      totalSaleTax = taxService.calculateTotalSaleTax(products);
      totalCoasts = taxService.calculateTotalCoasts(products);
    });

    describe('test tax service method: isExempt', () => {
      it('should to be exempt', () => {
        expect(isExemptBook).toBeTruthy();
      });
      it('should to be exempt', () => {
        expect(isExemptChocolateBar).toBeTruthy();
      });
      it('should not to be exempt', () => {
        expect(isExemptCD).toBe(false);
      });
    });
    describe('test tax service method: calculateTaxRate', () => {
      it('should not have any tax, because the product typ is food and is not imported', () => {
        expect(taxBook.taxPercent).toBe(0);
      });
      it('should have a rate of 10 percent', () => {
        expect(taxCD.taxPercent).toBe(10);
      });
      it('should not have any tax, because the product typ is food and is not imported', () => {
        expect(taxChocolateBar.taxPercent).toBe(0);
      });
    });
    describe('test tax service method: calculatePrice', () => {
      it('should to be 12.49€', () => {
        expect(priceBook.price).toBe(12.49);
      });
      it('should to be 16.49€', () => {
        expect(priceCD.price).toBe(16.49);
      });
      it('should to be 0.85€', () => {
        expect(priceChocolateBar.price).toBe(0.85);
      });
    });
    describe('test total tax service method: calculateTotalSaleTax', () => {
      it('should have a total sales taxes of 1.50 €', () => {
        expect(totalSaleTax).toBe(1.5);
      });
    });
    describe('test total tax service method: calculateTotalCoasts', () => {
      it('should have total coasts of 29.83€', () => {
        expect(totalCoasts).toBe(29.83);
      });
    });
  });
  describe('#input 2', () => {
    let importedBoxChocolate: Product;
    let importedPerfume: Product;

    let isExemptIBC: boolean;
    let isExemptIP: boolean;

    let taxImportedBoxChocolate: Product;
    let taxImportedPerfume: Product;

    let priceBoxChocolate: Product;
    let pricePerfume: Product;

    let products: Product[];
    let totalSaleTax: number;
    let totalCoasts: number;

    beforeEach(() => {
      importedBoxChocolate = {
        amount: 1,
        name: 'imported box of chocolates',
        productType: ProductType.FOOD,
        priceWithoutTax: 10.00,
        imported: true,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      importedPerfume = {
        amount: 1,
        name: 'imported bottle of perfume',
        productType: ProductType.OTHER,
        priceWithoutTax: 47.5,
        imported: true,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      products = [importedBoxChocolate, importedPerfume];

      isExemptIBC = taxService.isExempt(importedBoxChocolate.productType);
      isExemptIP = taxService.isExempt(importedPerfume.productType);

      taxImportedBoxChocolate = taxService.calculateTaxRate(importedBoxChocolate);
      taxImportedPerfume = taxService.calculateTaxRate(importedPerfume);

      priceBoxChocolate = taxService.calculatePrice(importedBoxChocolate);
      pricePerfume = taxService.calculatePrice(importedPerfume);

      totalSaleTax = taxService.calculateTotalSaleTax(products);
      totalCoasts = taxService.calculateTotalCoasts(products);
    });

    describe('test tax service method: isExempt', () => {
      it('should to be exempt', () => {
        expect(isExemptIBC).toBeTruthy();
      });
      it('should not  be exempt', () => {
        expect(isExemptIP).toBe(false);
      });
    });
    describe('test tax service method: calculateTaxRate', () => {
      it('should have a rate of 5 percent', () => {
        expect(taxImportedBoxChocolate.taxPercent).toBe(5);
      });
      it('should have a rate of 15 percent', () => {
        expect(taxImportedPerfume.taxPercent).toBe(15);
      });
    });
    describe('test tax service method: calculatePrice', () => {
      it('should have a price of 10.50 €', () => {
        expect(priceBoxChocolate.price).toBe(10.5);
      });
      it('should have a price pf 54.65 €', () => {
        expect(pricePerfume.price).toBe(54.65);
      });
    });
    describe('test total tax service method: calculateTotalSaleTax', () => {
      it('should have a total sales taxes of 7.65€', () => {
        expect(totalSaleTax).toBe(7.65);
      });
    });
    describe('test total tax service method: calculateTotalCoasts', () => {
      it('should have total coasts of 65.15 ', () => {
        expect(totalCoasts).toBe(65.15);
      });
    });
  });
  describe('#input 3', () => {
    let importedPerfume: Product;
    let perfume: Product;
    let packetPills: Product;
    let importedBoxChocolate: Product;

    let isExemptPacketPills: boolean;
    let isExemptIP: boolean;
    let isExemptPerfume: boolean;
    let isExemptIBC: boolean;

    let taxPacketPills: Product;
    let taxIP: Product;
    let taxPerfume: Product;
    let taxIBC: Product;

    let pricePacketPills: Product;
    let priceIP: Product;
    let pricePerfume: Product;
    let priceIBC: Product;

    let products: Product[];

    let totalSaleTax: number;
    let totalCoasts: number;

    beforeEach(() => {
      importedPerfume = {
        amount: 1,
        name: 'imported bottle of Perfume',
        productType: ProductType.OTHER,
        priceWithoutTax: 27.99,
        imported: true,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      perfume = {
        amount: 1,
        name: 'bottle of perfume',
        productType: ProductType.OTHER,
        priceWithoutTax: 18.99,
        imported: false,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      packetPills = {
        amount: 1,
        name: 'packet of headache pills',
        productType: ProductType.MEDICALS,
        priceWithoutTax: 9.75,
        imported: false,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      importedBoxChocolate = {
        amount: 1,
        name: 'box of imported chocolates',
        productType: ProductType.FOOD,
        priceWithoutTax: 11.25,
        imported: true,
        taxPercent: 0,
        tax: 0,
        price: 0
      };
      products = [importedPerfume, perfume, packetPills, importedBoxChocolate ];

      isExemptPacketPills = taxService.isExempt(packetPills.productType);
      isExemptIP  = taxService.isExempt(importedPerfume.productType);
      isExemptPerfume = taxService.isExempt(perfume.productType);
      isExemptIBC = taxService.isExempt(importedBoxChocolate.productType);

      taxPacketPills = taxService.calculateTaxRate(packetPills);
      taxIP = taxService.calculateTaxRate(importedPerfume);
      taxPerfume = taxService.calculateTaxRate(perfume);
      taxIBC = taxService.calculateTaxRate(importedBoxChocolate);

      pricePacketPills = taxService.calculatePrice(packetPills);
      priceIP = taxService.calculatePrice(importedPerfume);
      pricePerfume = taxService.calculatePrice(perfume);
      priceIBC = taxService.calculatePrice(importedBoxChocolate);

      totalSaleTax = taxService.calculateTotalSaleTax(products);
      totalCoasts = taxService.calculateTotalCoasts(products);
    });

    describe('test tax service method: isExempt', () => {
      it('should to be exempt', () => {
        expect(isExemptPacketPills).toBe(true);
      });
      it('should to be exempt', () => {
        expect(isExemptIBC).toBe(true);
      });
      it('should not to be exempt', () => {
        expect(isExemptIP).toBe(false);
      });
      it('should not to be exempt', () => {
        expect(isExemptPerfume).toBe(false);
      });
    });
    describe('test tax service method: calculateTaxRate', () => {
      it('should have a tax rate of 0 percent', () => {
        expect(taxPacketPills.taxPercent).toBe(0);
      });
      it('should have a tax rate of 15 percent', () => {
        expect(taxIP.taxPercent).toBe(15);
      });
      it('should have a tax rate of 10 percent', () => {
        expect(taxPerfume.taxPercent).toBe(10);
      });
      it('should have a tax rate of 5 percent', () => {
        expect(taxIBC.taxPercent).toBe(5);
      });
    });
    describe('test tax service method: calculatePrice', () => {
      it('should be 32.19€', () => {
        expect(priceIP.price).toBe(32.19);
      });
      it('should be 20.89€', () => {
        expect(pricePerfume.price).toBe(20.89);
      });
      it('should be 9.75€', () => {
        expect(pricePacketPills.price).toBe(9.75);
      });
      it('should be 11.81€', () => {
        expect(priceIBC.price).toBe(11.81);
      });
    });
    describe('test total tax service method: calculateTotalSaleTax', () => {
       it('should have a total sales taxes of 6.70€', () => {
          expect(totalSaleTax).toBe(6.7);
       });
    });
    describe('test total tax service method: calculateTotalCoasts', () => {
      it('should have total coasts of 74.68', () => {
        expect(totalCoasts).toBe(74.68);
      });
    });
  });
});


