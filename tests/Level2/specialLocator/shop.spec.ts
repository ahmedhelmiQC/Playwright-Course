import{test , expect , Page} from "@playwright/test"
import { HomePage } from "./homepage";
import { shopPage } from "./shopPage";

test.use({
    launchOptions: {slowMo: 800},
});

test("select Products", async({page})=>{

    const homepage = new HomePage(page);
    const shoppage = new shopPage(page);

    await homepage.open();
    await homepage.fillForm();
    await homepage.checkBox();
    await homepage.selectGender();
    await homepage.EmploymentStatus();
    await homepage.clickSubmit();

    await shoppage.openShopPage();
    await shoppage.selectfirstProduct();
    await shoppage.selectlastProduct();
    
    expect(shoppage.checkout).toContainText("2");

})