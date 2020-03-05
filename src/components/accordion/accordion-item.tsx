import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "usa-accordion-item"
})
export class AccordionItem {
  @Prop() accordionId!: string;
  @Prop() heading!: string;

  render() {
    return (
      <Host>
        <h2 class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-controls={this.accordionId}
          >
            {this.heading}
          </button>
        </h2>
        <div id={this.accordionId} class="usa-accordion__content usa-prose">
          <slot />
        </div>
      </Host>
    );
  }
}
