const games = [
  {
    name: "Super Mario Bros",
    core: "nes",
    file: "roms/mario_nes.nes"
  },
  {
    name: "Super Mario Bros 2",
    core: "nes",
    file: "roms/Super Mario Bros. 2 (Europe).nes"
  },
  {
    name: "Super Mario Bros 3",
    core: "nes",
    file: "roms/Super Mario Bros. 3 (USA).nes"
  },
  {
    name: "Contra (USA)",
    core: "gb",
    file: "roms/Contra (USA).nes"
  }
];

function loadGame(game) {
  document.getElementById("game").innerHTML = "";

  window.EJS_player = "#game";
  window.EJS_core = game.core;
  window.EJS_gameUrl = game.file;
  window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
  window.EJS_gameName = game.name;

  const script = document.createElement("script");
  script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
  document.body.appendChild(script);
}

window.onload = () => {
  const menu = document.getElementById("menu");
  games.forEach(game => {
    const btn = document.createElement("button");
    btn.textContent = game.name;
    btn.onclick = () => loadGame(game);
    menu.appendChild(btn);
  });
};
