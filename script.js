document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } 
    });
  });
  