import {Component, Prop, h} from "@stencil/core";

@Component({
  tag: 'a-tooltip'
})
export class ATooltip {
  @Prop() text?: string = "Tooltip";
  @Prop() on?: string = "hover";
  @Prop() position?: string = "top";

  render() {
    return (
      <span class="a-tooltip-wrapper group">
          <div class={{'a-tooltip': true, 'a-tooltip-top': this.position === 'top'}}>
          <div class="a-tooltip-inner">
            {this.text}
          </div>
        </div>
        <slot/>
      </span>
    );
  }
}
