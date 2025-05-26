// Stantlara tıklanınca popup göster
document.querySelectorAll('.stand').forEach((stand) => {
  stand.addEventListener('click', () => {
    const firma = stand.getAttribute('data-firma');
    const aciklama = stand.getAttribute('data-aciklama');

    document.getElementById('popup-title').textContent = firma;
    document.getElementById('popup-description').textContent = aciklama;
    document.getElementById('popup').classList.remove('hidden');
  });
});

// Popup'ı kapatma fonksiyonu
function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
