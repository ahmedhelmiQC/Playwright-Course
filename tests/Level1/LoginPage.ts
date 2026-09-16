import { type Locator , type Page  } from "@playwright/test";
import { basePage } from "./basePage.ts";

export class LoginPage extends basePage{

    readonly username : Locator;
    readonly password : Locator;
    readonly lognBTn  : Locator;
    readonly header   : Locator;

    constructor( page : Page ){
        super(page);
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.lognBTn  = page.getByRole('button', { name: 'Login' });
        this.header   =  page.getByText("swag labs");
    }
    readonly user = {
        username: "standard_user",
        password: "secret_sauce",
    };

    override async open(): Promise<void> {
      await super.open();
    }

    async fillUsername():Promise<void>{
        await this.username.fill(this.user.username);
    }

   async fillPassword():Promise<void>{
    await this.password.fill(this.user.password);
   }

   async clickLoginBtn():Promise<void>{
    await this.lognBTn.click;
   }

}