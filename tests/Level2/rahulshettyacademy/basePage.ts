import { Page } from "@playwright/test";


export class basePage{

    static readonly URL = "https://rahulshettyacademy.com/client/#/auth/login";

    constructor(readonly page:Page){
        this.page = page;
    }

    async open():Promise<void>{
        await this.page.goto(basePage.URL);
    }

}
