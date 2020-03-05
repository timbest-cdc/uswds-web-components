import { newSpecPage } from "@stencil/core/testing";
import { Alert } from "./alert";

it("defaults to the info alert", async () => {
  const page = await newSpecPage({
    components: [Alert],
    html: `<usa-alert>
            <span slot="header">Informative status</span>
            <span slot="text">Lorem ipsum dolor sit amet</span>
          </usa-alert>`
  });
  expect(page.root).toEqualHtml(
    `<usa-alert>
       <div class="usa-alert usa-alert--info" role="alert">
         <div class="usa-alert__body">
           <h3 class="usa-alert__heading">
             <span slot="header">
               Informative status
             </span>
           </h3>
           <p class="usa-alert__text">
             <span slot="text">
               Lorem ipsum dolor sit amet
             </span>
           </p>
         </div>
       </div>
     </usa-alert>`
  );
});
