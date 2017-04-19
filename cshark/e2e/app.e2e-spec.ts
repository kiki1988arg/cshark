import { CsharkPage } from './app.po';

describe('cshark App', () => {
  let page: CsharkPage;

  beforeEach(() => {
    page = new CsharkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
