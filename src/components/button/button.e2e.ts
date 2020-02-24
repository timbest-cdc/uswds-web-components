import { newE2EPage } from "@stencil/core/testing";

const renderButtons = async (variant: string) => {
  const page = await newE2EPage();
  await page.setContent(`
    <h6>${variant}</h6>
    <usa-button variant="${variant}">Default</usa-button>
    <usa-button variant="${variant}" hover={true}>Hover</usa-button>
    <usa-button variant="${variant}" active={true}>Active</usa-button>
    <usa-button variant="${variant}" focus={true}>Focus</usa-button>
    <usa-button variant="${variant}" disabled={true}>Disabled</usa-button>
    <usa-button variant="${variant}" unstyled={true}>Unstyled button</usa-button>
    <usa-button variant="${variant}" big={true}>Big</usa-button>
  `);
  await page.compareScreenshot(variant, {fullPage: false});
}

describe("usa-button", () => {
  it("Default", () => renderButtons("default"));
  it("Secondary", () => renderButtons("secondary"));
  it("Accent Cool", () => renderButtons("accent-cool"));
  it("Base", () => renderButtons("base"));
  it("Outline", () => renderButtons("outline"));
  it("Outline Inverse", () => renderButtons("outline-inverse"));
});
