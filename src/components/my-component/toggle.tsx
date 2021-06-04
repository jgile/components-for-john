import {h, Component, Element, Event, EventEmitter, Prop, Watch} from '@stencil/core';

@Component({
  tag: 'a-toggle'
})
export class Toggle {
  @Element() el: HTMLElement;
  @Prop() type: string = 'text';
  @Prop() label: string;
  @Prop({mutable: true}) value;
  @Event() valueChange: EventEmitter;

  @Watch('value')
  valueChanged() {
    const inputEl = this.el.querySelector('input');
    if (inputEl.value !== this.value) {
      inputEl.value = this.value;
    }
  }

  inputChanged(ev: any) {
    let val = ev.target && ev.target.value;
    this.value = val;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <div>
        <div
          onClick={() => this.value = !this.value}
          role="switch"
          aria-checked="true"
          class={this.value ? 'x-toggle x-toggle-active' : 'x-toggle'}
        >
          <input value={this.value} class="hidden" type="checkbox"/>
          <span aria-hidden="true" class={this.value ? 'x-toggle-nub translate-x-5' : 'x-toggle-nub translate-x-0'}></span>
        </div>
      </div>
    )
  }
}
