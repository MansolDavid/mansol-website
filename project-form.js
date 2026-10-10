const form = document.querySelector('#project-form');
const message = document.querySelector('#form-message');
const details = form.elements.details;
const count = document.querySelector('.count');
const started = Date.now();
form.elements.form_started.value = started;
const first = Math.floor(Math.random() * 6) + 3;
const second = Math.floor(Math.random() * 5) + 2;
const answer = first + second;
document.querySelector('#challenge-label').textContent = `What is ${first} + ${second}?`;
details.addEventListener('input', () => count.textContent = `${details.value.length} / 3000`);

form.addEventListener('submit', event => {
  event.preventDefault();
  message.className = 'form-message';
  if (!form.checkValidity()) {
    message.textContent = 'Please complete all required fields and check the information entered.';
    message.classList.add('error');
    form.reportValidity();
    return;
  }
  if (form.elements.website.value) {
    message.textContent = 'We could not submit this enquiry.';
    message.classList.add('error');
    return;
  }
  if (Date.now() - started < 6000) {
    message.textContent = 'Please take a moment to review your enquiry before sending it.';
    message.classList.add('error');
    return;
  }
  if (Number(form.elements.challenge.value) !== answer) {
    message.textContent = 'The human-verification answer is incorrect. Please try again.';
    message.classList.add('error');
    form.elements.challenge.focus();
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent(`Project enquiry from ${data.get('name')}${data.get('company') ? ` — ${data.get('company')}` : ''}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nCompany: ${data.get('company') || 'Not supplied'}\nEmail: ${data.get('email')}\nTelephone: ${data.get('phone') || 'Not supplied'}\nService: ${data.get('service')}\nTimescale: ${data.get('timescale') || 'Not supplied'}\n\nProject details:\n${data.get('details')}`);
  message.textContent = 'Verification complete. Your email application will now open with the enquiry ready to send.';
  message.classList.add('success');
  window.location.href = `mailto:enquiries@mansol.com?subject=${subject}&body=${body}`;
});
