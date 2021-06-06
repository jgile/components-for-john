import { newE2EPage } from '@stencil/core/testing';

describe('a-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-toggle></a-toggle>');

    const element = await page.find('a-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
