import{test,expect} from "@playwright/test"
import { basePage } from "../../Pages/basePage";
import { RegisterPage } from "../../Pages/RegisterPage";
import{LoginPage} from"../../Pages/LoginPage";
import{DashboardPage} from"../../Pages/DashboardPage";
import { PaymentPage } from "../../Pages/PaymentPage";


test.use({
    launchOptions: {slowMo: 800},
});

test("user Buy ZARA COAT",async({page})=>{
    const rigisterpage = new RegisterPage(page);
    const loginpage = new LoginPage(page);
     const addtocard = new DashboardPage(page);
    const payment = new PaymentPage(page);

        
    await rigisterpage.open();
    await loginpage.fillLoginForm();
    await loginpage.handeltabs();

        await addtocard.addtocart();
        await payment.fillPaymentForm();


})
