// Handles the Enquiry form submission (works without a backend)
// Put this script on Enquire.html with: <script src="enquiry-handler.js"></script>

(function () {
  'use strict';

  function getForm() {
    // Looks for the first form element in the page
    return document.querySelector('form');
  }

  function setStatus(message, isError) {
    let el = document.getElementById('enquiry-status');
    if (!el) {
      el = document.createElement('div');
      el.id = 'enquiry-status';
      el.style.marginTop = '1rem';
      el.style.padding = '0.75rem 1rem';
      el.style.borderRadius = '8px';
      el.style.fontFamily = "Trebuchet MS, Gill Sans, sans-serif";
      el.style.fontWeight = '700';
      document.body.appendChild(el);
    }

    el.textContent = message;
    el.style.background = isError ? '#ffebee' : '#e8f5e9';
    el.style.border = isError ? '1px solid #ef5350' : '1px solid #66bb6a';
    el.style.color = isError ? '#c62828' : '#2e7d32';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const form = getForm();
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // keeps page from jumping/reloading

      const statusPrefix = 'Enquiry received!';

      // Collect inputs safely
      const formData = new FormData(form);
      const fullName = (formData.get('Fullname') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const phone = (formData.get('phone') || '').toString().trim();
      const subject = (formData.get('subject') || '').toString().trim();
      const message = (formData.get('Message') || '').toString().trim();

      if (!fullName || !email || !message) {
        setStatus('Please fill in Full Name, Email address, and Message.', true);
        return;
      }

      // Simulate background processing
      setStatus('Submitting your enquiry... please wait.', false);

      // Fake async request (replace with fetch() later if you add a backend)
      setTimeout(function () {
        setStatus(`${statusPrefix} We will contact you soon.`, false);
        form.reset();
      }, 700);
    });
  });
})();

