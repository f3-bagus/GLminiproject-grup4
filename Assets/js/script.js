var swiper = new Swiper(".slide-container", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Mendeteksi perubahan scroll
window.addEventListener("scroll", function () {
  // Mendapatkan posisi scroll
  var scrollPosition = window.scrollY;
  // Navbar element
  var navbar = document.querySelector(".navbar");
  // Tambahkan bayangan pada navbar saat scroll
  if (scrollPosition > 0) {
    navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
  // Mendapatkan elemen yang sesuai dengan id dari navbar link
  var sections = document.querySelectorAll(".section");
  sections.forEach(function (section) {
    // Mendapatkan posisi dari elemen
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    // Memeriksa apakah posisi scroll berada di dalam elemen
    if (scrollPosition === 0) {
      // Jika posisi scroll berada di bagian atas, tambahkan kelas "active" pada navbar link Beranda
      document
        .querySelector('.navbar-nav .nav-link[href="#home"]')
        .classList.add("active");
    }
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      // Menghapus kelas active dari semua navbar link
      document
        .querySelectorAll(".navbar-nav .nav-link")
        .forEach(function (link) {
          link.classList.remove("active");
        });
      // Menambahkan kelas active pada navbar link yang sesuai dengan elemen
      var targetLink = document.querySelector(
        '.navbar-nav .nav-link[href="#' + section.id + '"]'
      );
      if (targetLink) {
        targetLink.classList.add("active");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  // Cek posisi scroll saat halaman dimuat
  var scrollPosition = window.scrollY;
  if (scrollPosition === 0) {
    // Jika posisi scroll berada di bagian atas, tambahkan kelas "active" pada navbar link Beranda
    document
      .querySelector('.navbar-nav .nav-link[href="#home"]')
      .classList.add("active");
  }
  // Mendeteksi perubahan scroll
  window.addEventListener("scroll", function () {
    // Loop melalui setiap navbar link
    navbarLinks.forEach(function (link) {
      var sectionId = link.getAttribute("href").substring(1); // Mendapatkan id dari href
      var section = document.getElementById(sectionId); // Mendapatkan elemen dengan id yang sesuai
      // Memeriksa apakah posisi scroll berada di -5% dari elemen yang sesuai dengan href
      if (section.getBoundingClientRect().top <= window.innerHeight * +0.5) {
        // Hapus kelas "active" dari semua navbar link
        navbarLinks.forEach(function (link) {
          link.classList.remove("active");
        });
        // Tambahkan kelas "active" pada navbar link yang sesuai dengan href
        link.classList.add("active");
      }
    });
  });

  // Menambahkan event listener untuk setiap navbar link
  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah default behavior dari link
      var sectionId = this.getAttribute("href").substring(1); // Mendapatkan id dari href
      var targetSection = document.getElementById(sectionId); // Mendapatkan elemen dengan id yang sesuai
      var targetPosition = targetSection.offsetTop - window.innerHeight * 0.05; // Menghitung posisi target dengan -5% dari elemen yang sesuai dengan href
      // Scroll ke posisi target dengan animasi smooth
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});
