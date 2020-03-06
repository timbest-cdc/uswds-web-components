import { newSpecPage } from "@stencil/core/testing";
import { TextInput } from "./text-input";

it("renders a default input", async () => {
  const page = await newSpecPage({
    components: [TextInput],
    html: `<usa-text-input />`
  });
  expect(page.root).toEqualHtml(
    `<usa-text-input>
        <input class="usa-input" type="text">
    </usa-text-input>`
  );
});

it("renders a numeric readonly disabled input", async () => {
  const page = await newSpecPage({
    components: [TextInput],
    html: `<usa-text-input readonly disabled type="number"/>`
  });
  expect(page.root).toEqualHtml(
    `<usa-text-input disabled="" readonly="" type="number">
        <input class="usa-input usa-input--disabled" disabled="" readonly="" type="number">
    </usa-text-input>`
  );
});
