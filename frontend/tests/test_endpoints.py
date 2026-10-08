import urllib.request

req = urllib.request.Request("http://localhost:3000/", headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as res:
    headers = dict(res.headers)
    html = res.read().decode("utf-8")

print("--- HEADERS ---")
print("Link header:", headers.get("Link"))
print("Permissions-Policy:", headers.get("Permissions-Policy"))

print("--- HTML TAG CHECKS ---")
print("rel='ai-catalog':", 'rel="ai-catalog"' in html)
print("rel='ard':", 'rel="ard"' in html)
print("href='/llms.txt':", 'href="/llms.txt"' in html)
print("href='/llms-full.txt':", 'href="/llms-full.txt"' in html)
print("toolname attribute:", 'toolname=' in html)
print("data-mcp-tool attribute:", 'data-mcp-tool=' in html)
print("hero-student.webp image present:", "hero-student.webp" in html)
print("hero-bg.webp image present:", "hero-bg.webp" in html)
