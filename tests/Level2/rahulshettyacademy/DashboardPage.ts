import { expect, Locator, Page } from "@playwright/test";
import { basePage } from "./basePage";

export class DashboardPage extends basePage{

    readonly coatCard         : Locator;
    readonly cardBtn          : Locator;
     readonly checkoutBtn     : Locator;

    constructor(page:Page){
        super(page);
        this.coatCard         = page.locator(".col-lg-4").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:" Add To Cart"});
        this.cardBtn          = page.locator("button[routerlink='/dashboard/cart']");
        this.checkoutBtn      = page.getByRole("button",{name:"Checkout"});
       
    }

    
    async addtocart():Promise<void>{
        await this.coatCard.click();
        await expect(this.cardBtn).toHaveText("Cart 1");
        await this.cardBtn.click();
        await this.checkoutBtn.click();
    }
}

