import pytest
from playwright.sync_api import Page, expect

PRIMARY_ROUTES = [
    "/",
    "/about",
    "/blog",
    "/book-counselling",
    "/contact",
    "/courses",
    "/events",
    "/our-story",
    "/our-team",
    "/scholarships",
    "/services",
    "/study-in",
    "/success-stories",
    "/privacy-policy",
    "/terms",
]

DYNAMIC_ROUTES = [
    "/study-in/uk",
    "/study-in/usa",
    "/services/career-counselling",
]

@pytest.mark.parametrize("route", PRIMARY_ROUTES)
def test_primary_route_smoke(page: Page, route: str):
    """Verify each primary route returns HTTP 200 and renders main landmark without page errors."""
    response = page.goto(route, wait_until="domcontentloaded")
    assert response.status == 200, f"Route {route} returned status {response.status}"

    main = page.locator("#main-content")
    expect(main).to_be_visible(timeout=5000)
    assert len(page.page_errors) == 0, f"Page errors on {route}: {page.page_errors}"

@pytest.mark.parametrize("route", DYNAMIC_ROUTES)
def test_dynamic_route_smoke(page: Page, route: str):
    """Verify dynamic country, city, and service routes return HTTP 200 with proper content."""
    response = page.goto(route, wait_until="domcontentloaded")
    assert response.status == 200, f"Route {route} returned status {response.status}"

    h1 = page.locator("h1").first
    expect(h1).to_be_visible(timeout=5000)
    assert len(page.page_errors) == 0, f"Page errors on {route}: {page.page_errors}"

def test_sitemap_and_robots(page: Page):
    """Verify robots.txt and sitemap.xml exist and return 200."""
    res_robots = page.goto("/robots.txt")
    assert res_robots.status == 200, f"robots.txt status: {res_robots.status}"

    res_sitemap = page.goto("/sitemap.xml")
    assert res_sitemap.status == 200, f"sitemap.xml status: {res_sitemap.status}"
