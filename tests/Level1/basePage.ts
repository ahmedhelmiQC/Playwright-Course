import{ type Page} from "@playwright/test"

export class basePage{

    constructor(readonly page : Page) {
        this.page = page;
    }

    async open():Promise<void>{
      await  this.page.goto("https://www.saucedemo.com/");
    }
}