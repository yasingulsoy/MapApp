const salon = document.getElementById("salon");

for (let i = 1; i <= 39; i++) {
  const div = document.createElement("div");
  div.className = "stand";
  div.textContent = `Firma ${i}`;
  div.dataset.firma = `Firma ${i}`;
  div.dataset.info = `Firma ${i} hakkında bilgi buraya gelecek.`;
  div.addEventListener("click", () => {
    document.getElementById("firmaAdi").textContent = div.dataset.firma;
    document.getElementById("firmaBilgi").textContent = div.dataset.info;
    document.getElementById("popup").classList.remove("hidden");
  });
  salon.appendChild(div);
}

function kapatPopup() {
  document.getElementById("popup").classList.add("hidden");
}
