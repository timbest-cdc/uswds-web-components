import { newSpecPage } from "@stencil/core/testing";
import { Link } from "./link";

it("renders an anchor tag", async () => {
  const page = await newSpecPage({
    components: [Link],
    html: `<usa-link href="https://designsystem.digital.gov/">USWDS</usa-link>`
  });

  const expected = `<usa-link href="https://designsystem.digital.gov/"><a class="usa-link" href="https://designsystem.digital.gov/">USWDS</a></usa-link>`;

  expect(page.root).toEqualHtml(expected);
});
