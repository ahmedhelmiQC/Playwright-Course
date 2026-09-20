import { Locator, Page } from "@playwright/test";
import { basePage } from "./basePage";

export class PaymentPage extends basePage{

    readonly CreditCard : Locator;
    readonly cvvCode    : Locator;
    readonly name       : Locator;
    readonly Coupon     : Locator;
    readonly country    : Locator;
    readonly countrysuggestion :Locator;
    readonly placeorder : Locator;


    constructor(page:Page){
        super(page);
        this.CreditCard = page.locator(".field").filter({hasText:/Credit Card/!}).locator("input");
        this.cvvCode    = page.locator(".field").filter({hasText:/CVV Code/!}).locator("input");
        this.name       = page.locator(".field").filter({hasText:/Name/!}).locator("input");
        this.Coupon     = page.locator(".field").filter({hasText:/Coupon/!}).locator("input");
        this.country    = page.getByPlaceholder("Select Country");
        this.countrysuggestion = page.getByRole("button", { name: /France$/, });
        this.placeorder  = page.locator('a.action__submit');
    }

    data={
        number : "4712 1545 8906 5354",
        cvvCode    : "211",
        name       : "Jared Kassulke",
        coupon     : "4556",
        country    : "fran",
       // suggestion : "France"
    }

    async fillPaymentForm():Promise<void>{
        await this.CreditCard.fill(this.data.number);
        await this.cvvCode.fill(this.data.cvvCode);
        await this.name.fill(this.data.name);
        await this.Coupon.fill(this.data.coupon);
        await this.country.click();
        await this.country.pressSequentially(this.data.country);
       await this.countrysuggestion.waitFor({ state: 'visible' })
        await this.countrysuggestion.click();
        await this.placeorder.click();
    }
    
}
