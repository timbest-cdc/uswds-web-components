import { Component, h } from "@stencil/core";

const component = "usa-tag";

// TODO add tag big?
@Component({
  tag: "usa-tag",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-tag.scss"
})
export class Tag {
  render() {
    return (
      <span class={component}>
        <slot />
      </span>
    );
  }
}
