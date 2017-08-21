import { NEW2Page } from './app.po';

describe('new2 App', function() {
  let page: NEW2Page;

  beforeEach(() => {
    page = new NEW2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
