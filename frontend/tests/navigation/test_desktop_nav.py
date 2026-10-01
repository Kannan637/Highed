import pytest
from playwright.sync_api import Page, expect

def test_desktop_navbar_and_logo(page: Page):
    """Verify desktop navbar renders logo and primary dropdown buttons."""
    page.goto("/")

    # Logo links to home
    logo = page.locator("nav a[href='/']").first
    expect(logo).to_be_visible()

    # Dropdowns are present
    study_abroad_btn = page.locator("button:has-text('Study Abroad')").first
    expect(study_abroad_btn).to_be_visible()

    # Open dropdown
    study_abroad_btn.click()
    expect(study_abroad_btn).to_have_attribute("aria-expanded", "true")

    # Press Escape and move mouse away to close dropdown
    page.keyboard.press("Escape")
    page.mouse.move(0, 0)
    expect(study_abroad_btn).to_have_attribute("aria-expanded", "false")
