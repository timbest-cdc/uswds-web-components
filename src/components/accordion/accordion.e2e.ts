import { newE2EPage } from "@stencil/core/testing";

const renderAlert = async (variant: string, content: string) => {
  const page = await newE2EPage();
  await page.setContent(content);
  await page.compareScreenshot(variant, { fullPage: false });
};

describe("usa-accordian", () => {
  it("accordian", () =>
    renderAlert(
      "suaccordianccess",
      `    <usa-accordion bordered>
      <usa-accordion-item heading="First Amendment">
        <p>
          Congress shall make no law respecting an establishment of religion, or
          prohibiting the free exercise thereof; or abridging the freedom of
          speech, or of the press; or the right of the people peaceably to
          assemble, and to petition the Government for a redress of grievances.
        </p>
      </usa-accordion-item>
      <usa-accordion-item heading="Second Amendment">
        <p>
          A well regulated Militia, being necessary to the security of a free
          State, the right of the people to keep and bear Arms, shall not be
          infringed.
        </p>
        <ul>
          <li>This is a list item</li>
          <li>Another list item</li>
        </ul>
      </usa-accordion-item>
    </usa-accordion>`
    ));
});
