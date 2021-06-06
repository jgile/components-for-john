import { newSpecPage } from '@stencil/core/testing';
import { ATooltip } from '../a-tooltip';

describe('a-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ATooltip],
      html: `<a-tooltip></a-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <a-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </a-tooltip>
    `);
  });
});
