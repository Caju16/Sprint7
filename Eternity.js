function showClass(className) {
    const classes = document.querySelectorAll('.class');
    for (let i = 0; i < classes.length; i++) {
      classes[i].style.display = 'none';
    }

    const classToShow = document.querySelector(`#${className}`);
    classToShow.style.display = 'block';
  }