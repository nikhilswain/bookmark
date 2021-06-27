// link animation
const nav = document.getElementById('nav-bar');
const links = nav.getElementsByClassName('links');
const grid = document.getElementsByClassName('grid')[0];
const list = document.getElementsByClassName('list')[0];
const showHide = document.getElementById('hs');
const layoutNav = document.getElementById('layoutNav');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';
  });
}

// grid view

grid.addEventListener('click', function () {
  const gridView = document.getElementsByClassName('pinned-list')[0];
  gridView.classList.add('grid-view');
});
list.addEventListener('click', function () {
  const gridView = document.getElementsByClassName('pinned-list')[0];
  gridView.classList.remove('grid-view');
});

// Show hide function

hs.addEventListener('click', function () {
  const pinnedList = document.getElementById('pinnedList');
  if (pinnedList.style.display === 'grid') {
    pinnedList.style.display = 'none';
  } else {
    pinnedList.style.display = 'grid';
  }
});
