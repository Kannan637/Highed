import os
import pytest
from playwright.sync_api import Browser

SCREENSHOT_ROUTES = [
    ("/", "homepage"),
    ("/about", "about"),
    ("/services", "services"),
    ("/scholarships", "scholarships"),
    ("/book-counselling", "book_counselling"),
    ("/study-in/uk", "country_uk"),
]

SCREENSHOT_DIR = os.path.join(os.path.dirname(__file__), "output")

@pytest.fixture(scope="session", autouse=True)
def ensure_output_dir():
    os.makedirs(SCREENSHOT_DIR, exist_ok=True)

@pytest.mark.parametrize("route,name", SCREENSHOT_ROUTES)
def test_capture_desktop_screenshot(browser: Browser, route: str, name: str):
    """Capture full desktop viewport screenshot."""
    ctx = browser.new_context(
        base_url="http://localhost:3000",
        viewport={"width": 1440, "height": 900}
    )
    page = ctx.new_page()
    page.goto(route, wait_until="domcontentloaded")
    page.wait_for_timeout(500)

    screenshot_path = os.path.join(SCREENSHOT_DIR, f"{name}_desktop_1440x900.png")
    page.screenshot(path=screenshot_path, full_page=False)
    assert os.path.exists(screenshot_path)
    ctx.close()

@pytest.mark.parametrize("route,name", SCREENSHOT_ROUTES)
def test_capture_mobile_screenshot(browser: Browser, route: str, name: str):
    """Capture mobile viewport screenshot."""
    ctx = browser.new_context(
        base_url="http://localhost:3000",
        viewport={"width": 390, "height": 844},
        is_mobile=True,
        has_touch=True
    )
    page = ctx.new_page()
    page.goto(route, wait_until="domcontentloaded")
    page.wait_for_timeout(500)

    screenshot_path = os.path.join(SCREENSHOT_DIR, f"{name}_mobile_390x844.png")
    page.screenshot(path=screenshot_path, full_page=False)
    assert os.path.exists(screenshot_path)
    ctx.close()
