import { Component, h, Prop } from "@stencil/core";

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
