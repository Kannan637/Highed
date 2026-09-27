import pytest
from playwright.sync_api import Page, expect

def test_lead_popup_opens_and_closes_via_button(page: Page):
    """Verify clicking hero CTA opens the lead popup and close button dismisses it."""
    page.goto("/", wait_until="domcontentloaded")

    cta_btn = page.locator("#cta-book-counselling")
    expect(cta_btn).to_be_visible()
    cta_btn.click()

    # Specifically select the Book Free Counselling modal dialog
    dialog = page.get_by_role("dialog", name="Book Free Counselling")
    expect(dialog).to_be_visible(timeout=5000)

    # Verify close button
    close_btn = dialog.get_by_role("button", name="Close")
    expect(close_btn).to_be_visible()
    close_btn.click()

    # Verify popup closes
    expect(dialog).not_to_be_visible(timeout=5000)

def test_lead_popup_closes_on_escape_key(page: Page):
    """Verify pressing Escape dismisses the lead popup modal."""
    page.goto("/", wait_until="domcontentloaded")

    cta_btn = page.locator("#cta-book-counselling")
    cta_btn.click()

    dialog = page.get_by_role("dialog", name="Book Free Counselling")
    expect(dialog).to_be_visible(timeout=5000)

    # Press Escape
    page.keyboard.press("Escape")
    expect(dialog).not_to_be_visible(timeout=5000)

def test_lead_popup_submits_phone_number(page: Page):
    """Verify entering mobile number in lead popup submits and shows success state."""
    page.goto("/", wait_until="domcontentloaded")

    cta_btn = page.locator("#cta-book-counselling")
    cta_btn.click()

    dialog = page.get_by_role("dialog", name="Book Free Counselling")
    expect(dialog).to_be_visible(timeout=5000)

    phone_input = dialog.locator("input[type='tel']")
    phone_input.fill("9876543210")

    submit_btn = dialog.locator("button[type='submit']")
    submit_btn.click()

    # Expect LeadSuccess heading "Thank you!"
    success_heading = dialog.locator("h3:has-text('Thank you!')")
    expect(success_heading).to_be_visible(timeout=5000)
