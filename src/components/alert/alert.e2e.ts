import { newE2EPage } from "@stencil/core/testing";

const renderAlert = async (variant: string, content: string) => {
  const page = await newE2EPage();
  await page.setContent(content);
  await page.compareScreenshot(variant, { fullPage: false });
};

describe("usa-alert", () => {
  it("Success", () =>
    renderAlert(
      "success",
      `<usa-alert variant="success">
  <span slot="header">Success status</span>
  <span slot="text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.</span>
</usa-alert>`
    ));
  it("Warning", () =>
    renderAlert(
      "warning",
      `<usa-alert variant="warning">
    <span slot="header">Warning status</span>
    <span slot="text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.</span>
    </usa-alert>`
    ));

  it("Error", () =>
    renderAlert(
      "error",
      `<usa-alert variant="error">
    <span slot="header">Error status</span>
    <span slot="text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.</span>
    </usa-alert>`
    ));

  it("Info", () =>
    renderAlert(
      "info",
      `<usa-alert variant="info">
    <span slot="header">Informative status</span>
    <span slot="text">Lorem ipsum dolor sit amet, <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed do eiusmod.</span>
    </usa-alert>`
    ));
});
