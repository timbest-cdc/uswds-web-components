import { Component, h, Prop, Listen, State } from "@stencil/core";

@Component({
  tag: "usa-accordion",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-accordion.scss",
  shadow: true
})
export class Accordion {
  @Prop() bordered?: boolean;
  @State() items: Element[] = []
  @State() active?: Element

  getClasses() {
    const classes = ["usa-accordion"];
    if (this.bordered) {
      classes.push("usa-accordion--bordered");
    }
    return classes.join(" ");
  }

  @Listen('registerItem')
  registerItemHandler({detail: item}: CustomEvent<Element>) {
    this.items.push(item)
  }

  @Listen('unregisterItem')
  unregisterItemHandler({detail: item}: CustomEvent<Element>) {
    this.items.filter((i) => i !== item)
  }

  @Listen('setActive')
  setActiveHandler({detail: item}: CustomEvent<Element>) {
    this.items.forEach((i => (i as any)["isActive"] = false));
    if (item === this.active) {
      this.active = undefined;
      (item as any)["isActive"] = false;
    } else {
      this.active = item;
      (item as any)["isActive"] = true;
    }
  }

  render() {
    return (
      <div class={this.getClasses()}>
        <slot />
      </div>
    );
  }
}
