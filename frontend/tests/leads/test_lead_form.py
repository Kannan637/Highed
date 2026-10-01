import pytest
from playwright.sync_api import Page, expect

def dismiss_auto_popup_if_present(page: Page):
    """Wait for AutoOpenLeadPopup to render and close it completely."""
    page.wait_for_timeout(800)
    close_btn = page.locator("button[aria-label='Close popup']")
    if close_btn.is_visible():
        close_btn.click()
        page.wait_for_timeout(300)

def test_lead_form_renders_and_validates_required_fields(page: Page):
    """Verify submitting an empty lead form triggers validation error messages."""
    page.goto("/book-counselling", wait_until="domcontentloaded")
    dismiss_auto_popup_if_present(page)

    submit_btn = page.locator("button:has-text('Confirm My Counselling Session')")
    submit_btn.click(force=True)

    # Verify client validation error is displayed
    error_banner = page.locator("text=Please correct the highlighted fields before submitting")
    expect(error_banner).to_be_visible(timeout=5000)

def test_lead_form_successful_submission(page: Page):
    """Verify filling out valid details submits lead via API successfully."""
    page.goto("/book-counselling", wait_until="domcontentloaded")
    dismiss_auto_popup_if_present(page)

    page.locator("#lead-fullName").fill("Automated Test Student")
    page.locator("#lead-email").fill("test.student@example.com")
    page.locator("#lead-phone").fill("9876543210")

    preferred_course = page.locator("input[name='preferredCourse']")
    if preferred_course.is_visible():
        preferred_course.fill("Computer Science MS")

    submit_btn = page.locator("button:has-text('Confirm My Counselling Session')")
    submit_btn.click(force=True)

    # Success confirmation
    success_view = page.locator("text=Request Submitted Successfully")
    expect(success_view).to_be_visible(timeout=6000)
