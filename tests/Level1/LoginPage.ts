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
    

    override async open(): Promise<void> {
      await super.open();
    }

    async Username():Promise<void>{
        await this.username.fill("standard_user");
    }

   async Password():Promise<void>{
    await this.password.fill("secret_sauce");
   }

   async click():Promise<void>{
    await this.lognBTn.click;
   }

}