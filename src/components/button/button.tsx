import {Component, EventEmitter, h, Prop} from "@stencil/core";

const component = "usa-button";

@Component({
  tag: "usa-button",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-button.scss"
})
export class Button {
  @Prop() variant?:
    | "default"
    | "secondary"
    | "accent-cool"
    | "base"
    | "outline"
    | "outline-inverse";
  @Prop() size?: "big";
  @Prop() unstyled?: boolean;
  @Prop() disabled?: boolean;
  @Prop() hover?: boolean;
  @Prop() active?: boolean;
  @Prop() focused?: boolean;
  @Prop() href?: string;
  @Prop() buttonType?:
    | "button"
    | "submit"
    | "reset";
  @Event()
  buttonClicked: EventEmitter<void>;

  getVariantClass(): string {
    switch (this.variant) {
      case undefined:
      case "default":
        break;
      case "secondary":
      case "accent-cool":
      case "base":
      case "outline":
        return `${component}--${this.variant}`;
      case "outline-inverse":
        return `${component}--outline ${component}--inverse`;
      default:
        throw new Error(
          `Invalid varient "${this.variant}" passed for component "${component}"`
        );
    }
    return "";
  }

  getClasses(): string {
    console.log(this.variant);

    const classes: string[] = [component, this.getVariantClass()];

    if (this.size === "big") {
      classes.push(`${component}--big`);
    }

    if (this.unstyled) {
      classes.push(`${component}--unstyled`);
    }

    if (this.hover) {
      classes.push(`${component}--hover`);
    }

    if (this.active) {
      classes.push(`${component}--active`);
    }

    if (this.focused) {
      classes.push(`${component}--focused`);
    }

    if (this.disabled) {
      classes.push(`${component}--disabled`);
    }

    return classes.join(" ");
  }

  private handleClick() {
    if (!this.disabled) {
      this.buttonClicked.emit();
    }
  }

  render() {
    if (this.href) {
      return (
        <a class={this.getClasses()} href={this.href}>
          <slot/>
        </a>
      );
    }

    if (this.buttonType) {
      return (
        <button class={this.getClasses()} type="submit" disabled={this.disabled} onClick={() => this.handleClick()}>
          <slot/>
        </button>
      );
    }

    return (
      <button class={this.getClasses()} disabled={this.disabled} onClick={() => this.handleClick()}>
        <slot/>
      </button>
    );
  }
}
