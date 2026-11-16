const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const filterButtons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    projects.forEach(project => {
      project.style.display =
        filter === 'all' || project.dataset.category === filter ? '' : 'none';
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('formNote').textContent =
    'Thanks! This is a demo form, so your message has not been sent.';
  event.target.reset();
});
