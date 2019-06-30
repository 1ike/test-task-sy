import puppeteer from 'puppeteer';

import state from '../src/js/state';

const url = 'http://localhost:8080/';
const headless = true;
const timeout = 30000;

let page;
let browser;

let cards;
let modal;

const feedbackBtnSelector = '.feedback-btn';
const confirmationBtnSelector = '.modal__confirmation-btn';
const cardHeaderSelector = '.card__header';
const modalCloseBtnSelector = '.modal__closeBtn';

const textContentProp = 'textContent';


const getProperty = async (element, property) => {
  const value = await (await element.getProperty(property)).jsonValue();
  return value;
};

const isVisible = async element => (await element.boxModel() !== null);

describe('E2E browser testing', () => {
  beforeAll(async () => {
    jest.setTimeout(timeout);
    browser = await puppeteer.launch({
      headless,
      args: ['--no-sandbox'],
    });

    page = await browser.newPage();

    await page.goto(url);

    cards = await page.$$('.card--as-link');
    modal = await page.$('.modal');
  });

  test('tarifs block', async () => {
    expect(cards.length).toBe(3);

    const cardPromises = state.tarifs.map(async ({ name }) => {
      const cardHeader = await page.$(`#${name} > ${cardHeaderSelector}`);

      expect(await getProperty(cardHeader, textContentProp)).toBe(name);
    });
    Promise.all(cardPromises);

    const feedbackBtn = await page.$(feedbackBtnSelector);
    expect(await getProperty(feedbackBtn, textContentProp)).toBe('Give feedback');
  });

  test('modal', async () => {
    const confirmationBtn = await page.$(confirmationBtnSelector);
    expect(await isVisible(confirmationBtn)).toBeFalsy();

    const cardHeader = await cards[0].$(cardHeaderSelector);
    const cardName = await getProperty(cardHeader, textContentProp);

    await cards[0].click();
    expect(await isVisible(confirmationBtn)).toBeTruthy();

    const cardModalHeader = await modal.$(cardHeaderSelector);
    const cardModalName = await getProperty(cardModalHeader, textContentProp);
    expect(cardName).toBe(cardModalName);

    await confirmationBtn.click();
    expect(await isVisible(confirmationBtn)).toBeTruthy();

    const modalCloseBtn = await modal.$(modalCloseBtnSelector);
    await modalCloseBtn.click();
    expect(await isVisible(confirmationBtn)).toBeFalsy();

    await cards[0].click();
    expect(await isVisible(confirmationBtn)).toBeTruthy();

    await page.mouse.click(1, 1);
    expect(await isVisible(confirmationBtn)).toBeFalsy();

    await page.waitFor(3500);
  });

  afterAll(() => {
    browser.close();
  });
});
