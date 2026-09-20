import { expect, Locator, Page } from "@playwright/test";
import { basePage } from "./basePage";


export class LoginPage extends basePage{

    readonly email    : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;
    readonly acceleratorLinlk : Locator;

    constructor(page:Page){
       super(page);
       this.email    = page.getByPlaceholder("email@example.com");
       this.password = page.getByPlaceholder("enter your passsword");
       this.loginBtn = page.getByRole("button", {name:"Login"});
        this.acceleratorLinlk = page.getByRole("link", {name: "accelerator"});
    }

    user={
        email    : "ahmed.systemtester@gmail.com",
        password : "Ahmed@123"
    }

    async fillLoginForm(){
        await this.email.fill(this.user.email);
        await this.password.fill(this.user.password);
        await this.loginBtn.click();
    }

    async handeltabs():Promise<void> {

        const [newTab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.acceleratorLinlk.click()]);

        await newTab.waitForLoadState("domcontentloaded");
        await  expect(newTab.url()).toContain("rahulshettyacademy");

        await newTab.close();
        await expect(this.acceleratorLinlk).toBeVisible();
       
    }

}