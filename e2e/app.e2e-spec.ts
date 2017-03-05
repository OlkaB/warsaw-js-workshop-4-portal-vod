import { WarsawjsVodPage } from './app.po';

describe('warsawjs-vod App', () => {
  let page: WarsawjsVodPage;

  beforeEach(() => {
    page = new WarsawjsVodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
