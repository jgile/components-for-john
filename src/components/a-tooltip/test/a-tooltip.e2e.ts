import { newE2EPage } from '@stencil/core/testing';

describe('a-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-tooltip></a-tooltip>');

    const element = await page.find('a-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
