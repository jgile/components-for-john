import { newSpecPage } from '@stencil/core/testing';
import { ASelect } from '../a-select';

describe('a-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ASelect],
      html: `<a-select></a-select>`,
    });
    expect(page.root).toEqualHtml(`
      <a-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-select>
    `);
  });
});
