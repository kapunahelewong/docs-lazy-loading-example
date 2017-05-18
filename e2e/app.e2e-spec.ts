import { CustomerAppPage } from './app.po';

describe('customer-app App', () => {
  let page: CustomerAppPage;

  beforeEach(() => {
    page = new CustomerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
