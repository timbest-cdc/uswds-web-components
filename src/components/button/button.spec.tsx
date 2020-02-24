import { newSpecPage } from "@stencil/core/testing";
import { Button } from "./button";

it("renders an anchor tag when the href property is present", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button href="https://designsystem.digital.gov/">USWDS</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button href="https://designsystem.digital.gov/"><a class="usa-button" href="https://designsystem.digital.gov/">USWDS</a></usa-button>`
  );
});

it("renders the default button when no varient is given", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button>Default</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button><button class="usa-button">Default</button></usa-button>`
  );
});
