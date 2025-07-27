  const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const toggleIcon = document.getElementById('toggle-icon');

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');

      if (navLinks.classList.contains('active')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-times');
      } else {
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
      }
    });

// script for generes & author  active 
  const genreListItems = document.querySelectorAll('#genreList li');
  const genreSections = document.querySelectorAll('.genre-books');

  genreListItems.forEach(item => {
    item.addEventListener('click', () => {
      genreListItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const selected = item.getAttribute('data-genre');
      genreSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === selected) {
          section.classList.add('active');
        }
      });
    });
  });

  function showResetForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("reset-form").style.display = "block";
  }

  function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("reset-form").style.display = "none";
  }