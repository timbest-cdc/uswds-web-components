import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "usa-text-input",
  styleUrl: "../../../uswds/src/stylesheets/packages/_form-controls.scss"
})
export class TextInput {
  // HTML input-related properties
  @Prop() name?: string;
  @Prop() class?: string;
  @Prop() disabled?: boolean;
  @Prop() maxlength?: number;
  @Prop() readonly?: boolean;
  @Prop() size?: number;
  @Prop() type: string = "text";
  @Prop() value?: string;
  // USWDS style-related properties
  @Prop() error?: boolean;
  @Prop() hover?: boolean;
  @Prop() active?: boolean;
  @Prop() focused?: boolean;
  @Prop() success?: boolean;
  //TODO: at least some aria properties?? aria-labelledby, aria-describedby

  getClasses(): string {
    const classes: string[] = ["usa-input"];
    if (this.class) {
      classes.push(this.class);
    }
    if (this.disabled) {
      classes.push("usa-input--disabled");
    }
    if (this.error) {
      classes.push("usa-input--error");
    }
    if (this.hover) {
      classes.push("usa-input--hover");
    }
    if (this.focused) {
      classes.push("usa-focus");
    }
    if (this.success) {
      classes.push("usa-input--success");
    }
    return classes.join(" ");
  }

  render() {
    return (
      <input
        class={this.getClasses()}
        name={this.name}
        type={this.type}
        value={this.value}
        maxlength={this.maxlength}
        disabled={this.disabled}
        readonly={this.readonly}
        size={this.size}
      />
    );
  }
}
