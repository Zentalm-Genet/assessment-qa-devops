const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Clicking DUEL! button hides Draw button and See All Bots button", async () => {
    // Navigate to the game page
    await driver.get("http://localhost:8000");

    // Wait for the DUEL! button to be clickable
    const duelBtn = await driver.wait(until.elementLocated(By.id("duel")), 20000); // Increased timeout duration
    await driver.wait(until.elementIsVisible(duelBtn), 20000); // Increased timeout duration

    // Click the DUEL! button
    await duelBtn.click();

    // Check if Draw button is hidden
    const drawBtn = await driver.findElement(By.id("draw"));
    const isDrawButtonHidden = await drawBtn.isDisplayed();
    expect(isDrawButtonHidden).toBeFalsy();

    // Check if See All Bots button is hidden
    const seeAllBtn = await driver.findElement(By.id("see-all"));
    const isSeeAllButtonHidden = await seeAllBtn.isDisplayed();
    expect(isSeeAllButtonHidden).toBeFalsy();
  });

  test("Removing a bot from Duo returns it to choices", async () => {
    // Navigate to the game page
    await driver.get("http://localhost:8000");

    // Wait for the bot card to be present
    const botCard = await driver.wait(until.elementLocated(By.className("bot-card")), 20000); // Increased timeout duration
    await driver.wait(until.elementIsVisible(botCard), 20000); // Increased timeout duration

    // Click the Add to Duo button
    const addToDuoBtn = await botCard.findElement(By.className("bot-btn"));
    await addToDuoBtn.click();

    // Wait for the bot card to be removed
    await driver.wait(until.stalenessOf(botCard), 20000); // Increased timeout duration

    // Ensure that the bot card is back in choices
    const choicesDiv = await driver.findElement(By.id("choices"));
    const isBotCardInChoices = await choicesDiv.findElement(By.className("bot-card")).isDisplayed();
    expect(isBotCardInChoices).toBeTruthy();
  });
});
