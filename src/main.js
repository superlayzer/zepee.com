import "./style.css";

// AJAX-submit (rather than a native POST) so we can show an inline thank-you
// instead of Netlify's redirect. Netlify Forms only respond on the deployed
// site, so locally the POST fails and the button just re-enables.
const forms = document.querySelectorAll('form[name="waitlist"]');

forms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    const originalLabel = button?.textContent;
    if (button) {
      button.disabled = true;
      button.textContent = "Joining…";
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(`Waitlist submit failed: ${res.status}`);

      form.style.height = "auto";
      form.innerHTML =
        "<p class=\"accent-text text-lg font-semibold\">✓ You're on the list — we'll be in touch.</p>";
    } catch (err) {
      console.error(err);
      if (button) {
        button.disabled = false;
        button.textContent = originalLabel;
      }
    }
  });
});
