import { Component, h, Prop } from "@stencil/core";

const component = "usa-alert";

@Component({
  tag: "usa-alert",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-alert.scss"
})
export class Alert {
  @Prop() variant?: "success" | "warning" | "error" | "info";
  @Prop() interactive?: boolean;

  render() {
    const variant = this.variant ? this.variant : "info";
    return (
      <div
        class={`${component} ${component}--${variant}`}
        role={this.interactive ? "alertdialog" : "alert"}
      >
        <div class={`${component}__body`}>
          <h3 class={`${component}__heading`}>
            <slot name="header" />
          </h3>
          <p class={`${component}__text`}>
            <slot name="text" />
          </p>
        </div>
      </div>
    );
  }
}
