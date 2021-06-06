import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'a-select',
  styleUrl: 'a-select.css',
  shadow: true,
})
export class ASelect {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
