import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "usa-accordion-item",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-accordion.scss",
  shadow: true
})
export class AccordionItem {
  @Prop() heading!: string;
  @Prop() _id: string;
  static latestId: number;

  constructor() {
    this._id = `accordion-item-${AccordionItem.incrementId()}`;
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }

  render() {
    return (
      <Host>
        <h2 class="usa-accordion__heading">
          <button class="usa-accordion__button" aria-controls={this._id}>
            {this.heading}
          </button>
        </h2>
        <div id={this._id} class="usa-accordion__content usa-prose">
          <slot />
        </div>
      </Host>
    );
  }
}
