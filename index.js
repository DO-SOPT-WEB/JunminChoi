const button = document.getElementById('top');

let opacity = 0;
button.style.opacity = opacity;
window.addEventListener('scroll', function() {

    const scrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    opacity = scrollPosition;

        button.style.opacity = opacity;
});