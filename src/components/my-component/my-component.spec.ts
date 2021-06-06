import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';
describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
          <div>
            Hello, World! I'm
          </div>
      </my-component>
    `);
  });
  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Don't call me a framework' JS">
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
      </my-component>
    `);
  });
});
