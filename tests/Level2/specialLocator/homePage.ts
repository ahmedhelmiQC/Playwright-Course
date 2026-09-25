import { Locator , Page }   from "@playwright/test";
import { basePage } from "./basePage.ts";

export class HomePage extends basePage{

    readonly name     : Locator;
    readonly email    : Locator;
    readonly password : Locator;
    readonly checkbox : Locator;
    readonly gender   : Locator;
    readonly empstatu : Locator;
    readonly submit   : Locator;
    
    constructor(page: Page){
        super(page);
        this.name     = page.locator('form input[name="name"]');
        this.email    = page.locator('form input[name="email"]');
        this.password = page.getByPlaceholder("Password");
        this.checkbox = page.getByRole("checkbox", { name: /Check me out/ });
        this.gender   = page.getByLabel("Gender");
        this.empstatu = page.getByLabel("Employed");
        this.submit   =   page.getByRole("button",{name:"Submit"});
    }
     user={
        name    : "ahmed",
        email   : "test@test.com",
        password: "pass123",
        gender  :"Male",
    }
    override async open(): Promise<void> {
      await  super.open();
    }

    
    async fillForm():Promise<void>
    {
        await this.name.fill(this.user.name);
        await this.email.fill(this.user.email);
        await this.password.fill(this.user.password);
    }

    async checkBox():Promise<void>
    {
        await this.checkbox.click();
    }

    async selectGender():Promise<void>
    {
        await this.gender.selectOption(this.user.gender);
    }

    async EmploymentStatus():Promise<void>
    {
        await this.empstatu.click();
    }

    async clickSubmit(): Promise<void>
    {
        await this.submit.click();
    }
}