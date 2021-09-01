#Documentation
###Task
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical
products that are exempt. Import duty is an additional sales tax
applicable on all imported goods at a rate of 5%, with no exemptions. When I purchase items
I receive a receipt which lists the name of all the items and their price (including tax),
finishing with the total cost of the items,
and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax
rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of
sales tax.
Write an application that prints out the receipt details for these shopping baskets...

### INPUT:
Input 1:
> 1 book at 12.49<br>
> 1 music CD at 14.99<br>
> 1 chocolate bar at 0.85<br>

Input 2:
> 1 imported box of chocolates at 10.00<br>
> 1 imported bottle of perfume at 47.50<br>

Input 3:
> 1 imported bottle of perfume at 27.99<br>
> 1 bottle of perfume at 18.99<br>
> 1 packet of headache pills at 9.75<br>
> 1 box of imported chocolates at 11.25<br>
### OUTPUT
Output 1:
> 1 book: 12.49<br>
> 1 music CD: 16.49<br>
> 1 chocolate bar: 0.85<br>
> Sales Taxes: 1.50<br>
> Total: 29.83<br>

Output 2:
> 1 imported box of chocolates: 10.50<br>
> 1 imported bottle of perfume: 54.65<br>
> Sales Taxes: 7.65<br>
> Total: 65.15<br>

Output 3:
> 1 imported bottle of perfume: 32.19<br>
> 1 bottle of perfume: 20.89<br>
> 1 packet of headache pills: 9.75<br>
> 1 imported box of chocolates: 11.85<br>
> Sales Taxes: 6.70<br>
> Total: 74.68<br>


##Steps

####1. specify methods

> isExempt(productType:string): boolean<br>
> calculateTaxRate(product: Product): number<br>
> calculatePrice(price: number, tax: number): number <br>
> 
####2. create Model
> create interface Products
> 
####3. create Service
>tax-service<br>
>create empty methods 
####4. set test arrange
> 1: create 3 x describe for input 1/2/3<br>
> 2: arrange test data<br>
> 
> 
>Test empty service method:
![](../../../Desktop/Bildschirmfoto 2021-09-01 um 13.00.00.png)
###### service:
![](../../../Desktop/Bildschirmfoto 2021-09-01 um 13.01.08.png)

#### Develop methods
>isExempt :
> ![](../../../Desktop/Bildschirmfoto 2021-09-01 um 13.31.49.png)
>tests:
> ![](../../../Desktop/Bildschirmfoto 2021-09-01 um 13.33.41.png)
