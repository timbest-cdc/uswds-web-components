import {
  Component,
  h,
  Prop,
  Host,
  Event,
  EventEmitter,
  Element
} from "@stencil/core";

@Component({
  tag: "usa-accordion-item",
  styleUrl: "../../../uswds/src/stylesheets/packages/_usa-accordion.scss",
  shadow: true
})
export class AccordionItem {
  @Prop() heading!: string;
  @Prop() isActive?: boolean;
  @Prop() _id: string;
  @Element() element?: HTMLElement;
  @Event() setActive?: EventEmitter;
  @Event() registerItem?: EventEmitter;
  @Event() unregisterItem?: EventEmitter;
  static latestId: number;

  constructor() {
    this._id = `accordion-item-${AccordionItem.incrementId()}`;
  }

  componentDidUnload() {
    if (!this.unregisterItem) {
      throw new Error("unregisterChild not defined");
    }
    this.unregisterItem.emit(this.element);
  }

  componentWillLoad() {
    if (!this.registerItem) {
      throw new Error("registerChild not defined");
    }
    this.registerItem.emit(this.element);
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }

  private toggle() {
    if (!this.setActive) {
      throw new Error("setActive not defined");
    }
    this.setActive.emit(this.element);
  }

  render() {
    return (
      <Host>
        <h2 class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-expanded={String(this.isActive)}
            aria-controls={this._id}
            onClick={this.toggle.bind(this)}
          >
            {this.heading}
          </button>
        </h2>
        <div
          id={this._id}
          class="usa-accordion__content usa-prose"
          hidden={!this.isActive}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
