
// Header Fixo Scroll 
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);

    // Troca de Logo
    if (window.scrollY > 0) {
        $('.img-orange').show();
        $('.img-white').hide();
    } else {
        $('.img-orange').hide();
        $('.img-white').show();
    }
});


