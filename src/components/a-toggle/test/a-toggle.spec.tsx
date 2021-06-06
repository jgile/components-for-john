import { newSpecPage } from '@stencil/core/testing';
import { AToggle } from '../a-toggle';

describe('a-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AToggle],
      html: `<a-toggle></a-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <a-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-toggle>
    `);
  });
});
