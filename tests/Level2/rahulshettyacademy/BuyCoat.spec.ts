import{test,expect} from "@playwright/test"
import { basePage } from "./basePage";
import { RegisterPage } from "./RegisterPage";
import{LoginPage} from"./LoginPage";
import{DashboardPage} from"./DashboardPage";
import { PaymentPage } from "./PaymentPage";


test.use({
    launchOptions: {slowMo: 800},
});

test("user Buy ZARA COAT",async({page})=>{
    const rigisterpage = new RegisterPage(page);
    const loginpage = new LoginPage(page);
     const addtocard = new DashboardPage(page);
    const payment = new PaymentPage(page);

        
        await rigisterpage.open();
   // await rigisterpage.fillRegisterForm();
    
    
    await loginpage.fillLoginForm();
    await loginpage.handeltabs();

   // await addtocard.addtocart();

   // await payment.fillPaymentForm();

})