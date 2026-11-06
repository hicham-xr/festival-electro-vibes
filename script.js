const dateFestival = new Date("2027-07-15T18:00:00").getTime();

function majCompteARebours() {
  const diff = dateFestival - new Date().getTime();
  const j = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById("countdown").textContent =
    j + " j " + h + " h " + m + " min " + s + " s";
}
setInterval(majCompteARebours, 1000);
majCompteARebours();