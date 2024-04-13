document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.nav');  
    const header = document.querySelector('header');  

    window.onscroll = function() {
        const headerBottom = header.offsetTop + header.offsetHeight;

        if (window.pageYOffset > headerBottom) {
            navbar.style.backgroundColor = '#000';
        } else {
            navbar.style.backgroundColor = 'transparent';  
        }
    };
});

document.addEventListener("scroll", function() {
    var scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
    var backToTop = document.getElementById("back-to-top");
    
    if (scrollDistance > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});


document.getElementById("back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});
