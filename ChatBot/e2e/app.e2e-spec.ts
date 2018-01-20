import { ChatBotPage } from './app.po';

describe('chat-bot App', () => {
  let page: ChatBotPage;

  beforeEach(() => {
    page = new ChatBotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
