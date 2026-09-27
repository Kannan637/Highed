import pytest
from playwright.sync_api import sync_playwright, Page, BrowserContext

BASE_URL = "http://localhost:3000"

@pytest.fixture(scope="session")
def playwright_instance():
    with sync_playwright() as p:
        yield p

@pytest.fixture(scope="session")
def browser(playwright_instance):
    # Launch with msedge channel for native headless execution
    browser = playwright_instance.chromium.launch(
        channel="msedge",
        headless=True,
        args=["--disable-gpu", "--no-sandbox"]
    )
    yield browser
    browser.close()

@pytest.fixture
def context(browser):
    ctx = browser.new_context(
        base_url=BASE_URL,
        viewport={"width": 1440, "height": 900},
        ignore_https_errors=True
    )
    yield ctx
    ctx.close()

@pytest.fixture
def page(context) -> Page:
    page = context.new_page()
    console_errors = []
    page_errors = []

    def handle_console(msg):
        if msg.type in ["error"]:
            console_errors.append(msg.text)

    def handle_page_error(err):
        page_errors.append(str(err))

    page.on("console", handle_console)
    page.on("pageerror", handle_page_error)

    # Attach list to page for assertions
    page.console_errors = console_errors
    page.page_errors = page_errors

    yield page
    page.close()

@pytest.fixture
def mobile_page(browser) -> Page:
    ctx = browser.new_context(
        base_url=BASE_URL,
        viewport={"width": 390, "height": 844},
        is_mobile=True,
        has_touch=True,
        user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1"
    )
    page = ctx.new_page()
    console_errors = []
    page_errors = []

    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda err: page_errors.append(str(err)))

    page.console_errors = console_errors
    page.page_errors = page_errors

    yield page
    ctx.close()

@pytest.fixture
def tablet_page(browser) -> Page:
    ctx = browser.new_context(
        base_url=BASE_URL,
        viewport={"width": 768, "height": 1024},
        is_mobile=True,
        has_touch=True
    )
    page = ctx.new_page()
    console_errors = []
    page_errors = []

    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda err: page_errors.append(str(err)))

    page.console_errors = console_errors
    page.page_errors = page_errors

    yield page
    ctx.close()
