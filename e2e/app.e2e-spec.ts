import { AfterHoursSupportPage } from './app.po';

describe('after-hours-support App', () => {
  let page: AfterHoursSupportPage;

  beforeEach(() => {
    page = new AfterHoursSupportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
