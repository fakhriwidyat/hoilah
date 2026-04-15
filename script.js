// JavaScript untuk Rumah Makan Nusantara

// Fungsi untuk validasi form kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Terima kasih, ' + name + '! Pesan Anda telah dikirim.');
        // Reset form
        document.getElementById('contact-form').reset();
    } else {
        alert('Harap isi semua field.');
    }
});

// Fungsi untuk smooth scroll ke section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fungsi untuk animasi gambar hero
const heroImage = document.getElementById('hero-image');
heroImage.addEventListener('load', function() {
    heroImage.style.opacity = '1';
});
heroImage.style.opacity = '0';
heroImage.style.transition = 'opacity 1s';