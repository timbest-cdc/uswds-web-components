import {newSpecPage} from "@stencil/core/testing";
import {Button} from "./button";

it("renders an anchor tag when the href property is present", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button href="https://designsystem.digital.gov/">USWDS</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button href="https://designsystem.digital.gov/"><mock:shadow-root>
    <a class="usa-button" href="https://designsystem.digital.gov/"><slot></slot></a></mock:shadow-root>USWDS</usa-button>`
  );
});

it("renders the default button when a variant is given", async () => {
  const page = await newSpecPage({
    components: [Button],
     html: `<usa-button variant="outline">Default</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button variant="outline"><mock:shadow-root>
    <button class="usa-button usa-button--outline"><slot></slot></button></mock:shadow-root>Default</usa-button>`
  );
});

it("renders the default button when no variant is given", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button>Default</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button><mock:shadow-root><button class="usa-button"><slot></slot></button></mock:shadow-root>Default</usa-button>`
  );
});

it("renders a button with a custom type", async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<usa-button button-type="submit">Default</usa-button>`
  });
  expect(page.root).toEqualHtml(
    `<usa-button button-type="submit"><mock:shadow-root>
    <button class="usa-button" type="submit"><slot></slot></button></mock:shadow-root>Default</usa-button>`
  );
});

// it("should handle clicks", async () => {
//   const page = await newSpecPage({
//     components: [Button],
//     html: `<usa-button>Default</usa-button>`
//   });

//   const button = page.rootInstance.querySelector("button");
//   expect(button).not.toBeNull();
//   const buttonSpy = jest.fn();
//   page.win.addEventListener("buttonClicked", buttonSpy);
//   button.click();
//   await page.waitForChanges();
//   expect(buttonSpy).toHaveBeenCalled();
// });

// it("should not emit click when disabled", async () => {
//   const page = await newSpecPage({
//     components: [Button],
//     html: `<usa-button disabled="true" type="submit">Default</usa-button>`
//   });
//   const button = page.rootInstance.querySelector("button");
//   expect(button).not.toBeNull();
//   const buttonSpy = jest.fn();
//   page.win.addEventListener("buttonClicked", buttonSpy);
//   button.click();
//   await page.waitForChanges();
//   expect(buttonSpy).not.toHaveBeenCalled();
// });
