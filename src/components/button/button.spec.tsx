import {newSpecPage} from "@stencil/core/testing";
import {Button} from "./button";

it("renders an anchor tag when the href property is present", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button href="https://designsystem.digital.gov/">USWDS</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button href="https://designsystem.digital.gov/"><a class="usa-button" href="https://designsystem.digital.gov/">USWDS</a></usa-button>`
  );
});

it("renders the default button when a variant is given", async () => {
  const page = await newSpecPage({
    components: [Button],
     html: `<usa-button variant="outline">Default</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button variant="outline"><button class="usa-button usa-button--outline">Default</button></usa-button>`
  );
});

it("renders the default button when no variant is given", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button>Default</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button><button class="usa-button">Default</button></usa-button>`
  );
});

it("renders a button with a custom type", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button button-type="submit">Default</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button button-type="submit"><button class="usa-button" type="submit">Default</button></usa-button>`
  );
});

it("should handle clicks", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button>Default</usa-button>`
  });

  const button = page.root?.querySelector("button");
  expect(button).not.toBeNull();
  const buttonSpy = jest.fn();
  page.win.addEventListener("buttonClicked", buttonSpy);
  button?.click();
  await page.waitForChanges();
  expect(buttonSpy).toHaveBeenCalled();
});

it("should not emit click when disabled", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button disabled="true" type="submit">Default</usa-button>`
  });
  const button = page.root?.querySelector("button");
  expect(button).not.toBeNull();
  const buttonSpy = jest.fn();
  page.win.addEventListener("buttonClicked", buttonSpy);
  button?.click();
  await page.waitForChanges();
  expect(buttonSpy).not.toHaveBeenCalled();
});
