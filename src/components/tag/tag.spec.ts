import { Tag } from "./tag";
import { newSpecPage } from "@stencil/core/testing";

it("renders a tag", async () => {
  const page = await newSpecPage({
    components: [Tag],
    html: `<usa-tag>New</usa-tag>`
  });
  expect(page.root).toEqualHtml(
    `<usa-tag><mock:shadow-root><span class="usa-tag"><slot></slot></span></mock:shadow-root>New</usa-tag>`
  );
});
