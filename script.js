<script>
document.addEventListener('DOMContentLoaded', () => {
  // 1) Mobile nav toggle
  const burger    = document.querySelector('.burger');
  const nav       = document.querySelector('.nav-links');
  const navLinks  = document.querySelectorAll('.nav-links li');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      navLinks.forEach((link, i) => {
        link.style.animation 
          ? link.style.animation = '' 
          : link.style.animation = `navLinkFade 0.5s ease forwards ${(i/7+0.3)}s`;
      });
    });
  }

  // 2) Project filtering
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(button => {
    button.addEventListener('click', () => {
      // toggle active class
      filterBtns.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      // show/hide cards
      const filter = button.dataset.filter;
      projectCards.forEach(card => {
        const cats = card.dataset.category.split(' ');
        card.style.display = (filter === 'all' || cats.includes(filter))
                             ? '' : 'none';
      });
    });
  });

  // 3) Smooth scrolling + auto‐close mobile menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach(link => link.style.animation = '');
      }
    });
  });

  // 4) Fixed navbar shadow on scroll
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.style.boxShadow = window.scrollY > 100
      ? '0 2px 10px rgba(0, 0, 0, 0.1)'
      : 'none';
  });

  // 5) Typewriter effect
  const demo = document.getElementById('demo');
  if (demo) {
    const text  = "Hello, I'm Mahadi Hasan Alif";
    const speed = 100; // ms per character
    let idx = 0;
    function typeWriter() {
      if (idx < text.length) {
        demo.textContent += text[idx++];
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }
});
</script>
