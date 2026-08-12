const progress = document.querySelector('.page-progress span');
const updateProgress = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();

const enquiryForm = document.getElementById('enquiry-form');
const formStatus = document.getElementById('form-status');
enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thank you. Please email info@erheben.in or call +91 7007109171 to complete your enquiry.';
});

const menuButton = document.querySelector('.menu-toggle');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
});
