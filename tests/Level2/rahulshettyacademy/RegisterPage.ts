import {  Locator , Page } from "@playwright/test";
import { basePage } from "./basePage";


export class RegisterPage extends basePage{

    readonly RegisterLink : Locator;
    readonly firstName    : Locator;
    readonly lastName     : Locator;
    readonly email        : Locator;
    readonly phoneNumber  : Locator;
    readonly occpation    : Locator;
    readonly genderMale   : Locator;
    readonly password     : Locator;
    readonly confirmPass  : Locator;
    readonly checkbox     : Locator;
    readonly registerBtn  : Locator;
    readonly loginBtn     : Locator;
    

    constructor( page:Page){
        super(page);
        this.RegisterLink = page.getByRole("link", {name:"Register"});
        this.firstName    = page.getByPlaceholder("First Name");
        this.lastName     = page.getByPlaceholder("Last Name");
        this.email        = page.getByPlaceholder("Email");
        this.phoneNumber  = page.getByPlaceholder("enter your number");
        this.occpation    = page.getByRole("combobox");
        this.genderMale   = page.getByRole('radio', { name: 'Male', exact: true });
        this.password     = page.getByRole("textbox",{name:"Passsword"});
        this.confirmPass  = page.getByPlaceholder("Confirm Passsword");
        this.checkbox     = page.getByRole("checkbox");
        this.registerBtn  = page.getByRole("button",{name:"Register"});
        this.loginBtn     = page.getByRole("button", {name:"Login"});
    }

    data={
        firstName : "ahmed",
        lastName  : "helmi",
        email     : "ahmed.systemtester@gmail.com",
        phonenumber: "1234567890",
        password   : "Ahmed@123",
    }

    override async open(): Promise<void> {
        await super.open();
    }

    async fillRegisterForm():Promise<void>{
        await this.RegisterLink.click();
        await this.firstName.fill(this.data.firstName);
        await this.lastName.fill(this.data.lastName);
        await this.email.fill(this.data.email);
        await this.phoneNumber.fill(this.data.phonenumber);
        await this.occpation.selectOption("Engineer");
        await this.genderMale.click();
        await this.password.fill(this.data.password);
        await this.confirmPass.fill(this.data.password);
        await this.checkbox.click();
        await this.registerBtn.click();
    }
    async clickLogin():Promise<void>{
        await this.loginBtn.click();
    }

    
}