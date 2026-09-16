import{test , expect , Page} from "@playwright/test"
import { homePage } from "./homepage";
import { shopPage } from "./shopPage";

test.use({
    launchOptions: {slowMo: 800},
});

test("select Products", async({page})=>{

    const homepage = new homePage(page);
    const shoppage = new shopPage(page);

    await homepage.open();
    await homepage.fillName();
    await homepage.fillEmail();
    await homepage.fillPassword();
    await homepage.checkBox();
    await homepage.selectGender();
    await homepage.EmploymentStatus();
    await homepage.clickSubmit();

    await shoppage.openShopPage();
    await shoppage.selectProduct1();
    await shoppage.selectProduct2();
    
    expect(shoppage.checkout).toContainText("2");

})