const movies = [
  {
    name: "Película 1",
    url: "https://test-streams.mux.dev/bigbuckbunny/mp4/master.m3u8"
  },
  {
    name: "Película 2",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    name: "Película 3",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  }
];

const grid = document.getElementById("grid");
const player = document.getElementById("player");
const video = document.getElementById("video");
const search = document.getElementById("search");

function render(list){
  grid.innerHTML = "";
  list.forEach(m => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = m.name;

    div.onclick = () => {
      player.style.display = "block";
      video.src = m.url;
      video.play();
    };

    grid.appendChild(div);
  });
}

render(movies);

// buscador
search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = movies.filter(m =>
    m.name.toLowerCase().includes(value)
  );
  render(filtered);
});
