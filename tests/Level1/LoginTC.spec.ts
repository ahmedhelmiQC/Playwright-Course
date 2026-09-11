import { test , expect , type Page } from "@playwright/test"
import { LoginPage } from "./LoginPage";

test.use({
    launchOptions: {slowMo: 800},
});

test ("user can login ", async({page})=>{

const loginpage = new LoginPage(page);
await loginpage.open();
await loginpage.login();

await expect(loginpage.header).toContainText("Swag Labs");

}
)