function showbar() {
    let sidebar = document.querySelector(".menu-sidebar");
    sidebar.style.display = "flex";
    setTimeout(() => {
        sidebar.style.transform = "translateX(0)";
        sidebar.style.opacity = "1";
    }, 10); 
}

function hidebar() {
    let hide = document.querySelector(".menu-sidebar");
    hide.style.transform = "translateX(100%)";
    hide.style.opacity = "0";
    setTimeout(() => hide.style.display = "none", 300);
}

var typed = new Typed(".auto-text", {
    strings: ["Programmer", "Developer", "Gamer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight / 5 * 4;
    const timelineLine = document.querySelector('.isi-timeline');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show-me');
        } else {
            section.classList.remove('show-me');
        }
    });

    const firstSectionTop = sections[0].getBoundingClientRect().top;
    if (firstSectionTop < triggerBottom) {
        timelineLine.classList.add('show-line');
    } else {
        timelineLine.classList.remove('show-line');
    }
});



