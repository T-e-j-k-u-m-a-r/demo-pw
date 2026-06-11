import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

const username = "Admin";
const password = "admin123";

test(`Login Test`, async ({page}) => {
    const loginpage = new LoginPage(page);

    await loginpage.launchApp();
    await loginpage.loginToApp(username, password);
    await loginpage.verifyLogin();
    await loginpage.logout();
});