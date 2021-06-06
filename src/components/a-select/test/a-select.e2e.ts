import { newE2EPage } from '@stencil/core/testing';

describe('a-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<a-select></a-select>');

    const element = await page.find('a-select');
    expect(element).toHaveClass('hydrated');
  });
});
