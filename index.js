// Burger

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const nava = document.querySelectorAll(".nav-a");

nava.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}

// 

function seemore() {
    var batas = document.getElementById("batas");
    var dataText = document.getElementById("data");
    var btnText = document.getElementById("btn");
  
    if (batas.style.display === "none") {
      batas.style.display = "inline";
      btnText.innerHTML = "Lanjut baca"; 
      dataText.style.display = "none";
    } else {
      batas.style.display = "none";
      btnText.innerHTML = "kecilkan"; 
      dataText.style.display = "inline";
    }
  }