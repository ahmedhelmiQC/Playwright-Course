import { test , expect , Page } from "@playwright/test";

test.use({
    launchOptions: {slowMo: 1000},
});


test("Simple Alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#alertBtn").click();

     page.on("dialog", async(dialog)=>{
        expect(dialog.type()).toBe("Alert");
        expect(dialog).toContain("I am an alert box!");
        dialog.accept;

    })

});

 test("Confirm and Cancel Alert",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator("#confirmBtn").click();

        page.on("dialog",async(dialog)=>{
             expect(dialog.type).toBe("alert");
             expect(dialog).toContain("Press a button!");

             dialog.accept();
             dialog.dismiss();

        })

    });

    test.only("Prompt Alert",async({page})=>{
       await page.goto("https://testautomationpractice.blogspot.com/");

        page.on("dialog",async(dialog)=>{
            expect(dialog.type()).toBe("prompt");
            expect(dialog.message()).toContain("Please enter your name:");
            expect(dialog.defaultValue()).toContain("Harry Potter");
            await dialog.accept("ahmed");
        
        });
        await page.locator("#promptBtn").click();

        const x = await page.locator("#demo").textContent();
        console.log(x);
    })