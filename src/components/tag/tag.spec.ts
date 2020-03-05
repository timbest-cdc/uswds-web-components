import { Tag } from "./tag";
import { newSpecPage } from "@stencil/core/testing";

it("renders a tag", async () => {
  const page = await newSpecPage({
    components: [Tag],
    html: `<usa-tag>New</usa-tag>`
  });
  expect(page.root).toEqualHtml(
    `<usa-tag><span class="usa-tag">New</span></usa-tag>`
  );
});
