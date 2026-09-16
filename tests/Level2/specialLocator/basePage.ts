import { Page } from "@playwright/test";

export class basePage{

    static readonly URL = "https://rahulshettyacademy.com/angularpractice/";

    constructor(readonly page:Page){
        this.page =page;
    }

    async open(): Promise<void>{
        this.page.goto(basePage.URL);
    }
}