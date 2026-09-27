import pytest
from playwright.sync_api import Page, expect

def test_homepage_loads_successfully(page: Page):
    """Verify homepage loads with status 200, renders hero, CTA, and footer."""
    response = page.goto("/", wait_until="domcontentloaded")
    assert response.status == 200, f"Expected 200, got {response.status}"

    # Verify document title
    expect(page).to_have_title("Study Abroad Consultants in Tamil Nadu | HighEd")

    # Verify Hero H1
    h1 = page.locator("h1")
    expect(h1).to_be_visible()
    assert "Study Abroad" in h1.inner_text()

    # Verify CTA buttons
    counselling_btn = page.locator("#cta-book-counselling")
    expect(counselling_btn).to_be_visible()

    # Verify Footer renders
    footer = page.locator("footer")
    expect(footer).to_be_visible()

    # Check images naturalWidth > 0
    images = page.locator("img").all()
    assert len(images) > 0, "No images found on homepage"
    for img in images[:10]:
        natural_w = img.evaluate("el => el.naturalWidth")
        assert natural_w > 0, f"Image {img.get_attribute('src')} failed to load (naturalWidth=0)"

    # Assert no unhandled fatal page errors
    assert len(page.page_errors) == 0, f"Fatal JS page errors detected: {page.page_errors}"
