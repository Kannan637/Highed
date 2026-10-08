import json
import pytest
from playwright.sync_api import Page

SEO_PAGES = [
    "/",
    "/about",
    "/scholarships",
    "/services",
    "/study-in/usa",
]

@pytest.mark.parametrize("route", SEO_PAGES)
def test_seo_metadata_present(page: Page, route: str):
    """Verify title, meta description, and canonical link exist on every page."""
    page.goto(route, wait_until="domcontentloaded")

    title = page.title()
    assert len(title) > 0, f"Empty title on {route}"

    meta_desc = page.locator("meta[name='description']").first
    assert meta_desc.count() > 0, f"Missing meta description on {route}"
    desc_content = meta_desc.get_attribute("content")
    assert desc_content and len(desc_content) > 10, f"Description too short on {route}"

    canonical = page.locator("link[rel='canonical']").first
    assert canonical.count() > 0, f"Missing canonical tag on {route}"

@pytest.mark.parametrize("route", SEO_PAGES)
def test_structured_data_valid_json(page: Page, route: str):
    """Verify JSON-LD scripts are valid, parseable JSON-LD schemas."""
    page.goto(route, wait_until="domcontentloaded")

    json_ld_tags = page.locator("script[type='application/ld+json']").all()
    assert len(json_ld_tags) > 0, f"No JSON-LD schemas found on {route}"

    for tag in json_ld_tags:
        content = tag.inner_text()
        assert len(content.strip()) > 0, f"Empty JSON-LD on {route}"
        parsed = json.loads(content)
        assert "@context" in parsed, f"Missing @context in schema on {route}"
