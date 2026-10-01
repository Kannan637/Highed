import pytest
from playwright.sync_api import Page

KEY_PAGES = [
    "/",
    "/about",
    "/courses",
    "/scholarships",
    "/services",
    "/contact",
    "/book-counselling",
    "/study-in/dubai",
    "/best-study-consultant-in/chennai",
]

@pytest.mark.parametrize("route", KEY_PAGES)
def test_no_uncaught_js_errors(page: Page, route: str):
    """Verify pages execute without unhandled JavaScript runtime exceptions or React hydration errors."""
    page_errors = []
    console_errors = []

    page.on("pageerror", lambda err: page_errors.append(str(err)))
    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

    page.goto(route, wait_until="load")
    page.wait_for_timeout(800)

    # Filter out benign third-party or chrome extension errors if any
    critical_errors = [
        err for err in page_errors
        if "ResizeObserver" not in err
    ]

    assert len(critical_errors) == 0, f"Uncaught JavaScript exceptions on {route}: {critical_errors}"
