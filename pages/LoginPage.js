import { test, expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameTextBox = page.locator("input[placeholder='Username']");
        this.passwordTextBox = page.locator("input[placeholder='Password']");
        this.submitBtn = page.locator("button:has-text('Login')");
        this.homePageLogo = page.locator("h6:has-text('Dashboard')");
        this.profileLogo = page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon");
        this.logoutMenu = page.locator("//a[normalize-space()='Logout']");

    }

    async launchApp() {
        await this.page.goto("/");
        await expect(this.usernameTextBox).toBeVisible();
    }

    async loginToApp(username, password) {
        await this.usernameTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.submitBtn.click();
    }

    async verifyLogin() {
        await expect(this.homePageLogo).toBeVisible();
    }

    async logout(){

        await this.profileLogo.click()
        await this.logoutMenu.click()

    }
}