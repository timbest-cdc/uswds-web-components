import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "usa-accordion",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-accordion.scss"
})
export class Accordion {
  @Prop() bordered?: boolean;

  getClasses() {
    const classes = ["usa-accordion"];
    if (this.bordered) {
      classes.push("usa-accordion--bordered");
    }
    return classes.join(" ");
  }

  render() {
    return (
      <div class={this.getClasses()}>
        <slot />
      </div>
    );
  }
}

@Component({
  tag: "usa-accordion-item",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-accordion.scss"
})
export class AccordionItem {
  @Prop() id: string;
  @Prop() expanded?: boolean;
  @Prop() heading: string;

  constructor(id: string, heading: string) {
    this.id = id;
    this.heading = heading;
  }

  render() {
    return (
      <Host>
        <h2 class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-expanded={this.expanded || false}
            aria-controls={this.id}
          >
            {this.heading}
          </button>
        </h2>
        <div id={this.id} class="usa-accordion__content usa-prose">
          <slot />
        </div>
      </Host>
    );
  }
}
