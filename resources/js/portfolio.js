var slideIndex;
var art;
var research;
var code;
var artButton;
var portfolioText;

window.onload = function() {
    slideIndex = 1
    showSlides(1, 'pathfindingSlides', 'pathfindingDot')
    showSlides(1, 'mafiaSlides', 'mafiaDot')

    art = document.getElementById("art")
    research = document.getElementById("research")
    code = document.getElementById("code")
    portfolioText = document.getElementById("portfolio-text")
}

function selectCategory(evt, category) {
    var i, tabcontent, categorytabs;

    portfolioText.style.display = "flex"

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    categorytabs = document.getElementsByClassName("category-tab");
    for (i = 0; i < categorytabs.length; i++) {
        categorytabs[i].className = categorytabs[i].className.replace(" category-selected", "");
    }

    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " category-selected";
}

function plusSlides(n, slideName, dotName) {
    showSlides(slideIndex += n, slideName, dotName);
}

function currentSlide(n, slideName, dotName) {
    showSlides(slideIndex = n, slideName, dotName);
}

function showSlides(n, slideName, dotName) {
    var i;
    var slides = document.getElementsByClassName(slideName);
    var dots = document.getElementsByClassName(dotName);
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-slide";
}