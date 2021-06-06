import {Component, h, Element, Prop, Event, EventEmitter, Watch} from '@stencil/core';
import classNames from "classnames";

@Component({
  tag: 'a-toggle',
  shadow: false
})
export class AToggle {
  @Element() el: HTMLElement;
  @Event() input: EventEmitter;
  @Prop() label: string;
  @Prop({mutable: true}) value;

  @Watch('value')
  valueChanged() {
    const inputEl = this.el.querySelector('input');
    if (inputEl.value !== this.value) {
      inputEl.value = this.value;
    }
  }

  inputChanged() {
    this.value = !this.value;
    this.input.emit(this.value);
  }

  render() {
    return (
      <div class="a-toggle">
        <div
          role="switch"
          aria-checked="true"
          onClick={this.inputChanged.bind(this)}
          class={classNames('a-toggle-inner', {'a-toggle-active': this.value})}
        >
          <input type="checkbox" value={this.value} class="hidden" onChange={this.inputChanged.bind(this)}/>
          <span aria-hidden="true" class={classNames('a-toggle-nub', {'translate-x-5': this.value, 'translate-x-0': !this.value})}></span>
        </div>
        {this.label &&
        <label class="a-toggle-label" onClick={this.inputChanged.bind(this)}>
          {this.label}
        </label>
        }
      </div>
    );
  }
}
