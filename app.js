fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("movies");

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h4>${item.name || "Sin título"}</h4>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.log(err));