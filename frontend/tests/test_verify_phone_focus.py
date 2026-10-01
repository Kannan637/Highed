from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge", headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000/book-counselling", wait_until="networkidle")

    # Dismiss any popup if present
    close_btn = page.locator("button[aria-label='Close popup']")
    if close_btn.is_visible():
        close_btn.click()

    inp = page.locator("#lead-phone")
    inp.click()
    page.wait_for_timeout(500)

    # Check outline and border on the input element itself
    input_outline = page.evaluate("() => window.getComputedStyle(document.getElementById('lead-phone')).outline")
    input_border = page.evaluate("() => window.getComputedStyle(document.getElementById('lead-phone')).border")
    input_box_shadow = page.evaluate("() => window.getComputedStyle(document.getElementById('lead-phone')).boxShadow")

    # Check the wrapper
    wrapper_border_color = page.evaluate("() => window.getComputedStyle(document.getElementById('lead-phone').parentElement).borderTopColor")
    wrapper_box_shadow = page.evaluate("() => window.getComputedStyle(document.getElementById('lead-phone').parentElement).boxShadow")

    print(f"INPUT_OUTLINE: {input_outline}")
    print(f"INPUT_BORDER: {input_border}")
    print(f"INPUT_BOX_SHADOW: {input_box_shadow}")
    print(f"WRAPPER_BORDER_COLOR: {wrapper_border_color}")
    print(f"WRAPPER_BOX_SHADOW: {wrapper_box_shadow}")

    # Capture a screenshot of the phone input component focused
    wrapper_el = page.locator("#lead-phone").locator("xpath=..")
    wrapper_el.screenshot(path="tests/screenshots/phone_input_focused.png")
    print("Screenshot saved to tests/screenshots/phone_input_focused.png")

    browser.close()
