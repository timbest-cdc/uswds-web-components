import { newE2EPage } from '@stencil/core/testing';

describe('usa-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<usa-tag></usa-tag>');

    const element = await page.find('usa-tag');
    expect(element).toHaveClass('hydrated');
  });
});
