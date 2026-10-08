import pytest
from playwright.sync_api import Browser

VIEWPORTS = [
    {"name": "small_mobile", "width": 320, "height": 800},
    {"name": "iphone", "width": 390, "height": 844},
    {"name": "large_mobile", "width": 430, "height": 932},
    {"name": "tablet", "width": 768, "height": 1024},
    {"name": "desktop", "width": 1440, "height": 900},
]

ROUTES = [
    "/",
    "/about",
    "/courses",
    "/scholarships",
    "/study-in/uk",
]

@pytest.mark.parametrize("vp", VIEWPORTS, ids=[v["name"] for v in VIEWPORTS])
@pytest.mark.parametrize("route", ROUTES)
def test_no_horizontal_overflow(browser: Browser, vp: dict, route: str):
    """Verify document.documentElement.scrollWidth <= clientWidth across all screen sizes."""
    context = browser.new_context(
        base_url="http://localhost:3000",
        viewport={"width": vp["width"], "height": vp["height"]},
        is_mobile=(vp["width"] < 768),
        has_touch=(vp["width"] < 768)
    )
    page = context.new_page()

    try:
        page.goto(route, wait_until="domcontentloaded")
        page.wait_for_timeout(300)

        # Evaluate overflow: scrollWidth must not exceed clientWidth
        overflow_data = page.evaluate("""() => {
            const doc = document.documentElement;
            return {
                scrollWidth: doc.scrollWidth,
                clientWidth: doc.clientWidth,
                diff: doc.scrollWidth - doc.clientWidth
            };
        }""")

        assert overflow_data["scrollWidth"] <= overflow_data["clientWidth"] + 1, (
            f"Horizontal overflow detected on {route} at {vp['name']} ({vp['width']}px): "
            f"scrollWidth={overflow_data['scrollWidth']}, clientWidth={overflow_data['clientWidth']} "
            f"(excess {overflow_data['diff']}px)"
        )
    finally:
        context.close()
