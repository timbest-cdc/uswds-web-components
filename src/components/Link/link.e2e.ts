import { newE2EPage } from "@stencil/core/testing";

const renderLink = async (variant: "regular" | "external" | "visited") => {
  const page = await newE2EPage();
  let content;
  if (variant === "regular") {
    content = `<usa-link href="https://usds.gov">Regular</usa-link>`;
  } else {
    content = `<usa-link href="https://usds.gov" ${variant}={true}>${variant}<usa-link>`;
  }

  await page.setContent(content);
  await page.compareScreenshot(variant, { fullPage: false });
};

describe("usa-link", () => {
  it("Regular", () => renderLink("regular"));
  // it("External", () => renderLink("external"));
  it("Visited", () => renderLink("visited"));
});
