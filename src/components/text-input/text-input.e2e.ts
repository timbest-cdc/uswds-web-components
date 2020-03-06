import { newE2EPage } from "@stencil/core/testing";

const renderTextInput = async (variant: string) => {
  const page = await newE2EPage();
  await page.setContent(`
    <h6>${variant}</h6>
    <usa-text-input variant="${variant}">Default</usa-text-input>
    <usa-text-input variant="${variant}" hover={true}>Hover</usa-text-input>
    <usa-text-input variant="${variant}" active={true}>Active</usa-text-input>
    <usa-text-input variant="${variant}" focus={true}>Focus</usa-text-input>
    <usa-text-input variant="${variant}" disabled={true}>Disabled</usa-text-input>
    <usa-text-input variant="${variant}" unstyled={true}>Unstyled button</usa-text-input>
    <usa-text-input variant="${variant}" big={true}>Big</usa-text-input>
  `);
  await page.compareScreenshot(variant, { fullPage: false });
};

describe("usa-text-input", () => {
  it("Default", () => renderTextInput("default"));
  it("Secondary", () => renderTextInput("secondary"));
  it("Accent Cool", () => renderTextInput("accent-cool"));
  it("Base", () => renderTextInput("base"));
  it("Outline", () => renderTextInput("outline"));
  it("Outline Inverse", () => renderTextInput("outline-inverse"));
});
