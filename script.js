const stands = document.querySelectorAll('.stand');
const popup = document.getElementById('popup');
const firmaAdi = document.getElementById('firmaAdi');
const firmaBilgi = document.getElementById('firmaBilgi');

stands.forEach(stand => {
  stand.style.backgroundColor = getRandomColor();
  stand.addEventListener('click', () => {
    firmaAdi.textContent = stand.dataset.firma;
    firmaBilgi.textContent = stand.dataset.aciklama;
    popup.classList.remove('hidden');
  });
});

function kapatPopup() {
  popup.classList.add('hidden');
}

function getRandomColor() {
  const colors = ['#3498db','#e67e22','#1abc9c','#9b59b6','#f39c12','#2ecc71','#e74c3c','#34495e','#16a085','#d35400'];
  return colors[Math.floor(Math.random() * colors.length)];
}
