import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://sturegss.aub.edu.lb/StudentRegistrationSsb/ssb/registration"
  );
  await page
    .getByRole("link", {
      name: "Register for Classes You must be logged in to Search and Register. Search and register for your classes. You can also view and manage your schedule.",
    })
    .click();
  await page.getByPlaceholder("AUBnet Username").click();
  await page.getByPlaceholder("AUBnet Username").fill("USERNAME");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("PASSWORD");
  await page.getByPlaceholder("Password").press("Enter");
  //await page.goto('https://sturegss.aub.edu.lb/StudentRegistrationSsb/ssb/term/termSelection?mode=registration');
  await page.getByRole("link", { name: "Select a term..." }).click();
  /* await page
    .getByRole("option", { name: "Clubs 2022-2023" })
    .getByText("Clubs 2022-2023")
    .click();
  */
  await page
    .getByRole("option", { name: "Fall 2023-2024" })
    .getByText("Fall 2023-2024")
    .click();

  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("link", { name: "Enter CRNs" }).click();
  await page.getByRole("textbox", { name: "CRN" }).click();
  await page.getByRole("textbox", { name: "CRN" }).fill("CRN");
  await page.getByRole("link", { name: "+ Add Another CRN" }).click();
  await page.locator("#txt_crn2").click();
  await page.locator("#txt_crn2").fill("CRN");
  await page.getByRole("link", { name: "+ Add Another CRN" }).click();
  await page.locator("#txt_crn3").click();
  await page.locator("#txt_crn3").fill("CRN");
  await page.getByRole("link", { name: "+ Add Another CRN" }).click();
  await page.locator("#txt_crn4").click();
  await page.locator("#txt_crn4").fill("CRN");
  await page.getByRole("link", { name: "+ Add Another CRN" }).click();
  await page.locator("#txt_crn5").click();
  await page.locator("#txt_crn5").fill("CRN");
  await page.getByRole("link", { name: "+ Add Another CRN" }).click();
  await page.locator("#txt_crn6").click();
  await page.locator("#txt_crn6").fill("CRN");
  await page.getByRole("link", { name: "+ Add Another CRN" }).click();
  await page.getByRole("button", { name: "Add to Summary" }).click();
  await page.getByRole("button", { name: "Submit" }).click();
});
