import{ type Page} from "@playwright/test"

export class basePage{

    static readonly URL = "https://www.saucedemo.com/";

    constructor(readonly page : Page) {
        this.page = page;
    }

    async open():Promise<void>{
      await  this.page.goto(basePage.URL);
    }
}