import pytest
from playwright.sync_api import Page, expect

def test_mobile_navigation_drawer_open_and_close(mobile_page: Page):
    """Verify mobile hamburger button toggles menu drawer smoothly."""
    mobile_page.goto("/")

    # Hamburger button
    hamburger = mobile_page.locator("button[aria-label*='mobile menu' i]")
    expect(hamburger).to_be_visible()

    # Click hamburger to open
    hamburger.click()

    # Verify menu opened
    expect(hamburger).to_have_attribute("aria-expanded", "true")

    # Click again to close
    hamburger.click()
    expect(hamburger).to_have_attribute("aria-expanded", "false")
