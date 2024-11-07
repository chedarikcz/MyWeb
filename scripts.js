function copybutton(){
    var input = document.body.appendChild(document.createElement("textarea"));
input.textContent = "chedarik";
input.style.position = "fixed";
input.style.opacity = "0";
input.focus();
input.select();
document.execCommand('copy');
input.parentNode.removeChild(input);

const Toast = Swal.mixin({
     toast: true,
     position: "top-end",
     showConfirmButton: false,
     timer: 2000,
     timerProgressBar: true,
     });
     Toast.fire({
     icon: "success",
     title: "Discord byl zkopírován"
     });
}  

window.onload = function() {
    document.getElementById('contactForm').reset();
};

// Uložíme indexy snímků pro jednotlivé modály
let slideIndexes = {};

// Otevře modal a inicializuje index na první snímek
function openModal(element, modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("active");

        // Inicializujeme slideIndex pro tento modal
        slideIndexes[modalId] = 1;
        showSlides(slideIndexes[modalId], modalId);
    }
}

// Zavře modal
function closeModal(element) {
    const modal = element.closest(".modal-container");
    if (modal) {
        modal.classList.remove("active");
    }
}

// Zobrazí specifický snímek v modalu podle indexu
function showSlides(n, modalId) {
    const modal = document.getElementById(modalId);
    const slides = modal.getElementsByClassName(modalId + "-slide");
    
    // Nastavíme n na správné limity v rozsahu snímků
    if (n > slides.length) { slideIndexes[modalId] = 1; }
    if (n < 1) { slideIndexes[modalId] = slides.length; }
    
    // Skryjeme všechny snímky a zobrazíme pouze ten aktuální
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndexes[modalId] - 1].style.display = "block";
}

// Přepne na další nebo předchozí snímek
function plusSlides(n, modalId) {
    slideIndexes[modalId] += n;
    showSlides(slideIndexes[modalId], modalId);
}
