import { newE2EPage } from "@stencil/core/testing";

describe("usa-button", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<usa-button></usa-button>");

    const element = await page.find("usa-button");
    expect(element).toHaveClass("hydrated");
  });
});
