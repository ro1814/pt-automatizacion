const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({ headless: false, slowMo: 50 });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://web.gencat.cat/ca/inici");
  await page.click('//input[@value="Cerca tràmits, departaments, serveis i molt més."]');
  await page.fill('//input[@value="Cerca tràmits, departaments, serveis i molt més."]', 'agenda cultural')
  await page.click('//input[@class="btn btn-default hidden-xs"]');


//   await browser.close();
})();