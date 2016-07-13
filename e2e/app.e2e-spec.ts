import { KomuterPage } from './app.po';

describe('komuter App', function() {
  let page: KomuterPage;

  beforeEach(() => {
    page = new KomuterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
