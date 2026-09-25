import { Locator , Page } from "@playwright/test";
import { basePage } from "./basePage";

export class shopPage extends basePage{

    readonly shopBUT : Locator;
    readonly firstProduct : Locator;
    readonly lastProduct : Locator;
    readonly checkout : Locator;

    products = {
        firstProduct : "iphone X",
        lastProduct : "Blackberry",
    }

    constructor(page:Page)
    {
      super(page);  
      this.shopBUT =  page.getByRole("link" , {name:"Shop"});

      this.firstProduct = page.locator("app-card")
                    .filter({hasText:(this.products.firstProduct)})
                    .getByRole("button",{name:"Add "});

      this.lastProduct = page.locator("app-card")
                    .filter({hasText:(this.products.lastProduct)})
                    .getByRole("button",{name:"Add "});

      this.checkout = page.locator("a").filter({hasText:"Checkout"});
    }

    async openShopPage():Promise<void>
    {
        await this.shopBUT.click();
    }

    async selectfirstProduct():Promise<void>
    {
        await this.firstProduct.click();
    }

    async selectlastProduct():Promise<void>
    {
        await this.lastProduct.click();
    }

    
}