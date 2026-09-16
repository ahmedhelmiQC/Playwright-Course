import { Locator , Page } from "@playwright/test";
import { basePage } from "./basePage";

export class shopPage extends basePage{

    readonly shopBUT : Locator;
    readonly product1 : Locator;
    readonly Product2 : Locator;
    readonly checkout : Locator;

    products = {
        ptoduct1 : "iphone X",
        Product2 : "Blackberry",
    }

    constructor(page:Page)
    {
      super(page);  
      this.shopBUT =  page.getByRole("link" , {name:"Shop"});

      this.product1 = page.locator("app-card")
                    .filter({hasText:(this.products.ptoduct1)})
                    .getByRole("button",{name:"Add "});

      this.Product2 = page.locator("app-card")
                    .filter({hasText:(this.products.Product2)})
                    .getByRole("button",{name:"Add "});

      this.checkout = page.locator("a").filter({hasText:"Checkout"});
    }

    async openShopPage():Promise<void>
    {
        await this.shopBUT.click();
    }

    async selectProduct1():Promise<void>
    {
        await this.product1.click();
    }

    async selectProduct2():Promise<void>
    {
        await this.Product2.click();
    }

    
}