function toggleHam(x) {
    x.classList.toggle("change");

    let topMenu = document.getElementById('top-menu');
    
    if (topMenu.className === 'menu') {
        topMenu.className += ' menu-active';
    } else {
        topMenu.className = 'menu';
    }
  }