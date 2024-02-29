var greeting = document.getElementById("greeting");
    var nama = prompt("Siapa Namamu?");
    greeting.innerHTML = "Hi " + nama + ", welcome to Riif Comp";

var slideContainer = document.querySelector(".slide-container");
var imageContainer = document.querySelector(".image-container");
var images = document.querySelectorAll(".image-container img");

var currentSlide = 0; 
var slideInterval = setInterval(nextSlide, 4000); 

function nextSlide() {
  imageContainer.style.transform = "translateX(-" + (currentSlide + 1) * slideContainer.offsetWidth + "px)";
  currentSlide++;

  if (currentSlide == images.length - 1) {
    currentSlide = 0;
    setTimeout(function () {
      imageContainer.style.transition = "none";
      imageContainer.style.transform = "translateX(0)";
    }, 1000);
    setTimeout(function () {
      imageContainer.style.transition = "all 1s ease";
    }, 1100);
  }
}


function validateForm() {
    event.preventDefault(); 

    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var jenis = document.getElementById("jenis").value;
    var pesan = document.getElementById("pesan").value;
    var error = false;

    if (nama == "") {
        document.getElementById("namaError").innerHTML = "Nama harus diisi";
        error = true;
    } else {
        document.getElementById("namaError").innerHTML = "";
    }

    if (tanggal == "") {
        document.getElementById("tanggalError").innerHTML = "Tanggal harus diisi";
        error = true;
    } else {
        document.getElementById("tanggalError").innerHTML = "";
    }

    if (jenis == "") {
        document.getElementById("jenisError").innerHTML = "Jenis kelamin harus dipilih";
        error = true;
    } else {
        document.getElementById("jenisError").innerHTML = "";
    }

    if (pesan == "") {
        document.getElementById("pesanError").innerHTML = "Pesan harus diisi";
        error = true;
    } else {
        document.getElementById("pesanError").innerHTML = "";
    }

    if (!error) {
        document.getElementById("namaResult").innerText = nama;
        document.getElementById("tanggalResult").innerText = tanggal;
        document.getElementById("jenisResult").innerText = jenis;
        document.getElementById("pesanResult").innerText = pesan;
        document.getElementById("result").style.display = "block";
    }

    return !error;
}
