import { Component, h, Prop } from "@stencil/core";

const component = "usa-link";

@Component({
  tag: "usa-link",
  styleUrl: "../../../uswds/src/stylesheets/elements/typography/_links.scss",
  shadow: true
})
export class Link {
  @Prop() external?: boolean;
  @Prop() href?: string;

  getClasses(): string {
    const classes: string[] = [component];

    if (this.external === true) {
      classes.push(`${component}--external`);
    }

    return classes.join(" ");
  }

  render() {
    return (
      <a class={this.getClasses()} href={this.href}>
        <slot />
      </a>
    );
  }
}
