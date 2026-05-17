let MOVIES = [];

async function loadData() {
  const res = await fetch('data.json');
  const data = await res.json();

  MOVIES = data.map((m, i) => ({
    id: i,
    title: m.title,
    poster: m.logo,
    url: m.url
  }));

  document.getElementById('stats').textContent = MOVIES.length + ' películas';
  render(MOVIES);
}

function render(list) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  list.forEach(m => {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
      <img src="${m.poster}">
      <div class="card-t">${m.title}</div>
    `;

    div.onclick = () => play(m);
    grid.appendChild(div);
  });
}

function play(m) {
  const player = document.getElementById('player');
  const video = document.getElementById('video');

  player.classList.add('open');
  document.getElementById('title').textContent = m.title;

  video.src = m.url;
  video.play();
}

function closePlayer() {
  const video = document.getElementById('video');
  video.pause();
  video.src = '';
  document.getElementById('player').classList.remove('open');
}

// search
document.getElementById('search').oninput = (e) => {
  const q = e.target.value.toLowerCase();
  render(MOVIES.filter(m => m.title.toLowerCase().includes(q)));
};

// random
document.getElementById('random').onclick = () => {
  render([...MOVIES].sort(() => Math.random() - 0.5));
};

loadData();
